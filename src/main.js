import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'


import { i18n } from './i18n/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
// app.use(BootstrapVue)
// app.use(IconsPlugin)
app.use(i18n)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";