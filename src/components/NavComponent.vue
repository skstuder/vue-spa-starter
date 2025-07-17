<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>

<template>
  <nav
    class="w-full flex gap-6 justify-center items-center h-12 bg-surface border-b border-gray-100"
  >
    <RouterLink to="/" class="text-primary hover:underline">Home</RouterLink>
    <RouterLink to="/about" class="text-primary hover:underline">About</RouterLink>
    <button @click="userStore.toggleLoginState">
      {{ userStore.isLoggedIn ? 'Logout' : 'Login' }}
    </button>
  </nav>
</template>
