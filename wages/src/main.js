// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Bars from 'vuebars'
import vueEcharts from 'vue-echarts'
import router from './router'
// import mock from './mock'
import ElementUi from 'element-ui'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(Bars)
Vue.use(vueEcharts)
Vue.component('chart', vueEcharts)
let vm = ''
axios.interceptors.request.use(function (config) {
  console.log('请求前')
  return config
}, function (error) {
  console.log('请求前错误')
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data
}, function ({response}) {
  console.log(response)
  if (response.status === 403) {
    vm.$router.replace('/login')
  } else {
    vm.$message.error(response.data.msg)
  }
  return Promise.reject(response)
})
// mock.bootstrap()
/* eslint-disable no-new */
vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
