import Vue from 'vue'
import App from './App.vue'
import router from './vievs/router'

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
