import { defineStore } from 'pinia'
import { faker } from '@faker-js/faker'

export const useStorybookStore = defineStore({
  id: 'notification',
  state: () => ({
    notifications: [
      {
        id: faker.string.uuid(),
        active: false,
        message: 'Welcome to Acme Asset Explorer! You just unlocked new levels of visibility into your assets and vulnerabilities.',
        timestamp: faker.date.past({ years: 2 }).toISOString(),
        styles: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'App version 1.0.3 is now available',
        timestamp: faker.date.past({ years: 1 }).toISOString(),
        styles: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'Your support request was sent successfully',
        timestamp: faker.date.recent({ days: 25 }).toISOString(),
        styles: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'You’re running low on endpoint licenses',
        timestamp: faker.date.recent({ days: 15 }).toISOString(),
        styles: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'Your organization has 34 assets with new critical vulnerabilities',
        timestamp: faker.date.recent({ days: 5 }).toISOString(),
        styles: {
          '--ep-notification-strip-color': '#FFD700'
        },
      }
    ],
    notificationCenterOpen: false,
    theme: 'dark'
  }),
  getters: {
    getActiveNotifications: state => {
      return state.notifications.filter(n => n.active)
    },
    getInactiveNotifications: state => {
      return state.notifications.filter(n => !n.active)
    },
    hasActiveNotifications: state => {
      return state.notifications.some(n => n.active)
    }
  },
  actions: {
    addNotification(notification) {
      // build new notification object
      const newNotification = {
        ...notification, // using spread syntax breaks the object reference, receives message and variant (success, info, warning, error)
        active: true, // add active property
        id: faker.string.uuid(), // adds unique ID each time
        timestamp: new Date().toISOString()
      }

      // add the notification object to the array
      this.notifications.push(newNotification)

      // if it hasn't been dismissed, move it to the notifications center (active: false) after 5 seconds
      setTimeout(() => {
        // if newNotification is not in the array, return
        if (!this.notifications.includes(newNotification)) return

        // find newNotification in the array
        const index = this.notifications.findIndex(
          n => n.id === newNotification.id
        )
        // active to false
        this.notifications[index].active = false
      }, 5000)
    },
    clearNotifications() {
      this.notifications = []
    },
    toggleNotificationCenter() {
      this.notificationCenterOpen = !this.notificationCenterOpen
    },
    removeNotification(id) {
      console.log('store:Removing notification', id)
      // filter state.notifications array to remove notification with matching id
      this.notifications = this.notifications.filter(n => n.id !== id)
    },
    toggleTheme() {
      let newTheme = this.theme == 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-color-theme', newTheme)
      this.theme = newTheme
    }
  }
})
