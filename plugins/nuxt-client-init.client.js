import Vue from 'vue'
import cookie from "vue-cookies"
Vue.component('cookie', cookie)


export default context => {
  context.store.dispatch('nuxtClientInit', context)
}
