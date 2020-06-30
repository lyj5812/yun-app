import Vue from 'vue'
import Router from 'uni-simple-router'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      aliasPath: '/',
      path: '/pages/index/index',
      name: 'index'
    }
  ]
})

export default router

