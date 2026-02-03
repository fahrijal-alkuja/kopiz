export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn, initialized } = useAuth()

  // Skip middleware on server-side or if not initialized yet
  if (process.server) return

  // Public routes
  if (to.path === '/login' || to.path === '/order') return

  // Redirect to login if not logged in
  if (!isLoggedIn.value) {
    return navigateTo('/login')
  }
})
