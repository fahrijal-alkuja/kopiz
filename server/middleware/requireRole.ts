export default defineEventHandler((event) => {
  const url = event.path?.split('?')[0] || ''

  // Only protect /api routes
  if (!url.startsWith('/api')) return

  // Whitelist Public Routes (Exact Match)
  const publicRoutes = [
    '/api/auth/login',
    '/api/auth/refresh',
    '/api/auth/seed', // Has internal env check
    '/api/auth/users', // Public user list for login
    '/api/customer/order'
  ]

  if (publicRoutes.includes(url)) return

  // Whitelist Public Routes (Prefix/Method specific)
  if (event.method === 'GET') {
    // Allow reading menu and raffles publicly
    if (url.startsWith('/api/menu')) return
    if (url.startsWith('/api/raffles')) return
  }

  // Check Authentication
  if (!event.context.user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized - Login Required'
    })
  }
})
