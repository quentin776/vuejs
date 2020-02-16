import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './../views/HomePage.vue';
import DetailsPage from './../views/DetailsPage.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


const routes = [
    { 
        path: '/',
        component: HomePage 
    },
    { 
        path: '/details/:id', 
        component: DetailsPage 
    }
  ]

  export default new VueRouter({
    routes 
  })