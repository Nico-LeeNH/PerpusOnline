import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store' // Mengimpor store dari file store.js
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('navbar-component', require('./components/Navbar.vue').default)
Vue.component('sidebar-component', require('./components/Sidebar.vue').default)

new Vue({
  router,
  store, // Menggunakan store yang telah diimpor
  render: h => h(App)
}).$mount('#app')

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(require('vue-moment'));

Vue.prototype.$axios = axios
