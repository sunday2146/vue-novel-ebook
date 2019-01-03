import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
    error: require('@/assets/images/loading2.jpeg'),
    loading: require('@/assets/images/loading2.jpeg')
})
