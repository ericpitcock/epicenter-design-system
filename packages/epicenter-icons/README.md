# @ericpitcock/epicenter-icons

An icon library for Epicenter Design System, available for both Vue 3 and React.

## Installation

```bash
npm install @ericpitcock/epicenter-icons
```

## Available Icons

Browse all 4,617 icons in the [icons.json](icons.json) file, the `epicenter-icons/` directory (Vue), or the `react/` directory (React).

## Usage

### Vue 3

Import icons directly from their individual files for optimal performance:

```vue
<script setup>
  import Heart from '@ericpitcock/epicenter-icons/epicenter-icons/Heart'
  import Coffee02 from '@ericpitcock/epicenter-icons/epicenter-icons/Coffee02'
  import ArrowRight01 from '@ericpitcock/epicenter-icons/epicenter-icons/ArrowRight01'
</script>

<template>
  <Heart />
  <Coffee02 />
  <ArrowRight01 />
</template>
```

> **Note:** Direct imports ensure fast build times and optimal tree-shaking. Barrel imports (importing from the package root) are not supported for Vue due to performance concerns with large icon sets.

### React

Import icons from the React directory:

```jsx
import { Heart, Coffee02, ArrowRight01 } from '@ericpitcock/epicenter-icons/react';

function MyComponent() {
  return (
    <div>
      <Heart />
      <Coffee02 />
      <ArrowRight01 />
    </div>
  );
}
```

You can also pass custom props to React icons:

```jsx
<Heart 
  width={32}
  height={32}
  stroke="currentColor"
  fill="none"
  strokeWidth={2}
/>
```

See the [React README](./react/README.md) for detailed React usage.

## Styling & Customization

### CSS Custom Properties

All icons support customization via CSS custom properties:

```css
.my-icon {
  --ep-icon-width: 2rem;          /* Icon width */
  --ep-icon-height: 2rem;         /* Icon height */
  --ep-icon-color: #3b82f6;     /* Stroke color */
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
