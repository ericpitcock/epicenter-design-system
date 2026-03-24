import { customRef, type Ref } from 'vue'

import type { Theme } from '../types'

const STORAGE_KEY = 'theme-preference'

const isBrowser = typeof window !== 'undefined'

/** Get initial theme based on priority: localStorage > OS preference > default (dark) */
const getInitialTheme = (): Theme => {
  if (!isBrowser) return 'dark'

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
    return 'light'
  }

  return 'dark'
}

// Shared theme state (lazy initialization)
let theme: Ref<Theme> | null = null
let isInitialized = false

/** Apply theme to DOM */
const applyTheme = (value: Theme): void => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('light-theme', 'dark-theme')
    document.documentElement.classList.add(`${value}-theme`)
  }
}

/**
 * Initialize the theme system. Called by the theme plugin or manually.
 * Safe to call multiple times — subsequent calls return the existing ref.
 */
export const initializeTheme = (): Ref<Theme> => {
  if (isInitialized && theme) return theme

  let themeValue = getInitialTheme()

  theme = customRef<Theme>((track, trigger) => ({
    get() {
      track()
      return themeValue
    },
    set(value) {
      themeValue = value
      applyTheme(value)
      if (isBrowser) localStorage.setItem(STORAGE_KEY, value)
      trigger()
    }
  }))

  isInitialized = true

  if (typeof document !== 'undefined') {
    applyTheme(theme.value)
  }

  if (isBrowser && window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    mediaQuery.addEventListener('change', (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(STORAGE_KEY) && theme) {
        theme.value = e.matches ? 'light' : 'dark'
      }
    })
  }

  return theme
}

/** Return type of the useTheme composable */
export interface UseThemeReturn {
  /** Remove persisted theme preference and revert to OS/default */
  clearThemePreference: () => void
  /** Resolve the initial theme (localStorage > OS > dark) */
  getInitialTheme: () => Theme
  /** Explicitly set the theme */
  setTheme: (newTheme: Theme) => void
  /** Reactive theme ref */
  theme: Ref<Theme>
  /** Toggle between light and dark */
  toggleTheme: () => void
}

const toggleTheme = (): void => {
  if (!theme) {
    console.warn('Theme system not initialized. Call initializeTheme() or use the theme plugin.')
    return
  }
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const setTheme = (newTheme: Theme): void => {
  if (!theme) {
    console.warn('Theme system not initialized. Call initializeTheme() or use the theme plugin.')
    return
  }
  if (newTheme === 'light' || newTheme === 'dark') {
    theme.value = newTheme
  }
}

const clearThemePreference = (): void => {
  if (!theme) {
    console.warn('Theme system not initialized. Call initializeTheme() or use the theme plugin.')
    return
  }
  if (isBrowser) localStorage.removeItem(STORAGE_KEY)
  theme.value = getInitialTheme()
}

/**
 * Composable for reading and controlling the application theme.
 *
 * @example
 * ```ts
 * const { theme, toggleTheme } = useTheme()
 * ```
 */
export const useTheme = (): UseThemeReturn => {
  if (!isInitialized) {
    initializeTheme()
  }

  return {
    clearThemePreference,
    getInitialTheme,
    setTheme,
    theme: theme as Ref<Theme>,
    toggleTheme,
  }
}