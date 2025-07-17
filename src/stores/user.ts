import { ref } from 'vue'
import { defineStore } from 'pinia'

// This is a Pinia store. Stores help you manage and share state (data) between components in your app.
// Here, we use it to keep track of whether the user is logged in.
// You can use this store in any component by importing and calling useUserStore().

export const useUserStore = defineStore('user', () => {
  // isLoggedIn is a reactive value (it updates the UI when changed)
  const isLoggedIn = ref(true)

  // This function lets you change the login state
  function toggleLoginState() {
    isLoggedIn.value = !isLoggedIn.value
  }

  // Return the state and functions so you can use them in your components
  // See HomeComponent.vue and AboutComponent.vue for examples of how to use this store
  return { isLoggedIn, toggleLoginState }
})
