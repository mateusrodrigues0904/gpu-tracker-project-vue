import { createApp } from "vue";
import App from "./App.vue";
import {createRouter, createWebHistory} from 'vue-router'

createApp(App).mount("#app");
import "./style.css";

const router = createRouter({
    history: createWebHistory(),
    router: [
        {
            path: '/',
            component: () => import('./views/DashboardView.vue')
        }
    ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')