// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  extends: ['@nuxt/ui-pro'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: "2025-03-01"
})
