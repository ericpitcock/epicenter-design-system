import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light',
    sidebar: false
  },
  getters: {
    getTheme: state => state.theme,
    getSidebarState: state => state.sidebar
  },
  mutations: {
    setTheme: (state, data) => {
      state.theme = data
    },
    setSidebarState: (state) => {
      state.sidebar = !state.sidebar
    }
  },
  actions: {
    toggleTheme({ state, commit }, data) {
      // let htmlElement = document.getElementsByTagName('html')[0]
      // htmlElement.setAttribute('data-color-theme', data)
      // document.documentElement.setAttribute('data-color-theme', data)
      // commit('setTheme', data)
      // let currentTheme = document.documentElement.getAttribute('data-color-theme')
      let newTheme = state.theme == 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-color-theme', newTheme)
      commit('setTheme', newTheme)
      console.log('updateTheme')
      // this.theme = newTheme
    },
    toggleSidebar({ state, commit }) {
      commit('setSidebarState')
      console.log('toggleSidebar')
    }
  }
})