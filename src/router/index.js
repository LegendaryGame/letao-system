import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import User from '@/views/User'
import Login from '@/views/Login'
import ProductList from '@/views/ProductList'
import CategoryFirst from '@/views/CategoryFirst'
import CategorySecond from '@/views/CategorySecond'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/user',
          name: 'User',
          component: User
        },
        {
          path: '/productList',
          name: 'ProductList',
          component: ProductList
        },
        {
          path: '/categoryFirst',
          name: 'categoryFirst',
          component: CategoryFirst
        },
        {
          path: '/categorySecond',
          name: 'CategorySecond',
          component: CategorySecond
        }
      ]
    }
  ]
})
