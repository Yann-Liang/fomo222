//css
import '@/../static/css/reset.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//less
import '@/less/index.less';
// import 'element-ui/lib/theme-chalk/index.css';
import '@/../static/css/iconfont.css'

//js
import Vue from 'vue';
import filters from '@/filters/index.js'; //过滤器
import VueI18n from 'vue-i18n'; //多语言
import messages from '@/lang/index';
import apiService from '@/services/API-service';
// import ElementUI from 'element-ui';
import BootstrapVue from 'bootstrap-vue';
import BlockUI from 'vue-blockui';

Vue.use(BlockUI)
Vue.use(VueI18n);
// Vue.use(ElementUI);
Vue.use(BootstrapVue);

const browserLanguage = (navigator.language || navigator.browserLanguage)
  .toLowerCase (),
  i18n = new VueI18n ({
    //定义默认语言
    // locale: browserLanguage,
    locale:localStorage.lang||'zh-cn',
    messages,
  });

import App from './app';

window.vueVM = new Vue ({
  i18n,
  render: h => h (App),
}).$mount ('#app');