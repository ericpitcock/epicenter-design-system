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
    theme: 'dark'
  }),
  actions: {
    clearNotifications() {
      this.notifications = []
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter(n => n.id !== id)
    },
    toggleTheme() {
      let newTheme = this.theme == 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-color-theme', newTheme)
      this.theme = newTheme
    }
  }
})
