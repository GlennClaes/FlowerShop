import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/global.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// AOS initialiseren voor "Hyper Smooth" UX
AOS.init({
  duration: 600, // Extreem snel (was 400)
  easing: 'ease-out-cubic',
  once: true,
  offset: 50, // Direct triggeren (was 50)
})

// AOS verversen bij elke paginawissel
router.afterEach(() => {
  AOS.refresh()
})

app.mount('#app')
