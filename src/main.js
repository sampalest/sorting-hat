import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './sass/main.scss'
import 'animate.css/animate.css';

createApp(App)
.use(router)
.mount('#app')