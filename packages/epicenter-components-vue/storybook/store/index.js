import { defineStore } from 'pinia'

import { useTheme } from '@ericpitcock/epicenter-components-vue'

export const useStorybookStore = defineStore('storybook', () => {
  const { theme, toggleTheme } = useTheme()

  return {
    theme,
    toggleTheme,
  }
})
