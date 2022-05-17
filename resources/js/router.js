import Vue from 'vue';
import Router from 'vue-router';
import WelcomeVue from "./pages/Welcome.vue";

Vue.user(Router);

const routes = [
    {
        path : '/',
        name : 'welcome',
        component :WelcomeVue
    }
];

const router = new Router({
    routes:routes
});
export default{

}
