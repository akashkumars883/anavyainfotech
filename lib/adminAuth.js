import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

export const ADMIN_SESSION_COOKIE = "anavya_admin_session";
export const ADMIN_SESSION_SECONDS = 60 * 60 * 12;

function sessionSigningKey() {
  return process.env.TURSO_AUTH_TOKEN || "";
}

export function hashAdminPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

export function verifyAdminPassword(password, storedHash) {
  if (typeof password !== "string" || typeof storedHash !== "string") return false;
  const [algorithm, salt, hash] = storedHash.split("$");
  if (algorithm !== "scrypt" || !salt || !hash || !/^[a-f\d]{128}$/i.test(hash)) return false;
  const expected = Buffer.from(hash, "hex");
  const actual = scryptSync(password, salt, expected.length);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function createAdminSessionToken(email) {
  const key = sessionSigningKey();
  if (!key) return null;
  const payload = Buffer.from(JSON.stringify({
    email,
    expiresAt: Math.floor(Date.now() / 1000) + ADMIN_SESSION_SECONDS,
  })).toString("base64url");
  const signature = createHmac("sha256", key).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function isAdminRequest(request) {
  const key = sessionSigningKey();
  if (!key) return false;
  const token = request.cookies?.get(ADMIN_SESSION_COOKIE)?.value || "";
  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) return false;
  const expected = createHmac("sha256", key).update(payload).digest();
  const supplied = Buffer.from(signature, "base64url");
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return false;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return Boolean(session.email && session.expiresAt > Math.floor(Date.now() / 1000));
  } catch {
    return false;
  }
}

export function requireAdmin(request) {
  if (!process.env.TURSO_AUTH_TOKEN) {
    return NextResponse.json({ error: "Turso authentication is not configured" }, { status: 503 });
  }
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
