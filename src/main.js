// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// import {DatetimePicker} from 'mint-ui'
// Vue.use(Mint);





// import VantGreen from 'vant-green';
// import 'vant-green/lib/index.css';
//
// Vue.use(VantGreen);
//
// import { DatetimePicker } from 'vant-green';
//
// Vue.use(DatetimePicker);


import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'

Vue.use(FormMaking)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui'
Vue.use(ElementUI)
Vue.use(Element)

Vue.filter('check_img', function (el) {
  if (el && el.indexOf('http') < 0) {
    el = 'https://res.paquapp.com/' + el
  }
  return el
});



// Vue.component(DatetimePicker.name, DatetimePicker)
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
