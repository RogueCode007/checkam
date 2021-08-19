import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    showMobileNav: false
  },
  mutations: {
    showMobileNav(state, val){
      state.showMobileNav = val
    }
  },
  actions: {
  },
  modules: {
  }
})
