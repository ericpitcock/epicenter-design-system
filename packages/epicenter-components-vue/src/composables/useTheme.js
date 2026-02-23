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

// Shared theme state (lazy initialization)
let theme = null
let isInitialized = false

// Apply theme to DOM
function applyTheme(value) {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('light-theme', 'dark-theme')
    document.documentElement.classList.add(`${value}-theme`)
  }
}

// Initialize theme system (called by plugin or manually)
export function initializeTheme() {
  if (isInitialized) return theme

  theme = ref(getInitialTheme())
  isInitialized = true

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

  return theme
}

const toggleTheme = () => {
  if (!theme) {
    console.warn('Theme system not initialized. Call initializeTheme() or use the theme plugin.')
    return
  }
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const setTheme = (newTheme) => {
  if (!theme) {
    console.warn('Theme system not initialized. Call initializeTheme() or use the theme plugin.')
    return
  }
  if (newTheme === 'light' || newTheme === 'dark') {
    theme.value = newTheme
  }
}

const clearThemePreference = () => {
  if (!theme) {
    console.warn('Theme system not initialized. Call initializeTheme() or use the theme plugin.')
    return
  }
  localStorage.removeItem(STORAGE_KEY)
  theme.value = getInitialTheme()
}

export default function useTheme() {
  // Initialize if not already done (for backwards compatibility)
  if (!isInitialized) {
    initializeTheme()
  }

  return {
    clearThemePreference,
    getInitialTheme,
    setTheme,
    theme,
    toggleTheme,
  }
}