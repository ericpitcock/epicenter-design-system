// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)
import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: 'light',
    sidebar: true,
    sidebarUser: null,
    fullWidthContent: false
  },
  getters: {
    getTheme: state => state.theme,
    getSidebarState: state => state.sidebar,
    getSidebarUserState: state => state.sidebarUser,
    getContentWidth: state => state.fullWidthContent
  },
  mutations: {
    setTheme: (state, data) => {
      state.theme = data
    },
    setSidebarState: (state, boolean) => {
      state.sidebar = boolean
    },
    setSidebarUserState: (state, boolean) => {
      state.sidebarUser = boolean
    },
    setContentWidth: (state) => {
      state.fullWidthContent = !state.fullWidthContent
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar
    }
  },
  actions: {
    toggleTheme({ state, commit }) {
      let newTheme = state.theme == 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-color-theme', newTheme)
      commit('setTheme', newTheme)
    },
    toggleSidebar({ state, commit, getters }) {
      // when user toggles the sidebar, record it as the opposite of the current state
      commit('setSidebarUserState', !getters.getSidebarState)
      // then actually toggle the sidebar
      commit('toggleSidebar')
    },
    toggleContentWidth({ state, commit, getters, dispatch }) {
      // if it's maximized
      if (getters.getContentWidth) {
        // this is what happens when you minimize it
        const newState = (getters.getSidebarUserState === null) ? true : getters.getSidebarUserState
        commit('setSidebarState', newState)
      } else {
        // this is what happens when you maximize it
        commit('setSidebarState', false)
      }
      commit('setContentWidth')
    }
  }
})