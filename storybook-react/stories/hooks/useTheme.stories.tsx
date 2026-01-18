import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme } from '@ericpitcock/epicenter-react-components';

const meta: Meta = {
  title: 'Hooks/useTheme',
  parameters: {
    docs: {
      description: {
        component: 'A hook for managing application theme (light/dark mode) with localStorage persistence and OS preference detection.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function ThemeDemo() {
  const { theme, toggleTheme, setTheme, clearThemePreference } = useTheme();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Current Theme: {theme}</h2>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button onClick={() => setTheme('light')}>Set Light</button>
        <button onClick={() => setTheme('dark')}>Set Dark</button>
        <button onClick={clearThemePreference}>Clear Preference</button>
      </div>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'var(--interface-background)', color: 'var(--text-color)' }}>
        <p>This box uses CSS variables that change with the theme:</p>
        <code>background-color: var(--interface-background)</code>
        <br />
        <code>color: var(--text-color)</code>
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeDemo />
    </ThemeProvider>
  ),
};
