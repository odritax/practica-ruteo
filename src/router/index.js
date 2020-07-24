import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login';  // asumiendo que hicimos este componente
import Home from '../components/Home';  // asumiendo que hicimos este componente
import FastFood from '../components/FastFood';  // asumiendo que hicimos este componente
import Restoran from '../components/Restoran';  // asumiendo que hicimos este componente
import NoEncontrada from '../components/NotFound'


Vue.use(VueRouter);    // instalamos explícitamente el router
export default new VueRouter({
    routes: [
        {
            path: '/login', 
            component: Login
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
            component: Restoran
        },
        {
            path: '*',
            component: NoEncontrada     
        }
    ]
  })