import Vue from 'vue'
import App from './App'
import router from './common/uni-app-router'
import { RouterMount } from 'uni-simple-router'
import store from './store'
import './permission'
Vue.config.productionTip = false
App.mpType = 'app'
// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)
const app = new Vue({
  ...App,
  router,
  store
})
// #ifdef H5
RouterMount(app, '#app')
// #endif

// #ifndef H5
app.$mount() // 为了兼容小程序及app端必须这样写才有效果
// #endif

