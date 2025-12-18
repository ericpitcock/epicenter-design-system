# useTheme

`useTheme` is a composable for managing application-wide theme state. It provides a centralized way to control light/dark mode and automatically applies the theme to the document.

## Features

- **Global theme state**: Single source of truth for theme across your application
- **Automatic DOM updates**: Automatically sets `data-color-theme` attribute on document root
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
import { EpButton } from '@epicenter/vue-components'

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
import { EpButton } from '@epicenter/vue-components'
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
import { EpButton } from '@epicenter/vue-components'

const { theme, setTheme } = useTheme()
</script>
```

### Persist Theme Preference

Save user's theme preference to localStorage:

```vue
<template>
  <ep-button @click="handleToggle">
    <icon-sun v-if="theme === 'dark'" />
    <icon-moon v-else />
  </ep-button>
</template>

<script setup>
import { watch, onMounted } from 'vue'
import useTheme from '@/composables/useTheme.js'
import { EpButton } from '@epicenter/vue-components'
import { IconSun, IconMoon } from '@epicenter/icons'

const { theme, toggleTheme, setTheme } = useTheme()

// Load saved theme on mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    setTheme(savedTheme)
  }
})

// Save theme changes
watch(theme, (newTheme) => {
  localStorage.setItem('theme', newTheme)
})

const handleToggle = () => {
  toggleTheme()
}
</script>
```

### Respect System Preference

Initialize theme based on user's system preference:

```vue
<script setup>
import { onMounted } from 'vue'
import useTheme from '@/composables/useTheme.js'

const { setTheme } = useTheme()

onMounted(() => {
  // Check for saved preference first
  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme) {
    setTheme(savedTheme)
  } else {
    // Fall back to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }
})
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
import { EpButton, EpHeader } from '@epicenter/vue-components'
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

## How It Works

The composable:

1. Maintains a reactive `theme` ref with global state
2. Watches for theme changes
3. Automatically sets `data-color-theme` attribute on `document.documentElement`
4. Your CSS can target this attribute for theme-specific styles:

```css
[data-color-theme='light'] {
  --background-color: white;
  --text-color: black;
}

[data-color-theme='dark'] {
  --background-color: #1a1a1a;
  --text-color: white;
}
```

## Complete Example with Persistence

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
import { watch, onMounted } from 'vue'
import useTheme from '@/composables/useTheme.js'
import { EpButton, EpHeader } from '@epicenter/vue-components'
import { IconSun, IconMoon } from '@epicenter/icons'

const { theme, toggleTheme, setTheme } = useTheme()

// Initialize theme
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme) {
    setTheme(savedTheme)
  } else {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }
  
  // Listen for system preference changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light')
    }
  })
})

// Persist theme preference
watch(theme, (newTheme) => {
  localStorage.setItem('theme', newTheme)
})
</script>
```

## Tips

- The theme state is shared across all components using the composable
- Theme changes are automatically applied to the document root
- Combine with localStorage for persistence across sessions
- Consider respecting `prefers-color-scheme` media query for initial theme
- Use the `data-color-theme` attribute in your CSS for theme-specific styling
- The composable works independently of component lifecycle - theme persists across navigation
