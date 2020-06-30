import router from '@/common/uni-app-router'
import store from './store'
const whiteList = ['/login', '/auth-redirect']// 路由白名单

router.beforeEach((to, from, next) => {
  // console.log(to)
  console.log(to.name)
  console.log(ROUTES)
  next()
})
