import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/view/HomeView.vue";

const router = createRouter({
    routes: [{
        path: '/',
        component: HomeView
    }],
    history: createWebHistory()
})

createApp(App)
    .use(router)
    .mount('#app')
