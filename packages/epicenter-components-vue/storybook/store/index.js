import { defineStore } from 'pinia'

import { useTheme } from '@/composables'

export const useStorybookStore = defineStore('storybook', () => {
  const { theme, toggleTheme } = useTheme()

  return {
    theme,
    toggleTheme,
  }
})
