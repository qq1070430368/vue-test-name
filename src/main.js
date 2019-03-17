/* eslint-disable fun-call-spacing */
// eslint-disable-next-line fun-call-spacing
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import $ from 'jquery';
import '../static/css/css.reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../static/fonts/iconfont.css';
import MintUI from 'mint-ui';
import './style/config.less';
import 'mint-ui/lib/style.css';

import axios from 'axios';
Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.prototype.$http = axios;
// 定义全局共用titile
Vue.prototype.appTitle = '啊速度撒旦';
// Vue.use($);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
