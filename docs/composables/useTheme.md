# useTheme

`useTheme` is a composable for managing application-wide theme state. It provides a centralized way to control light/dark mode and automatically applies the theme to the document.

## Features

- **Global theme state**: Single source of truth for theme across your application
- **Automatic DOM updates**: Automatically applies `.light-theme` or `.dark-theme` class to document root
- **localStorage persistence**: Automatically saves and restores user's theme preference
- **OS preference support**: Respects `prefers-color-scheme` when no saved preference exists
- **Simple API**: Easy toggle and set operations
- **Reactive**: Theme changes propagate to all components using the composable

## Usage

### Basic Theme Toggle

```vue
<template>
  <div>
    <p>Current theme: {{ theme }}</p>
    <ep-button @click="toggleTheme">
      Toggle Theme
    </ep-button>
  </div>
</template>

<script setup>
import useTheme from '@/composables/useTheme.js'
import { EpButton } from '@ericpitcock/epicenter-components-vue'

const { theme, toggleTheme } = useTheme()
</script>
```

### Theme Toggle Button Component

```vue
<template>
  <ep-button 
    @click="toggleTheme"
    :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`"
  >
    <template #icon-left>
      <icon-sun v-if="theme === 'dark'" />
      <icon-moon v-else />
    </template>
    {{ theme === 'light' ? 'Dark' : 'Light' }} Mode
  </ep-button>
</template>

<script setup>
import useTheme from '@/composables/useTheme.js'
import { EpButton } from '@ericpitcock/epicenter-components-vue'
import { IconSun, IconMoon } from '@epicenter/icons'

const { theme, toggleTheme } = useTheme()
</script>
```

### Set Specific Theme

```vue
<template>
  <div class="theme-selector">
    <ep-button 
      @click="setTheme('light')"
      :class="{ active: theme === 'light' }"
    >
      Light
    </ep-button>
    <ep-button 
      @click="setTheme('dark')"
      :class="{ active: theme === 'dark' }"
    >
      Dark
    </ep-button>
  </div>
</template>

<script setup>
import useTheme from '@/composables/useTheme.js'
import { EpButton } from '@ericpitcock/epicenter-components-vue'

const { theme, setTheme } = useTheme()
</script>
```

### Clear Theme Preference

Reset to OS preference or default:

```vue
<template>
  <div>
    <p>Current theme: {{ theme }}</p>
    <ep-button @click="clearThemePreference">
      Reset to System Preference
    </ep-button>
  </div>
</template>

<script setup>
import useTheme from '@/composables/useTheme.js'
import { EpButton } from '@ericpitcock/epicenter-components-vue'

const { theme, clearThemePreference } = useTheme()
</script>
```

### Theme-Aware Components

Use the theme value to conditionally render content:

```vue
<template>
  <div class="illustration-container">
    <img 
      v-if="theme === 'light'" 
      src="/images/logo-light.svg" 
      alt="Logo"
    />
    <img 
      v-else 
      src="/images/logo-dark.svg" 
      alt="Logo"
    />
  </div>
</template>

<script setup>
import useTheme from '@/composables/useTheme.js'

const { theme } = useTheme()
</script>
```

### Navigation Bar with Theme Toggle

```vue
<template>
  <ep-header>
    <template #left>
      <h1>My App</h1>
    </template>
    <template #right>
      <nav>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <ep-button 
        @click="toggleTheme"
        class="ep-button-var--ghost"
        :aria-label="themeLabel"
      >
        <template #icon-left>
          <icon-sun v-if="theme === 'dark'" />
          <icon-moon v-else />
        </template>
      </ep-button>
    </template>
  </ep-header>
</template>

<script setup>
import { computed } from 'vue'
import useTheme from '@/composables/useTheme.js'
import { EpButton, EpHeader } from '@ericpitcock/epicenter-components-vue'
import { IconSun, IconMoon } from '@epicenter/icons'

const { theme, toggleTheme } = useTheme()

