import Vue from 'vue'
import VueRouter from 'vue-router';


import createChat from '../pages/createChat/Index.vue';
import editChat from '../pages/editChat/Index.vue';
import Chat from '../pages/chat/Index.vue';
import Login from '../pages/login/Index.vue';
import Dashboard from '../pages/dashboard/Index.vue';


Vue.use(VueRouter);


const routes = [
    { path: '', component: Login },
    { path: '/chat', component: createChat },
    { path: '/dashboard', component: Dashboard },
    {
        path: '/chat/:id',
        component: Chat,
        props: true
    },
    {
        path: '/chat/edit/:id',
        component: editChat,
        props: true
    },
];


const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router