import Vue from 'vue';
import App from './App';
import router from './router';

import axios from 'axios'

import ElementUI from 'element-ui'

/**
 * 自定义指令
 */
import './custom/directive';
/**
 * 自定义组件
 */
import './custom/assembly';
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})
Vue.config.productionTip = false
Vue.use(ElementUI);
// 将 axios 添加的 Vue 原型上后就不需要再在每个需要使用它的页面引入了
Vue.prototype.$http = axios;
// $http.get('/', function() {});
// $http.post('/', function() {});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
