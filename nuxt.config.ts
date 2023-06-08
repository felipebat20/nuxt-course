// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    "@nuxtjs/supabase",
    '@nuxtjs/i18n',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
      VERCEL_URL: process.env.VERCEL_URL,
      siteUrl: process.env.SITE_URL,
    }
  },

  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'pt-BR',
    vueI18n: './i18n.config.ts',
  }
});
