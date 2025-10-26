# @ericpitcock/epicenter-icons

A comprehensive Vue 3 icon library with 4,500+ beautiful icons from Hugeicons, featuring clean stroke styling and advanced mixed-mode rendering support.

## Features

- 🎨 **4,571 high-quality SVG icons** converted to Vue 3 components
- ⚡ **Optimized for Vue 3** with script setup syntax
- 🎛️ **Fully customizable** via CSS custom properties
- 🔧 **Mixed-mode rendering** support for complex icons
- 📦 **Tree-shakable** - import only what you need
- 🎯 **TypeScript ready** with full type support
- 🎨 **Consistent design** with stroke-based styling

## Installation

```bash
npm install @ericpitcock/epicenter-icons
```

## Basic Usage

### Single Icon Import (Recommended)

```vue
<script setup>
import { Heart, Star, Bell } from '@ericpitcock/epicenter-icons'
</script>

<template>
  <div>
    <Heart />
    <Star />
    <Bell />
  </div>
</template>
```

### Individual Component Import

```vue
<script setup>
import Heart from '@ericpitcock/epicenter-icons/components/Heart'
</script>

<template>
  <Heart />
</template>
```

## Styling & Customization

### CSS Custom Properties

All icons support customization via CSS custom properties:

```css
.my-icon {
  --ep-icon-width: 2rem;          /* Icon width */
  --ep-icon-height: 2rem;         /* Icon height */
  --ep-icon-color: #3b82f6;       /* Stroke/fill color */
  --ep-icon-stroke-width: 2;      /* Stroke thickness */
}
```

### Vue Props Alternative

You can also pass styles as props or use CSS classes:

```vue
<template>
  <Heart 
    :style="{ 
      '--ep-icon-width': '32px',
      '--ep-icon-color': '#ef4444'
    }"
  />
</template>
```

### Global Styles

Import the base styles for consistent default styling:

```js
// In your main.js or component
import '@ericpitcock/epicenter-icons/base.scss'
```

Or in CSS:

```css
@import '@ericpitcock/epicenter-icons/base.scss';
```

## Advanced Usage

### Dynamic Icon Loading

```vue
<script setup>
import { COMPONENT_NAMES } from '@ericpitcock/epicenter-icons'
import { defineAsyncComponent, ref } from 'vue'

const iconName = ref('Heart')
const DynamicIcon = defineAsyncComponent(() => 
  import(`@ericpitcock/epicenter-icons/components/${iconName.value}`)
)
</script>

<template>
  <component :is="DynamicIcon" />
</template>
```

### Icon Browser Component

For development and testing, you can use the built-in icon browser:

```vue
<script setup>
import { COMPONENT_NAMES, ICON_COUNT } from '@ericpitcock/epicenter-icons'

console.log(\`Available icons: \${ICON_COUNT}\`)
console.log('Icon names:', COMPONENT_NAMES)
</script>
```

## Responsive Design

### Responsive Sizing

```css
.responsive-icon {
  --ep-icon-width: clamp(1rem, 4vw, 3rem);
  --ep-icon-height: clamp(1rem, 4vw, 3rem);
}

/* Mobile first approach */
.icon-mobile {
  --ep-icon-width: 1.5rem;
  --ep-icon-height: 1.5rem;
}

@media (min-width: 768px) {
  .icon-mobile {
    --ep-icon-width: 2rem;
    --ep-icon-height: 2rem;
  }
}
```

## Theme Integration

### CSS Variables Theme

```css
:root {
  --icon-primary: #3b82f6;
  --icon-secondary: #64748b;
  --icon-success: #10b981;
  --icon-warning: #f59e0b;
  --icon-error: #ef4444;
}

.icon-primary { --ep-icon-color: var(--icon-primary); }
.icon-secondary { --ep-icon-color: var(--icon-secondary); }
.icon-success { --ep-icon-color: var(--icon-success); }
.icon-warning { --ep-icon-color: var(--icon-warning); }
.icon-error { --ep-icon-color: var(--icon-error); }
```

### Usage with Theme Classes

```vue
<template>
  <div>
    <Heart class="icon-error" />
    <CheckCircle class="icon-success" />
    <AlertTriangle class="icon-warning" />
  </div>
</template>
```

## Icon Categories

The library includes icons across many categories:

- **UI & Navigation**: Arrows, buttons, menus, navigation
- **Communication**: Mail, chat, phone, messaging
- **Business**: Charts, finance, commerce, analytics  
- **Media**: Audio, video, image, camera controls
- **Files & Documents**: Folders, files, documents, archives
- **Technology**: Devices, coding, AI, networking
- **Social**: Social media, sharing, community
- **And many more...**

## Performance Tips

### Tree Shaking

Only import icons you actually use to minimize bundle size:

```js
// ✅ Good - only imports what you need
import { Heart, Star } from '@ericpitcock/epicenter-icons'

// ❌ Avoid - imports entire library
import * as Icons from '@ericpitcock/epicenter-icons'
```

### Lazy Loading

For large applications, consider lazy loading icons:

```js
const LazyIcon = defineAsyncComponent(() => 
  import('@ericpitcock/epicenter-icons/components/Heart')
)
```

## Browser Support

- **Vue 3.0+** required
- **Modern browsers** (ES2015+)
- **Node.js 16+** for build tooling

## TypeScript Support

Full TypeScript support with proper component types:

```typescript
import type { Component } from 'vue'
import { Heart } from '@ericpitcock/epicenter-icons'

const icon: Component = Heart
```

## License

MIT License - see LICENSE file for details.

## Contributing

Issues and pull requests are welcome! Please visit the [GitHub repository](https://github.com/ericpitcock/epicenter-icons) for more information.

## Icon Credits

Icons are sourced from [Hugeicons](https://hugeicons.com/) and optimized for Vue 3 usage with custom CSS property support.