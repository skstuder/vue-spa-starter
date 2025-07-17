// css reset
import '@unocss/reset/tailwind.css'
// our custom defined css variables
import './assets/main.css'
// generated uno.css styles
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
