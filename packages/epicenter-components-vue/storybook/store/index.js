import { useTheme } from '@ericpitcock/epicenter-components-vue'
import { defineStore } from 'pinia'

export const useStorybookStore = defineStore('storybook', () => {
  const { theme, toggleTheme } = useTheme()

  return {
    theme,
    toggleTheme,
  }
})
