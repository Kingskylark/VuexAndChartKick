import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

createApp(App).use(store).use(router).use(VueChartkick).mount('#app')
