import Vue from 'vue';
import App from './App';
import router from './router';

import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './custom/directive'; // 自定义指令
import './custom/assembly'; //自定义组件

import index from './components/pages/index'

Vue.use(index);


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})




