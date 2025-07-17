import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(true)

  function toggleLoginState() {
    isLoggedIn.value = !isLoggedIn.value
  }
  return { isLoggedIn, toggleLoginState }
})
