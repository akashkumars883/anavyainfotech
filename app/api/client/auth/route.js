import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { tursoClient } from "@/lib/turso";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

// In-memory fallback client sessions & users store with disk persistence
const globalClientUsers = globalThis._clientUsersStore || new Map();
const LOCAL_USERS_FILE = path.join(process.cwd(), "lib", "localClientUsers.json");

function loadUsersFromDisk() {
  try {
    if (fs.existsSync(LOCAL_USERS_FILE)) {
      const data = JSON.parse(fs.readFileSync(LOCAL_USERS_FILE, "utf8"));
      Object.entries(data).forEach(([k, v]) => globalClientUsers.set(k, v));
    }
  } catch (e) {
    console.warn("Failed to load local users", e.message);
  }
}

function saveUsersToDisk() {
  try {
    const obj = {};
    globalClientUsers.forEach((v, k) => { obj[k] = v; });
    fs.writeFileSync(LOCAL_USERS_FILE, JSON.stringify(obj, null, 2), "utf8");
  } catch (e) {
    console.warn("Failed to save local users", e.message);
  }
}

if (!globalThis._clientUsersStore) {
  globalThis._clientUsersStore = globalClientUsers;
  loadUsersFromDisk();
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { action, email, password, name, siteId, siteUrl } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // 1. REGISTER ACTION
    if (action === "register") {
      const cleanSiteId = (siteId || email.split("@")[0]).toLowerCase().replace(/[^a-z0-9-]/g, "-");
      
      const userData = {
        email: cleanEmail,
        name: name || cleanEmail.split("@")[0],
        password, // Basic hashed/plaintext storage for client demo auth
        siteId: cleanSiteId,
        siteUrl: siteUrl || `https://${cleanSiteId}.com`,
        createdAt: new Date().toISOString(),
      };

      globalClientUsers.set(cleanEmail, userData);
      saveUsersToDisk(); // Automatically persist to disk

      // Save to Turso DB permanently
      try {
        await tursoClient.execute({
          sql: "INSERT OR REPLACE INTO client_accounts (email, name, password, site_id, site_url, created_at) VALUES (?, ?, ?, ?, ?, ?)",
          args: [cleanEmail, userData.name, password, cleanSiteId, userData.siteUrl, userData.createdAt]
        });
      } catch (tursoErr) {
        console.warn("[Client Auth Turso Notice]:", tursoErr.message);
      }

      // Save to Supabase client_accounts table if available
      try {
        if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
          await supabaseAdmin.from("client_accounts").upsert({
            email: cleanEmail,
            name: userData.name,
            site_id: cleanSiteId,
            site_url: userData.siteUrl,
            updated_at: new Date().toISOString(),
          });
        }
      } catch (sbErr) {
        console.warn("[Client Auth Supabase Notice]:", sbErr.message);
      }

      return NextResponse.json({
        success: true,
        message: "Registration successful",
        user: {
          email: userData.email,
          name: userData.name,
          siteId: userData.siteId,
          siteUrl: userData.siteUrl,
        },
      });
    }

    // 2. LOGIN ACTION
    let user = globalClientUsers.get(cleanEmail);

    // Fallback: Check Turso DB for user
    if (!user) {
      try {
        const { rows } = await tursoClient.execute({
          sql: "SELECT * FROM client_accounts WHERE email = ?",
          args: [cleanEmail]
        });
        if (rows && rows.length > 0) {
          const data = rows[0];
          user = {
            email: data.email,
            name: data.name || cleanEmail.split("@")[0],
            password: data.password,
            siteId: data.site_id,
            siteUrl: data.site_url,
            createdAt: data.created_at
          };
          globalClientUsers.set(cleanEmail, user);
          saveUsersToDisk();
        }
      } catch (err) {
        console.warn("Turso user fetch notice:", err.message);
      }
    }

    // Fallback: Check Supabase DB for user
    if (!user && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const { data } = await supabaseAdmin
          .from("client_accounts")
          .select("*")
          .eq("email", cleanEmail)
          .maybeSingle();

        if (data) {
          user = {
            email: data.email,
            name: data.name || cleanEmail.split("@")[0],
            siteId: data.site_id,
            siteUrl: data.site_url,
          };
          globalClientUsers.set(cleanEmail, user);
        }
      } catch (err) {
        console.warn("Supabase user fetch notice:", err.message);
      }
    }

    // Enforce strict login: check if user exists
    if (!user) {
      return NextResponse.json(
        { error: "Account not found. Please create an account first." },
        { status: 404 }
      );
    }

    // Verify password if it exists (for locally registered users)
    if (user.password !== password) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        email: user.email,
        name: user.name,
        siteId: user.siteId,
        siteUrl: user.siteUrl,
      },
    });
  } catch (err) {
    console.error("Client Auth API Error:", err);
    return NextResponse.json(
      { error: err.message || "Authentication failed" },
      { status: 500 }
    );
  }
}
