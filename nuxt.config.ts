// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: false },
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    manifest: {
      name: 'APPKOPZ - Point of Sale Premium',
      short_name: 'APPKOPZ',
      description: 'Sistem Kasir & Manajemen Stok Kedai Kopi Modern',
      theme_color: '#0a0c14',
      background_color: '#0a0c14',
      icons: [
        {
          src: '/logo.jpg',
          sizes: '192x192',
          type: 'image/jpeg'
        },
        {
          src: '/logo.jpg',
          sizes: '512x512',
          type: 'image/jpeg'
        }
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module',
      suppressWarnings: true,
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: '/api/menu',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'menu-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 // 1 day
            }
          }
        },
        {
          urlPattern: '/api/inventory/status',
          handler: 'NetworkFirst',
          options: {
             networkTimeoutSeconds: 3,
             cacheName: 'inventory-cache'
          }
        } 
      ]
    }
  },
  vite: {
    server: {
      allowedHosts: true,
      hmr: {
        protocol: 'ws'
      }
    }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'es2022'
      }
    }
  }
})
