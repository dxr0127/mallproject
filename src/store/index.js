import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false, // 是否显示登录提示页
    menuind: '',
    urlkey: '',
    bread: []
  },
  mutations: {
    setMenuInd (state, msg) {
      state.menuind = msg
    },
    setUrlkey (state, msg) {
      state.urlkey = msg
    },
    setBread (state, msg) {
      state.bread = msg
    }
  },
  actions: {
    isLogin (context) {
      context.commit('isLogin')
    }
  }
})
