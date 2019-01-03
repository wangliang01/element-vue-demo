import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引用组件的新方式
const layout = require('@/views/layout').default

const login = require('@/views/login').default

const home = require('@/views/home').default

const routes = [{
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [{
      path: '',
      name: 'home',
      component: home
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router