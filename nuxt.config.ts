export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/vars.css', '~/assets/css/settings.css', '~/assets/css/fonts.css'],
  modules: [
    'nuxt-aos', 
    '@nuxt/icon', 
    '@nuxt/fonts', 
    /* 'nuxt-studio' */,
  ],
  app: {
    head: {
      title: 'Nuxt Template',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ]
    }
  }
})