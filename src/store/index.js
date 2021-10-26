import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light'
  },
  getters: {
    getTheme: state => state.theme
  },
  mutations: {
    setTheme: (state, data) => {
      state.theme = data
      // console.log(data)
    }
  },
  actions: {
    doTheme({ state, commit }, data) {
      let htmlElement = document.getElementsByTagName('html')[0]
      htmlElement.setAttribute('data-color-theme', data)
      commit('setTheme', data)
      // console.log(data)
    }
  }
})