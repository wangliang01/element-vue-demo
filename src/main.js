import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Echarts from 'vue-echarts'
// 引用ElementUI
import ElementUI from 'element-ui'
// import '../theme/index.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 注册组件后即可使用
Vue.component('v-chart', Echarts)



// 引入normalize.css
import 'normalize.css'

// 引入自定义样式
import '@/styles'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
