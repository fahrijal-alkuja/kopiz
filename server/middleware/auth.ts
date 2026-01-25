export default defineEventHandler((event) => {
  const token = getCookie(event, 'appkopz_token')

  if (token) {
    try {
      const decoded = verifyToken(token)
      if (decoded) {
        event.context.user = decoded
      }
    } catch (error) {
      // Invalid token, ignore
    }
  }
})