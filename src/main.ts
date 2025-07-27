import { createApp } from 'vue'
import "./assets/tailwind.css";
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
