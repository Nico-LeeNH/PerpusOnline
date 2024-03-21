import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Index from '../components/siswa/Index.vue'
import Tambah from '../components/siswa/Tambah.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/siswa',
    name: 'index',
    component: Index
  },
  {
    path: '/siswa/tambah',
    name: 'tambah',
    component: Tambah
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
