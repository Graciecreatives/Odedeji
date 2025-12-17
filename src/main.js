import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init({duration: 800, once: true});

const app = createApp(App)

app.use(router)

app.mount('#app')
