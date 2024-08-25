// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-30",
  devtools: { enabled: true },
  modules: [
    "@nuxthub/core",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "@nuxtjs/mdc",
    "@nuxtjs/sitemap",
  ],
  typescript: {
    typeCheck: true,
  },
  i18n: {
    baseUrl: process.env.BASE_URL,
    defaultLocale: "uk",
    langDir: "lang",
    locales: [
      {
        code: "uk",
        file: "uk-UA.json",
        iso: "uk-UA",
      },
      {
        code: "en",
        file: "en-US.json",
        iso: "en-US",
      },
    ],
  },
  colorMode: {
    preference: "system",
  },
  hub: {
    database: true,
    blob: true,
  },
  fonts: {
    families: [
      {
        name: "e-Ukraine",
        src: "/fonts/e-Ukraine-UltraLight.otf",
        weight: "100",
        global: true,
      },
      {
        name: "e-Ukraine",
        src: "/fonts/e-Ukraine-Light.otf",
        weight: "300",
        global: true,
      },
      {
        name: "e-Ukraine",
        src: "/fonts/e-Ukraine-Regular.otf",
        weight: "400",
        global: true,
      },
      {
        name: "e-Ukraine",
        src: "/fonts/e-Ukraine-Medium.otf",
        weight: "500",
        global: true,
      },
    ],
  },
});
