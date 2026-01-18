import React from 'react';
import { useTheme } from '../hooks/useTheme';

// Placeholder icons - replace with actual icons when available
const Sun02 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const Moon02 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export interface EpThemeToggleProps {
  className?: string;
  [key: string]: unknown;
}

export const EpThemeToggle: React.FC<EpThemeToggleProps> = ({
  className = '',
  ...props
}) => {
  const { theme, toggleTheme } = useTheme();

  const IconComponent = theme === 'dark' ? Sun02 : Moon02;

  return (
    <button
      className={`ep-theme-toggle ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      {...props}
    >
      <IconComponent />
    </button>
  );
};
