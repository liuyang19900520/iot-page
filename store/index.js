import Vue from 'vue'
import Vuex from 'vuex'
import cookie from "vue-cookies"

Vue.use(Vuex)




const store = () => new Vuex.Store({

  state: {
    //从cookie中取
    lang: 'en',
  },
  mutations: {
    saveLocal: function (state, lang) {
      state.lang = lang;
      cookie.set("language", lang);
    },
  },
  actions: {
    nuxtClientInit({
      commit
    }, {
      req
    }) {
      const autho = localStorage.getItem('auth._token.local') //or whatever yours is called
      commit('SET_AUTHO', autho)
      console.log('From nuxtClientInit - ' + autho)
    }
  }
})

export default store
