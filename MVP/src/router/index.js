import Vue from 'vue'
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';


import createChat from '../pages/createChat/Index.vue';
import editChat from '../pages/editChat/Index.vue';
import Chat from '../pages/chat/Index.vue';
import Login from '../pages/index/Index.vue';
import Dashboard from '../pages/dashboard/Index.vue';
import Respostas from '../pages/respostas/Index.vue';

Vue.use(VueRouter);

const routes = [{
        path: '*',
        component: Login,
        beforeEnter: (to, from, next) => {
            const id = Cookies.get('id');
            if (id) {
                router.push('/dashboard');
            } else {
                next()
            }
        }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            const id = Cookies.get('id');
            if (id) {
                next()
            } else {
                router.push('/');
            }
        }
    },
    {
        path: '/chat',
        component: createChat,
        beforeEnter: (to, from, next) => {
            const id = Cookies.get('id');
            if (id) {
                next()
            } else {
                router.push('/');
            }
        }
    },
    {
        path: '/chat/:id',
        component: Chat,
        props: true,
    },
    {
        path: '/chat/edit/:id',
        component: editChat,
        props: true,
        beforeEnter: (to, from, next) => {
            const id = Cookies.get('id');
            if (id) {
                next()
            } else {
                router.push('/');
            }
        }
    },
    {
        path: '/respostas/:chat_id',
        component: Respostas,
        props: true,
        beforeEnter: (to, from, next) => {
            const id = Cookies.get('id');
            if (id) {
                next()
            } else {
                router.push('/');
            }
        }
    },
];


const router = new VueRouter({
    routes,
    mode: 'history'
});


export default router