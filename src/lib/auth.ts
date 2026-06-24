import { createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE_NAME = "admin_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 dias, em segundos

function sign(value: string, secret: string): string {
  return createHmac("sha256", secret).update(value).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function createSessionCookieValue(secret: string): string {
  const issuedAt = Date.now().toString();
  return `${issuedAt}.${sign(issuedAt, secret)}`;
}

export function isValidSession(cookieValue: string | undefined, secret: string): boolean {
  if (!cookieValue) return false;
  const [issuedAt, signature] = cookieValue.split(".");
  if (!issuedAt || !signature) return false;
  if (!safeEqual(sign(issuedAt, secret), signature)) return false;
  const age = Date.now() - Number(issuedAt);
  return age >= 0 && age <= SESSION_MAX_AGE * 1000;
}

export function verifyPassword(candidate: string, expected: string, secret: string): boolean {
  return safeEqual(sign(candidate, secret), sign(expected, secret));
}
