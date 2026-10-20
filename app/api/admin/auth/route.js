import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/turso";
import { checkRateLimit } from "@/lib/redis";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_SECONDS,
  createAdminSessionToken,
  isAdminRequest,
  verifyAdminPassword,
} from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

async function hasAdminAccount() {
  try {
    const result = await tursoClient.execute("SELECT email FROM admin_users LIMIT 1");
    return Boolean(result.rows?.length);
  } catch {
    return false;
  }
}

export async function GET(request) {
  return NextResponse.json({
    configured: await hasAdminAccount(),
    authenticated: isAdminRequest(request),
  }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request) {
  if (!process.env.TURSO_AUTH_TOKEN) {
    return NextResponse.json({ error: "Turso authentication is not configured" }, { status: 503 });
  }

  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const rate = await checkRateLimit(clientIp, "admin_login", 8, 60);
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many login attempts. Wait one minute and try again." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  if (!email || !password || password.length > 256) {
    return NextResponse.json({ error: "Enter your admin email and password." }, { status: 400 });
  }

  try {
    const result = await tursoClient.execute({
      sql: "SELECT email, password_hash FROM admin_users WHERE email = ? LIMIT 1",
      args: [email],
    });
    const admin = result.rows?.[0];
    if (!admin || !verifyAdminPassword(password, admin.password_hash)) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const token = createAdminSessionToken(admin.email);
    if (!token) {
      return NextResponse.json({ error: "Admin session signing is not configured" }, { status: 503 });
    }
    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: ADMIN_SESSION_SECONDS,
    });
    return response;
  } catch (error) {
    console.error("Admin authentication database error:", error.message);
    return NextResponse.json({ error: "Admin login service is unavailable." }, { status: 503 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}
