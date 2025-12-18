import { ref, watch } from 'vue'

const theme = ref('dark')

watch(theme, (value) => {
  document.documentElement.classList.remove('light-theme', 'dark-theme')
  document.documentElement.classList.add(`${value}-theme`)
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