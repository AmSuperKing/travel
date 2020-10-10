// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 使用fastClick自带的attach方法绑定到document.body上
fastClick.attach(document.body)
/* eslint-disable no-new */
// ES6写法，键值对的键和值同名时直接一个即可
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
