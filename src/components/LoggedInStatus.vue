<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>

<template>
  <p class="text-text-muted">
    Logged in status: <b>{{ userStore.isLoggedIn }}</b>
  </p>
</template>
