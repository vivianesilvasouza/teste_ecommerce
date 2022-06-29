import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'
import Categories from '../views/Categories.vue'
import Product from '../views/product.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/categories/:category',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
