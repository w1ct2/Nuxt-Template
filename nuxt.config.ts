export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/vars.css', '~/assets/css/settings.css'],
  modules: ['nuxt-aos', '@nuxt/icon', '@nuxt/fonts', /* 'nuxt-studio' */]
})