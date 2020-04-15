import Vue from 'vue'
import VueResource from 'vue-resource';
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
import App from './App.vue'
import router from './router/index.js';
import store from './store/index.js'

Vue.use(VueResource);

Vue.use(Vuesax, {
    // options here
})



new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})