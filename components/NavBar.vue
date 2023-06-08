<template>
  <header
    class="
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      space-x-1
      border-b
      bg-white
      p-4
      shadow-md
    "
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>

  <div v-if="user" class="flex">
    <NuxtLink to="/profile/listings" class="mr-5">
      {{ $t('fields.profile') }}
    </NuxtLink>

    <p
      class="cursor-pointer"
      @click="logout"
    >
      {{ $t('fields.logout') }}
    </p>
  </div>

  <NuxtLink v-else to="/login">
    {{ $t('fields.login') }}
  </NuxtLink>
  </header>
</template>

<script setup>
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();
  const logout = async () => {
    // The conventional way to logout user with supabase
    const { error } = supabase.auth.signOut();

    // The way to fix a bug in previous version
    // try {
    //   await $fetch('/api/_supabase/session', {
    //     method: 'POST',
    //     body: { event: 'SIGNED_OUT', session: null },
    //   })
    // } catch (error) {
    //   return console.log(error);
    // }

    // user.value = null;

    return navigateTo('/');
  }
</script>
