import { defineStore } from 'pinia'

export const useStorybookStore = defineStore('storybook', {
  state: () => ({
    theme: 'dark'
  }),
  actions: {
    toggleTheme() {
      let newTheme = this.theme == 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-color-theme', newTheme)
      this.theme = newTheme
    }
  }
})
