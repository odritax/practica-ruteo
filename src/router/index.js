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
            component: login
        },
        {
            path: '/', 
            component: Home
        },
        {
            path: '/category/:comida', 
            component: FastFood
        },
        {
            path: '/:nombre', 
            component: Restoran,
            children:[
            {
                path:'',
                component: About
            },
            {
                path:'images',
                component:Photos
            },
            {
                path:'reviews',
                component: Reviews
            }
            ]
        },
        {
            path: '*',
            component: NoEncontrada     
        }
    ]
  })