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
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
      NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
      siteUrl: process.env.SITE_URL,
    }
  }
});
