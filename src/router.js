import Vue from 'vue';
import VueRouter from 'vue-router';
import Bebidas from './components/Bebidas';
import detalhar from './components/detalhar'
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'obj',
            component: Bebidas
        },
        {
            path: '/detalhar/:id',
            name: 'detalhar',
            component: detalhar
        }
        
    ]
});
