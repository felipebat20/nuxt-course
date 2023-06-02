<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">
      Log in
    </h1>

    <button @click="login" class="bg-red-400 p-3 rounded text-white font-bold">
      Login with Google
    </button>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'custom',
  });

  const supabase = useSupabaseClient();

  const getUrl = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
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
