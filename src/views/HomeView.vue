<!-- When you create a url route in Vue Router (src/router/index.ts), you can assign it to a component, 
 those components are defined in this View Directory. Best practice is to append "View" to the component 
 name -->

<script setup lang="ts">
import HomeComponent from '@/components/HomeComponent.vue'
</script>

<template>
  <main class="min-h-[80vh] flex flex-col items-center justify-center bg-background">
    <HomeComponent />
  </main>
</template>
