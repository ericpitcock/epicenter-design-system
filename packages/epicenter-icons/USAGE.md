# Using @ericpitcock/epicenter-icons in Your Project

## Quick Start Example

### 1. Install the Package

```bash
npm install @ericpitcock/epicenter-icons
```

### 2. Basic Vue 3 Component

```vue
<!-- MyComponent.vue -->
<script setup>
import { Heart, Star, Bell, Settings } from '@ericpitcock/epicenter-icons'
</script>

<template>
  <div class="icon-showcase">
    <h2>My App Icons</h2>
    
    <!-- Basic usage -->
    <div class="icon-row">
      <Heart class="icon-heart" />
      <Star class="icon-star" />
      <Bell class="icon-notification" />
      <Settings class="icon-settings" />
    </div>
    
    <!-- With custom sizing -->
    <div class="icon-row large">
      <Heart />
      <Star />
    </div>
  </div>
</template>

<style scoped>
.icon-showcase {
  padding: 2rem;
}

.icon-row {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
}

/* Custom icon styles */
.icon-heart {
  --ep-icon-color: #ef4444;
  --ep-icon-width: 24px;
  --ep-icon-height: 24px;
}

.icon-star {
  --ep-icon-color: #f59e0b;
}

.icon-notification {
  --ep-icon-color: #3b82f6;
}

.icon-settings {
  --ep-icon-color: #6b7280;
}

/* Large size variant */
.large {
  --ep-icon-width: 48px;
  --ep-icon-height: 48px;
  --ep-icon-stroke-width: 1.5;
}
</style>
```

### 3. Global Style Setup

#### Option A: Import in main.js

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

// Import base icon styles globally
import '@ericpitcock/epicenter-icons/base.scss'

createApp(App).mount('#app')
```

#### Option B: Import in CSS

```css
/* styles/main.css */
@import '@ericpitcock/epicenter-icons/base.scss';

/* Your custom icon theme */
:root {
  --ep-icon-color: #374151;
  --ep-icon-width: 20px;
  --ep-icon-height: 20px;
  --ep-icon-stroke-width: 1.5;
}
```

### 4. Icon Button Component

```vue
<!-- IconButton.vue -->
<script setup>
defineProps({
  icon: String,
  size: { type: String, default: 'md' },
  variant: { type: String, default: 'default' }
})
</script>

<template>
  <button 
    :class="[\`btn-\${variant}\`, \`btn-\${size}\`]"
    class="icon-button"
  >
    <component :is="icon" />
    <slot />
  </button>
</template>

<style scoped>
.icon-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.icon-button:hover {
  background: #f9fafb;
}

/* Size variants */
.btn-sm {
  --ep-icon-width: 16px;
  --ep-icon-height: 16px;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.btn-md {
  --ep-icon-width: 20px;
  --ep-icon-height: 20px;
}

.btn-lg {
  --ep-icon-width: 24px;
  --ep-icon-height: 24px;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}

/* Color variants */
.btn-primary {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
  --ep-icon-color: white;
}

.btn-danger {
  background: #ef4444;
  color: white;
  border-color: #ef4444;
  --ep-icon-color: white;
}
</style>
```

### 5. Usage of IconButton

```vue
<!-- App.vue -->
<script setup>
import IconButton from './components/IconButton.vue'
import { Plus, Download, Settings, Trash } from '@ericpitcock/epicenter-icons'
</script>

<template>
  <div class="app">
    <h1>My App</h1>
    
    <div class="button-group">
      <IconButton :icon="Plus" variant="primary">
        Add Item
      </IconButton>
      
      <IconButton :icon="Download" size="sm">
        Export
      </IconButton>
      
      <IconButton :icon="Settings">
        Settings
      </IconButton>
      
      <IconButton :icon="Trash" variant="danger" size="lg">
        Delete
      </IconButton>
    </div>
  </div>
</template>
```

### 6. Dynamic Icon Loading

```vue
<!-- DynamicIconExample.vue -->
<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'

const iconName = ref('Heart')
const iconSize = ref('24')

const DynamicIcon = computed(() => 
  defineAsyncComponent(() => 
    import(\`@ericpitcock/epicenter-icons/components/\${iconName.value}\`)
  )
)

const iconOptions = ['Heart', 'Star', 'Bell', 'Settings', 'Home', 'User']
</script>

<template>
  <div>
    <div class="controls">
      <select v-model="iconName">
        <option v-for="option in iconOptions" :value="option">
          {{ option }}
        </option>
      </select>
      
      <input 
        v-model="iconSize" 
        type="range" 
        min="12" 
        max="96" 
        step="4"
      />
    </div>
    
    <div class="preview">
      <component 
        :is="DynamicIcon"
        :style="{ 
          '--ep-icon-width': iconSize + 'px',
          '--ep-icon-height': iconSize + 'px'
        }"
      />
    </div>
  </div>
</template>
```

## Build Integration

### Vite Configuration

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['@ericpitcock/epicenter-icons']
  }
})
```

### Webpack Configuration

```js
// webpack.config.js (if using Vue CLI or custom webpack)
module.exports = {
  resolve: {
    alias: {
      '@icons': '@ericpitcock/epicenter-icons'
    }
  }
}
```

Then use with alias:

```js
import { Heart } from '@icons'
```

## TypeScript Integration

```typescript
// types/icons.d.ts
declare module '@ericpitcock/epicenter-icons' {
  import { Component } from 'vue'
  
  export const Heart: Component
  export const Star: Component
  export const Bell: Component
  // ... add more as needed
  
  export const ICON_COUNT: number
  export const COMPONENT_NAMES: string[]
}
```

This setup provides a complete, production-ready icon system that's easy to use and highly customizable!