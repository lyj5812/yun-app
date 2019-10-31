import Vue from 'vue'
import Router from 'uni-simple-router'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/pages/index/index',
      name: 'index'
    },
    {
      path: '/pages/basics/layout',
      name: 'layout'
    },
    {
      path: '/pages/basics/background',
      name: 'background'
    },
    {
      path: '/pages/basics/text',
      name: 'text'
    },
    {
      path: '/pages/basics/icon',
      name: 'icon'
    },
    {
      path: '/pages/basics/button',
      name: 'button'
    },
    {
      path: '/pages/basics/design',
      name: 'design'
    },
    {
      path: '/pages/basics/tag',
      name: 'tag'
    },
    {
      path: '/pages/basics/avatar',
      name: 'avatar'
    },
    {
      path: '/pages/basics/progress',
      name: 'progress'
    },
    {
      path: '/pages/basics/shadow',
      name: 'shadow'
    },
    {
      path: '/pages/basics/loading',
      name: 'loading'
    },
    {
      path: '/pages/component/bar',
      name: 'bar'
    },
    {
      path: '/pages/component/nav',
      name: 'nav'
    },
    {
      path: '/pages/component/list',
      name: 'list'
    },
    {
      path: '/pages/component/card',
      name: 'card'
    },
    {
      path: '/pages/component/form',
      name: 'form'
    },
    {
      path: '/pages/component/timeline',
      name: 'timeline'
    },
    {
      path: '/pages/component/chat',
      name: 'chat'
    },
    {
      path: '/pages/component/swiper',
      name: 'swiper'
    },
    {
      path: '/pages/component/modal',
      name: 'modal'
    },
    {
      path: '/pages/component/steps',
      name: 'steps'
    }, {
      path: '/pages/plugin/indexes',
      name: 'indexes'
    }, {
      path: '/pages/plugin/animation',
      name: 'animation'
    }, {
      path: '/pages/plugin/drawer',
      name: 'drawer'
    }, {
      path: '/pages/plugin/verticalnav',
      name: 'verticalnav'
    }
  ]
})

export default router