const themeLabel = computed(() => 
  `Switch to ${theme.value === 'light' ? 'dark' : 'light'} mode`
)
</script>
```

## API

### Returns

| Name | Type | Description |
|------|------|-------------|
| `theme` | `Ref<string>` | Reactive reference to current theme ('light' or 'dark') |
| `toggleTheme` | `Function` | Toggles between light and dark themes |
| `setTheme` | `Function` | Sets a specific theme |
| `clearThemePreference` | `Function` | Clears localStorage preference and resets to OS/default |
| `getInitialTheme` | `Function` | Returns the initial theme based on priority logic |

### setTheme

```typescript
setTheme(newTheme: 'light' | 'dark'): void
```

Sets the theme to a specific value.

**Parameters:**
- `newTheme`: String value of 'light' or 'dark'

**Example:**
```javascript
const { setTheme } = useTheme()
setTheme('dark')
```

### toggleTheme

```typescript
toggleTheme(): void
```

Toggles between light and dark themes.

**Example:**
```javascript
const { toggleTheme } = useTheme()
toggleTheme() // If light, becomes dark. If dark, becomes light.
```

### clearThemePreference

```typescript
clearThemePreference(): void
```

Removes the saved theme preference from localStorage and resets to OS preference or default (dark).

**Example:**
```javascript
const { clearThemePreference } = useTheme()
clearThemePreference() // Clears saved preference
```

### getInitialTheme

```typescript
getInitialTheme(): 'light' | 'dark'
```

Returns the initial theme value based on priority: localStorage > OS preference > default (dark). Useful for server-side rendering or pre-initialization logic.

**Example:**
```javascript
const { getInitialTheme } = useTheme()
const initialTheme = getInitialTheme() // 'light' or 'dark'
```

## How It Works

The composable:

1. Checks for saved preference in localStorage (`theme-preference` key)
2. Falls back to OS preference using `prefers-color-scheme` media query
3. Defaults to 'dark' theme if no preference is found
4. Maintains a reactive `theme` ref with global state
5. Automatically applies `.light-theme` or `.dark-theme` class to `document.documentElement`
6. Persists theme changes to localStorage automatically
7. Listens for OS preference changes and updates if no manual preference is set

Your CSS can target these classes for theme-specific styles:

```css
.light-theme {
  --background-color: white;
  --text-color: black;
}

.dark-theme {
  --background-color: #1a1a1a;
  --text-color: white;
}
```

Or use CSS `light-dark()` function with `color-scheme`:

```css
:root { 
  color-scheme: light dark; 
}
.dark-theme { 
  color-scheme: dark; 
}
.light-theme { 
  color-scheme: light; 
}

:root {
  --background-color: light-dark(white, #1a1a1a);
  --text-color: light-dark(black, white);
}
```

## Complete Example

```vue
<template>
  <div class="app">
    <ep-header>
      <template #right>
        <ep-button @click="toggleTheme" class="theme-toggle">
          <template #icon-left>
            <icon-sun v-if="theme === 'dark'" />
            <icon-moon v-else />
          </template>
        </ep-button>
      </template>
    </ep-header>
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import useTheme from '@/composables/useTheme.js'
import { EpButton, EpHeader } from '@ericpitcock/epicenter-components-vue'
import { IconSun, IconMoon } from '@epicenter/icons'

const { theme, toggleTheme } = useTheme()
// That's it! Theme persistence and OS preference support are built-in
</script>
```

## Tips

- The theme state is shared across all components using the composable
- Theme changes are automatically applied to the document root with `.light-theme` or `.dark-theme` classes
- localStorage persistence is built-in - no manual setup required
- OS preference (`prefers-color-scheme`) is automatically respected on first load
- The composable listens for OS preference changes and updates the theme if no manual preference is set
- Use `clearThemePreference()` to let users reset to their system default
- The composable works independently of component lifecycle - theme persists across navigation
- Theme is initialized immediately at module load for a flash-free experience
