import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Form from '../views/Form.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
