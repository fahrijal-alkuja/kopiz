const rateLimitMap = new Map<string, { count: number, lastReset: number }>()
const WINDOW_MS = 60 * 1000 // 1 Minute
const MAX_REQUESTS = 100 // Limit per IP

export default defineEventHandler((event) => {
  // Simple Rate Limiter
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  const now = Date.now()

  let record = rateLimitMap.get(ip)

  if (!record) {
    record = { count: 0, lastReset: now }
    rateLimitMap.set(ip, record)
  }

  // Reset window if expired
  if (now - record.lastReset > WINDOW_MS) {
    record.count = 0
    record.lastReset = now
  }

  // Check limit
  if (record.count >= MAX_REQUESTS) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too Many Requests'
    })
  }

  record.count++
})