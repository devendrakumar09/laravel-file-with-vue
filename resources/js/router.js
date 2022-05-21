import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/QuizesList.vue'
import About from './pages/Quize.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});

export default router;
