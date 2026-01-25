export const useAuth = () => {
  const user = useState<any>('auth_user', () => null)
  const initialized = useState('auth_init', () => false)
  const { success, error: showError } = useToast()
  const { startLoading, stopLoading } = useLoading()
  
  // Use cookies for persistence (available on server & client)
  const tokenCookie = useCookie('appkopz_token', {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    sameSite: 'lax',
    secure: !process.dev
  })
  
  const userCookie = useCookie('appkopz_user', {
    maxAge: 60 * 60 * 24 * 7,
    sameSite: 'lax',
    secure: !process.dev,
    default: () => null
  })

  // Sync state with cookies immediately
  if (!initialized.value) {
    if (tokenCookie.value) {
      if (userCookie.value) {
        user.value = userCookie.value
      } else {
         // Token exists but user doesn't - could try to fetch user or just rely on decoding
      }
    }
    initialized.value = true
  }

  const init = () => {
    // No-op or used for extra checks, since cookies handle the main state
    if (tokenCookie.value && !user.value) {
      // Potentially re-fetch profile if needed
    }
  }

  const login = async (pin: string | number) => {
    try {
      startLoading()
      
      const response = await $fetch<{ accessToken: string, user: any }>('/api/auth/login', {
        method: 'POST',
        body: { pin: pin.toString() }
      })
      
      user.value = response.user
      
      // Save to cookies
      tokenCookie.value = response.accessToken
      userCookie.value = response.user
      
      success('Login berhasil!')
      return response
    } catch (err: any) {
      showError(err.data?.statusMessage || 'Login gagal. Periksa PIN Anda.')
      throw err
    } finally {
      stopLoading()
    }
  }

  const logout = () => {
    user.value = null
    tokenCookie.value = null
    userCookie.value = null
    success('Logout berhasil')
    navigateTo('/login')
  }

  const isOwner = computed(() => user.value?.role === 'OWNER')
  const isLoggedIn = computed(() => !!tokenCookie.value)

  return {
    user,
    initialized,
    init,
    login,
    logout,
    isOwner,
    isLoggedIn,
    accessToken: tokenCookie
  }
}

