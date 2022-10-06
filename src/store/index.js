import { createStore } from 'vuex'

export default createStore({
  state: {
    fullWidthContent: false,
    sidebar: true,
    sidebarUser: null,
    theme: 'dark'
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
    toggleSidebar({ state, commit }) {
      // when user toggles the sidebar, record it as the opposite of the current state
      commit('setSidebarUserState', !state.sidebar)
      // then actually toggle the sidebar
      commit('toggleSidebar')
    },
    toggleContentWidth({ state, commit }) {
      // if it's maximized
      if (state.fullWidthContent) {
        // this is what happens when you minimize it
        const newState = (state.sidebarUser === null) ? true : state.sidebarUser
        commit('setSidebarState', newState)
      } else {
        // this is what happens when you maximize it
        commit('setSidebarState', false)
      }
      commit('setContentWidth')
    }
  }
})