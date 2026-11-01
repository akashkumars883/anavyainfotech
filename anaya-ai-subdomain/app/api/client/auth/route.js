import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import fs from "fs";
import path from "path";
import { tursoClient } from "@/lib/turso";
import { checkRateLimit } from "@/lib/redis";
import {
  CLIENT_SESSION_COOKIE,
  CLIENT_SESSION_SECONDS,
  createClientSessionToken,
  hashClientPassword,
  isClientAuthConfigured,
  readClientSession,
  verifyClientPassword,
} from "@/lib/clientAuth";

export const dynamic = "force-dynamic";

const globalClientUsers = globalThis._clientUsersStore || new Map();
const LOCAL_USERS_FILE = path.join(process.cwd(), "lib", "localClientUsers.json");

function loadUsersFromDisk() {
  try {
    if (fs.existsSync(LOCAL_USERS_FILE)) {
      const data = JSON.parse(fs.readFileSync(LOCAL_USERS_FILE, "utf8"));
      let migrated = false;
      Object.entries(data).forEach(([key, value]) => {
        if (value.password && !value.password.startsWith("scrypt$")) {
          value.password = hashClientPassword(value.password);
          migrated = true;
        }
        globalClientUsers.set(key, value);
      });
      if (migrated) saveUsersToDisk();
    }
  } catch (error) {
    console.warn("Failed to load local users:", error.message);
  }
}

function saveUsersToDisk() {
  try {
    fs.writeFileSync(LOCAL_USERS_FILE, JSON.stringify(Object.fromEntries(globalClientUsers), null, 2), "utf8");
  } catch (error) {
    console.warn("Failed to save local users:", error.message);
  }
}

if (!globalThis._clientUsersStore) {
  globalThis._clientUsersStore = globalClientUsers;
  loadUsersFromDisk();
}

function publicUser(user) {
  return { email: user.email, name: user.name, siteId: user.siteId, siteUrl: user.siteUrl };
}

function sessionResponse(user) {
  const token = createClientSessionToken(user);
  if (!token) {
    return NextResponse.json({ error: "Client authentication is not configured" }, { status: 503 });
  }
  const response = NextResponse.json({ success: true, user: publicUser(user) });
  response.cookies.set(CLIENT_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: CLIENT_SESSION_SECONDS,
  });
  return response;
}

export async function GET(request) {
  const user = readClientSession(request);
  return NextResponse.json({
    configured: isClientAuthConfigured(),
    authenticated: Boolean(user),
    ...(user ? { user: publicUser(user) } : {}),
  }, { headers: { "Cache-Control": "no-store" } });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(CLIENT_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}

export async function POST(request) {
  try {
    if (!isClientAuthConfigured()) {
      return NextResponse.json({ error: "Client authentication is not configured" }, { status: 503 });
    }

    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const rate = await checkRateLimit(clientIp, "client_auth", 10, 60);
    if (!rate.allowed) {
      return NextResponse.json({ error: "Too many attempts. Please try again in one minute." }, { status: 429 });
    }

    const body = await request.json();
    const { action, email, password, name, siteUrl } = body;
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
        typeof password !== "string" || password.length < (action === "register" ? 10 : 1) || password.length > 256) {
      return NextResponse.json({ error: "Enter a valid email and a password with at least 10 characters." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    if (action === "register") {
      if (globalClientUsers.has(cleanEmail)) {
        return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
      }

      let existing;
      try {
        const result = await tursoClient.execute({
          sql: "SELECT email FROM client_accounts WHERE email = ? LIMIT 1",
          args: [cleanEmail],
        });
        existing = result.rows?.[0];
      } catch (error) {
        console.warn("Client account lookup notice:", error.message);
      }
      if (existing) {
        return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
      }

      let normalizedUrl = "";
      if (siteUrl) {
        try {
          const parsed = new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`);
          if (!/^https?:$/.test(parsed.protocol)) throw new Error("Invalid website URL");
          normalizedUrl = parsed.origin;
        } catch {
          return NextResponse.json({ error: "Enter a valid website URL." }, { status: 400 });
        }
      }

      const user = {
        email: cleanEmail,
        name: typeof name === "string" && name.trim() ? name.trim().slice(0, 120) : cleanEmail.split("@")[0],
        password: hashClientPassword(password),
        siteId: `client-${randomBytes(12).toString("hex")}`,
        siteUrl: normalizedUrl,
        createdAt: new Date().toISOString(),
      };

      try {
        await tursoClient.execute({
          sql: "INSERT INTO client_accounts (email, name, password, site_id, site_url, created_at) VALUES (?, ?, ?, ?, ?, ?)",
          args: [user.email, user.name, user.password, user.siteId, user.siteUrl, user.createdAt],
        });
      } catch (error) {
        if (String(error.message).toLowerCase().includes("unique") || String(error.message).toLowerCase().includes("primary key")) {
          return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
        }
        console.warn("Client account Turso save notice:", error.message);
      }

      globalClientUsers.set(cleanEmail, user);
      saveUsersToDisk();
      return sessionResponse(user);
    }

    let user = globalClientUsers.get(cleanEmail);
    if (!user) {
      try {
        const result = await tursoClient.execute({
          sql: "SELECT * FROM client_accounts WHERE email = ? LIMIT 1",
          args: [cleanEmail],
        });
        const record = result.rows?.[0];
        if (record) {
          user = {
            email: record.email,
            name: record.name || cleanEmail.split("@")[0],
            password: record.password,
            siteId: record.site_id,
            siteUrl: record.site_url || "",
            createdAt: record.created_at,
          };
        }
      } catch (error) {
        console.warn("Client account lookup notice:", error.message);
      }
    }

    if (!user || !user.password) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const isModernHash = user.password.startsWith("scrypt$");
    const passwordIsValid = isModernHash
      ? verifyClientPassword(password, user.password)
      : user.password === password;
    if (!passwordIsValid) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    if (!isModernHash) {
      user.password = hashClientPassword(password);
      try {
        await tursoClient.execute({
          sql: "UPDATE client_accounts SET password = ? WHERE email = ?",
          args: [user.password, cleanEmail],
        });
      } catch (error) {
        console.warn("Client password migration notice:", error.message);
      }
    }

    globalClientUsers.set(cleanEmail, user);
    saveUsersToDisk();
    return sessionResponse(user);
  } catch (error) {
    console.error("Client Auth API Error:", error);
    return NextResponse.json({ error: "Authentication failed. Please try again." }, { status: 500 });
  }
}
