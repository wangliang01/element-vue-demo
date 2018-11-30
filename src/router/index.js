import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引用组件的新方式
const layout = require('@/views/layout').default

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout
  }
]

const router = new VueRouter({
  routes
})

export default router