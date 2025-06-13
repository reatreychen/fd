import { createApp } from 'vue'
import '../src/assets/styles/style.css'
import route from "./router/route"
import App from './App.vue'

const app = createApp(App)
app.use(route)
app.mount('#app')