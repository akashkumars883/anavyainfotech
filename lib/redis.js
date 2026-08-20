import { Redis } from "@upstash/redis";

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

// Initialize Upstash Redis client if credentials exist
export const redis = redisUrl && redisToken
  ? new Redis({
      url: redisUrl,
      token: redisToken,
    })
  : null;

/**
 * Get cached data from Redis
 * @param {string} key
 * @returns {Promise<any|null>}
 */
export async function getCache(key) {
  if (!redis) return null;
  try {
    const data = await redis.get(key);
    return data ? (typeof data === "string" ? JSON.parse(data) : data) : null;
  } catch (err) {
    console.warn(`[Redis Cache Read Warning] Key: ${key}`, err?.message);
    return null;
  }
}

/**
 * Set data into Redis with an Expiration TTL (in seconds)
 * @param {string} key
 * @param {any} data
 * @param {number} ttlSeconds - Expiration time in seconds (default: 3600 = 1 hour)
 */
export async function setCache(key, data, ttlSeconds = 3600) {
  if (!redis) return;
  try {
    const valueStr = JSON.stringify(data);
    await redis.set(key, valueStr, { ex: ttlSeconds });
  } catch (err) {
    console.warn(`[Redis Cache Write Warning] Key: ${key}`, err?.message);
  }
}

/**
 * Delete a cache key from Redis
 * @param {string} key
 */
export async function delCache(key) {
  if (!redis) return;
  try {
    await redis.del(key);
  } catch (err) {
    console.warn(`[Redis Cache Delete Warning] Key: ${key}`, err?.message);
  }
}

/**
 * Simple IP-based Rate Limiter (e.g. max 10 requests per 60 seconds)
 * @param {string} identifier - User IP or unique ID
 * @param {string} action - API action name (e.g. 'contact_form')
 * @param {number} maxRequests - Allowed requests limit (default: 5)
 * @param {number} windowSeconds - Time window in seconds (default: 60)
 * @returns {Promise<{ allowed: boolean, remaining: number }>}
 */
export async function checkRateLimit(identifier, action = "api", maxRequests = 5, windowSeconds = 60) {
  if (!redis || !identifier) return { allowed: true, remaining: maxRequests };

  const key = `ratelimit:${action}:${identifier}`;
  try {
    const requests = await redis.incr(key);
    if (requests === 1) {
      await redis.expire(key, windowSeconds);
    }
    const remaining = Math.max(0, maxRequests - requests);
    return {
      allowed: requests <= maxRequests,
      remaining,
    };
  } catch (err) {
    console.warn("[Redis RateLimit Warning]", err?.message);
    return { allowed: true, remaining: maxRequests };
  }
}
