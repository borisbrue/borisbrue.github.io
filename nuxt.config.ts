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
    // GitHub Pages serves the site from /borisbrue.github.io/
    baseURL: process.env.NUXT_APP_BASE_URL || '/borisbrue.github.io/',
    // Force asset URLs to be absolute so /blog/* routes don't resolve relatively
    buildAssetsDir: '/assets/',
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-studio'],
  studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',
    
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'borisbrue', // your GitHub/GitLab username or organization
      repo: 'borisbrue.github.io', // your repository name
      branch: 'main', // the branch to commit to (default: main)
    }
  },
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
            default: 'github-dark',
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