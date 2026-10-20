import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

export const CLIENT_SESSION_COOKIE = "anavya_client_session";
export const CLIENT_SESSION_SECONDS = 60 * 60 * 12;

function sessionSecret() {
  const secret = process.env.CLIENT_SESSION_SECRET || "";
  return secret.length >= 32 ? secret : "";
}

export function isClientAuthConfigured() {
  return Boolean(sessionSecret());
}

export function hashClientPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

export function verifyClientPassword(password, storedValue) {
  if (typeof storedValue !== "string") return false;
  const [algorithm, salt, storedHash] = storedValue.split("$");
  if (algorithm !== "scrypt" || !salt || !storedHash || !/^[a-f\d]{128}$/i.test(storedHash)) return false;
  const expected = Buffer.from(storedHash, "hex");
  const actual = scryptSync(password, salt, expected.length);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function createClientSessionToken(user) {
  const secret = sessionSecret();
  if (!secret) return null;
  const payload = Buffer.from(JSON.stringify({
    email: user.email,
    name: user.name,
    siteId: user.siteId,
    siteUrl: user.siteUrl,
    expiresAt: Math.floor(Date.now() / 1000) + CLIENT_SESSION_SECONDS,
  })).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function readClientSession(request) {
  const secret = sessionSecret();
  if (!secret) return null;
  const token = request.cookies?.get(CLIENT_SESSION_COOKIE)?.value || "";
  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) return null;
  const expected = createHmac("sha256", secret).update(payload).digest();
  let supplied;
  try {
    supplied = Buffer.from(signature, "base64url");
  } catch {
    return null;
  }
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return null;
  try {
    const user = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!user.email || !user.siteId || user.expiresAt <= Math.floor(Date.now() / 1000)) return null;
    return user;
  } catch {
    return null;
  }
}
