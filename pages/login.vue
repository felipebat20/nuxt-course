<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">
      {{ $t('fields.login') }}
    </h1>

    <button @click="login" class="bg-red-400 p-3 rounded text-white font-bold">
      {{ $t('fields.connect_with_google') }}
    </button>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'custom',
  });

  const supabase = useSupabaseClient();

  const config = useRuntimeConfig();

  const getUrl = () => {
    let url =
      config?.public?.siteUrl ??
      config?.public?.VERCEL_URL ??
      config?.public?.NUXT_PUBLIC_SITE_URL ??
      'http://localhost:3000/';

    url = url.includes('http') ? url : `https://${url}`;
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;

    return url;
  }

  const login = async () => {
    const { error } = supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getUrl(),
      }
    });
  }
</script>
