import Vue from 'vue'
import App from './App'
import router from './common/uni-app-router'
import store from './store'
import './permission'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    router,
    store
})
app.$mount()

 



