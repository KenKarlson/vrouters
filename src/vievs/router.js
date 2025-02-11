import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//Pages
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Example from '../pages/Example.vue';
import Contact from '../pages/Contact.vue';
import Login from '@/pages/Login.vue';

//Routings
export default new Router({
  mode: 'history',
  routes:[
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/example', name: 'e[ample', component: Example },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/login', name: 'login', component: Login },
  ]
})
