import { useTheme } from '@ericpitcock/epicenter-vue-components/composables'
import { defineStore } from 'pinia'

export const useStorybookStore = defineStore('storybook', () => {
  const { theme, toggleTheme } = useTheme()

  return {
    theme,
    toggleTheme,
  }
})
