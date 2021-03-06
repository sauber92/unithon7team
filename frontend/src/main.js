// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import BootstrapVue from 'bootstrap-vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import router from './router'
import axio from 'axios'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueOnsen)
Vue.prototype.$http = axio

Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

