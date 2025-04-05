import { ref, watch } from 'vue'

const theme = ref('light')

watch(theme, (value) => {
  document.documentElement.setAttribute('data-color-theme', value)
})

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const setTheme = (newTheme) => {
  theme.value = newTheme
}

export default function useTheme() {
  return {
    setTheme,
    theme,
    toggleTheme,
  }
}