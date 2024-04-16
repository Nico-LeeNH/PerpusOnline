import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Index from '../components/siswa/Index.vue'
import Tambah from '../components/siswa/Tambah.vue'
import Edit from '../components/siswa/Edit.vue'
import Detail from '../components/siswa/Detail.vue'
import indexb from '../components/buku/indexb.vue'
import tambahB from '../components/buku/tambahB.vue'
import edit from '../components/buku/edit.vue'
import detail from '../components/buku/detail.vue'
import login from '../components/login.vue'

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
  {
    path: '/siswa/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/siswa/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/buku',
    name: 'indexB',
    component: indexb
  },
  {
    path: '/buku/tambah',
    name: 'tambahB',
    component: tambahB
  },
  {
    path: '/buku/edit/:id',
    name: 'edit',
    component: edit
  },
  {
    path: '/buku/detail/:id',
    name: 'detail',
    component: detail
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
