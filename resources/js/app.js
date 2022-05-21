require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue';
import App from './App.vue';
//import router from "./router"



Vue.component('file-upload-component', require('./components/FileUploadComponent.vue').default);

const app = new Vue({
    el: '#app',
    render : h => h(App),
});


