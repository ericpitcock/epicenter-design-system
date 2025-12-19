import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme-preference'

// Get initial theme based on priority: localStorage > OS preference > default (dark)
function getInitialTheme() {
  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && (stored === 'light' || stored === 'dark')) {
    return stored
  }

  // Check OS preference
  if (window.matchMedia) {
    const lightQuery = window.matchMedia('(prefers-color-scheme: light)')
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (lightQuery.matches) {
      return 'light'
    }
    if (darkQuery.matches) {
      return 'dark'
    }
  }

  // Default to dark
  return 'dark'
}

// Initialize with the correct theme immediately
const theme = ref(getInitialTheme())

// Apply theme to DOM
function applyTheme(value) {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('light-theme', 'dark-theme')
    document.documentElement.classList.add(`${value}-theme`)
  }
}

// Apply initial theme immediately (if DOM is available)
if (typeof document !== 'undefined') {
  applyTheme(theme.value)
}

// Watch for theme changes and persist
watch(theme, (value) => {
  applyTheme(value)
  localStorage.setItem(STORAGE_KEY, value)
})

// Listen for OS preference changes (only if no localStorage override)
if (window.matchMedia) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
  mediaQuery.addEventListener('change', (e) => {
    // Only update if user hasn't set a preference
    if (!localStorage.getItem(STORAGE_KEY)) {
      theme.value = e.matches ? 'light' : 'dark'
    }
  })
}

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const setTheme = (newTheme) => {
  if (newTheme === 'light' || newTheme === 'dark') {
    theme.value = newTheme
  }
}

const clearThemePreference = () => {
  localStorage.removeItem(STORAGE_KEY)
  theme.value = getInitialTheme()
}

export default function useTheme() {
  return {
    clearThemePreference,
    getInitialTheme,
    setTheme,
    theme,
    toggleTheme,
  }
}