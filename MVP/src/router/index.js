import Vue from 'vue'
import VueRouter from 'vue-router';


import Index from '../pages/index/Index.vue';
import Chat from '../pages/chat/Chat.vue';


Vue.use(VueRouter);


const routes = [
    { path: '', component: Index },
    {
        path: '/chat/:id',
        component: Chat,
        props: true
    },
];


const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router