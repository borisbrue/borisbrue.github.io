// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
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
  },
  app: {
    // baseURL: '/borisbrue.github.io/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    // ... options
  }
})
