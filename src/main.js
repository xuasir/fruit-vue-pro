import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './setup'
Vue.config.productionTip = false

// eslint-disable-next-line vue/require-name-property
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
