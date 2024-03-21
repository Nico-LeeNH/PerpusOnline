import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'  // Perbaiki: Mengimpor Axios

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';  // Perbaiki: benar penamaan paket bootstrap-vue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import VueRouter, { Route } from 'vue-router'  // Perbaiki: Menghapus impor yang tidak digunakan

Vue.config.productionTip = false
Vue.component('navbar-component', require('./components/Navbar.vue').default);
Vue.component('sidebar-component', require('./components/Sidebar.vue').default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Vue.use(VueRouter);  // Perbaiki: Menghapus penggunaan VueRouter karena sudah diimpor langsung di atas
// Vue.use(VueAxios.axios);  // Perbaiki: Menghapus penggunaan VueAxios karena tidak digunakan
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Mengatur Axios sebagai properti global Vue
Vue.prototype.$axios = axios;
