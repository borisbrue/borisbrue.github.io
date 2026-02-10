// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2026-02-09',
  
  // head: {
  //   title: 'Boris Bruenen | Full Stack Developer',
  //   htmlAttrs: {
  //     lang: 'de'
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' },
  //     { name: 'format-detection', content: 'telephone=no' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  // },

  nitro: {
    serveStatic: true,
    preset: 'github-pages',
  },
  app: {
          baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: '/assets/', // keep absolute path so assets are not resolved relative to nested routes
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    build: {
      markdown: {
        contentHeading: true,
        highlight: {
          
          // Theme used in all color schemes.
          // theme: 'github-light',
          // OR
          theme: {
            // Default theme (same as single string)
            default: 'monokai',
            // Theme used if `html.dark`
            dark: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai'
          }
        }
      }
    }
  }
})
