import Vue from 'vue'
import VueCookie from 'vue-cookies'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import './assets/styles/icon.css'
import './assets/styles/global.scss'
// import './mock'
import './utils/boost'
import './utils/create-api'
import './lazy'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueCookie)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
