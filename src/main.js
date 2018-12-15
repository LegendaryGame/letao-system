// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

import '@/styles/index.scss'

import {isRootLogin} from '@/api'

Vue.use(ElementUI)

Vue.config.productionTip = false
/* 设置导航守卫 */
router.beforeEach((to, from, next) => {
  isRootLogin().then(res => {
    if (res.success || to.path === '/login') {
      next()
    } else {
      next({path: '/login'})
    }
    // console.log(res)
  })
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
