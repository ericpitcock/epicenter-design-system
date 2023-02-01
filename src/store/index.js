import { createStore } from 'vuex'
import generateID from '@/helpers/generateID'
import faker from 'faker'

export default createStore({
  state: {
    fullWidthContent: false,
    // visibleNotification: null,
    // notifications are stored in an array
    // so that we can have multiple notifications
    // and dismiss them individually
    // if a notification has a duration, it will be removed from view after that duration and will be stored in the array (notifications center)
    // when the user dismisses a notification, it will be removed from the array
    notifications: [
      {
        id: '1',
        active: false,
        message: 'App version 1.0.3 is now available',
        alertstyle: 'info',
        timestamp: faker.date.recent()
      },
      // give me three more with unique IDs
      {
        id: '2',
        active: false,
        message: 'Your message was sent successfully',
        alertstyle: 'success',
        timestamp: faker.date.recent()
      },
      {
        id: '3',
        active: false,
        message: 'You’re running low on storage',
        alertstyle: 'warning',
        timestamp: faker.date.past()
      },
      {
        id: '4',
        active: false,
        message: 'Your organization has 34 assets with new critical vulnerabilities',
        alertstyle: 'error',
        timestamp: faker.date.past()
      }
    ],
    notificationCenterOpen: false,
    sidebar: true,
    sidebarUser: null,
    theme: 'dark'
  },
  getters: {
    getActiveNotifications: state => {
      return state.notifications.filter(n => n.active)
    },
    hasActiveNotifications: state => {
      return state.notifications.some(n => n.active)
    }
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
    setContentWidth: state => {
      state.fullWidthContent = !state.fullWidthContent
    },
    toggleSidebar: state => {
      state.sidebar = !state.sidebar
    },
    addNotification: (state, newNotification) => {
      console.log('addNotification mutation', newNotification)
      state.notifications.push(newNotification)
    },
    clearNotifications: state => {
      state.notifications = []
    },
    removeNotification: (state, notification) => {
      console.log('removing notification', notification)
      state.notifications = state.notifications.filter(
        n => n.id !== notification.id
      )
    },
    toggleNotificationCenter: state => {
      state.notificationCenterOpen = !state.notificationCenterOpen
    }
  },
  actions: {
    addNotification: ({ state, commit }, notification) => {
      // build new notification object
      const newNotification = {
        ...notification, // using spread syntax breaks the object reference, recevies message and alertstyle (success, info, warning, error)
        active: true, // add active property
        id: generateID(), // adds unique ID each time
        timestamp: Date.now() // adds timestamp
      }

      // add the notification object to the array
      commit('addNotification', newNotification)

      // if it hasn't been dismissed, move it to the notifications center after 5 seconds
      setTimeout(() => {
        // if newNotification is not in the array, return
        if (!state.notifications.includes(newNotification)) return

        // find newNotification in the array
        const index = state.notifications.findIndex(
          n => n.id === newNotification.id
        )
        // active to false
        state.notifications[index].active = false
      }, 5000)
    },
    clearNotifications: ({ state, commit }) => {
      commit('clearNotifications')      
    },
    toggleNotificationCenter({ state, commit }) {
      commit('toggleNotificationCenter')
    },
    removeNotification({ state, commit }, notification) {
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
        const newState = state.sidebarUser === null ? true : state.sidebarUser
        commit('setSidebarState', newState)
      } else {
        // this is what happens when you maximize it
        commit('setSidebarState', false)
      }
      commit('setContentWidth')
    }
  }
})