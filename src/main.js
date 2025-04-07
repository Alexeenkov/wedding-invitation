import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/HomeView.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createRouter({
    routes: [{
        path: '/wedding-invitation/',
        component: HomeView,
    }],
    history: createWebHistory(),
})

createApp(App)
    .use(router)
    .use(AOS)
    .mount('#app');

router.beforeEach((to, from, next) => {
    AOS.init({once: true});
    next();
});