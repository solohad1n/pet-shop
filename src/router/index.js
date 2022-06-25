import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
// import Product from '../views/Product.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  // {
  //   path: '/product/:id',
  //   name: 'Id',
  //   component: Product,
  //   props: true
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
