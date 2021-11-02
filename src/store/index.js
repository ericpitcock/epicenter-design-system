import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light',
    sidebar: true
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
    toggleTheme({ state, commit }) {
      let newTheme = state.theme == 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-color-theme', newTheme)
      commit('setTheme', newTheme)
    },
    toggleSidebar({ state, commit }) {
      commit('setSidebarState')
    }
  }
})