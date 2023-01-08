import { createStore } from 'vuex'

export default createStore({
  state: {
    fullWidthContent: false,
    visibleNotification: null,
    // notifications are stored in an array
    // so that we can have multiple notifications
    // and dismiss them individually
    // if a notification has a duration, it will be removed from view after that duration and will be stored in the array (notifications center)
    // when the user dismisses a notification, it will be removed from the array
    notifications: [
      {
        id: 1,
        duration: 5000,
        message: 'Your message was sent successfully'
      },
    ],
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
    },
    // addNotification: (state, notification) => {
    //   state.notifications.push(notification)
    // },
    removeNotification: (state, notification) => {
      state.notifications = state.notifications.filter(n => n.id !== notification.id)
    },
    removeVisibleNotification: (state) => {
      state.visibleNotification = null
    },
    addNotificationToNotificationsCenter: (state, notification) => {
      state.notifications.push(notification)
    }
  },
  actions: {
    showNotification({ state, commit }, notification) {
      // show the notification
      state.visibleNotification = notification
      // if the notification has a duration, move it to the notifications center after that duration
      if (notification.duration) {
        setTimeout(() => {
          commit('removeVisibleNotification')
          commit('addNotificationToNotificationsCenter', notification)
        }, notification.duration)
      }
      // add the notification to the array
      commit('addNotification', notification)
    },
    removeNotification({ state, commit }, notification) {
      // if visible, remove it from view
      if (state.visibleNotification && state.visibleNotification.id === notification.id) {
        state.visibleNotification = null
      }
      commit('removeNotification', notification)
    },
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