import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引用ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入normalize.css
import 'normalize.css'

// 引入自定义样式
import '@/styles'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
