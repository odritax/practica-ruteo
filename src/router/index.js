import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../components/Login'; 
import Home from '../components/Home'; 
import FastFood from '../components/FastFood'; 
import Restoran from '../components/Restoran'; 
import Reviews from '../components/Reviews'; 
import Photos from '../components/Photos'; 
import About from '../components/About'; 
import NoEncontrada from '../components/NotFound'

Vue.use(VueRouter);    // instalamos explícitamente el router
export default new VueRouter({
    routes: [
        {
            path: '/login', 
            component: login,
            name: 'login',
            props: true 
        },
        {
            path: '/', 
            component: Home,
            name: 'home',
            props: true 
        },
        {
            path: '/category/:comida', 
            component: FastFood,
            name: 'category',
            props: true 
        },
        {
            path: '/:nombre', 
            component: Restoran,
            name: 'restoran',
            props: true,
            children:[
            {
                path:'',
                component: About,
                name: 'about',
                props: true 
            },
            {
                path:'images',
                component:Photos,
                name: 'photos',
                props: true 
            },
            {
                path:'reviews',
                component: Reviews,
                name: 'reviews',
                props: true 
            }
            ]
        },
        {
            path: '*',
            component: NoEncontrada     
        }
    ]
  })