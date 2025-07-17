<script setup lang="ts">
import NavComponent from '@/components/NavComponent.vue'
</script>

<template>
  <NavComponent />
  <!-- Built in view transition component that can accept UnoCSS transition classes -->
  <!-- docs: https://vuejs.org/guide/built-ins/transition -->
  <Transition
    enter-active-class="transition-all duration-400 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-400 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
    mode="out-in"
  >
    <!-- RouterView will show the component assigned to the current route -->
    <!-- docs: https://router.vuejs.org/guide/ -->
    <RouterView />
  </Transition>
</template>
