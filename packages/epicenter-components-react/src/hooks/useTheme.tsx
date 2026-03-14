import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme-preference';

interface ThemeContextValue {
  clearThemePreference: () => void;
  setTheme: (newTheme: Theme) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// Get initial theme based on priority: localStorage > OS preference > default (dark)
function getInitialTheme(): Theme {
  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && (stored === 'light' || stored === 'dark')) {
    return stored as Theme;
  }

  // Check OS preference
  if (window.matchMedia) {
    const lightQuery = window.matchMedia('(prefers-color-scheme: light)');
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (lightQuery.matches) {
      return 'light';
    }
    if (darkQuery.matches) {
      return 'dark';
    }
  }

  // Default to dark
  return 'dark';
}

// Apply theme to DOM
function applyTheme(value: Theme) {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${value}-theme`);
  }
}

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider - Provides theme context to the application
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Apply theme on mount and when it changes
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Listen for OS preference changes
  useEffect(() => {
    if (!window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        setThemeState(e.matches ? 'light' : 'dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setThemeState((current) => (current === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const clearThemePreference = () => {
    localStorage.removeItem(STORAGE_KEY);
    setThemeState(getInitialTheme());
  };

  const value: ThemeContextValue = {
    theme,
    toggleTheme,
    setTheme,
    clearThemePreference,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * useTheme - Hook to access theme context
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { getInitialTheme };
