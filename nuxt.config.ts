// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    "@nuxtjs/supabase",
  ],
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
      VERCEL_URL: process.env.VERCEL_URL,
      siteUrl: process.env.SITE_URL,
    }
  }
});
