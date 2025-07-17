<script setup lang="ts">
import LoggedInStatus from '@/components/LoggedInStatus.vue'
</script>

<template>
  <section class="py-16 text-center">
    <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md gap-4">
      <h1 class="text-3xl font-bold text-primary mb-4">About</h1>
      <p class="text-text-muted">Vue 3, UnoCSS, TypeScript, Pinia</p>
      <LoggedInStatus />
    </div>
  </section>
</template>
