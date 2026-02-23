# @ericpitcock/epicenter-icons-vue

Vue 3 icon components for Epicenter Design System. 4,617 stroke-based SVG icons.

## Installation

```bash
npm install @ericpitcock/epicenter-icons-vue
```

## Usage

Import icons individually for optimal tree-shaking:

```vue
<script setup>
import Heart from '@ericpitcock/epicenter-icons-vue/Heart'
import Coffee02 from '@ericpitcock/epicenter-icons-vue/Coffee02'
import ArrowRight01 from '@ericpitcock/epicenter-icons-vue/ArrowRight01'
</script>

<template>
  <Heart />
  <Coffee02 />
  <ArrowRight01 />
</template>
```

> **Note:** Barrel imports (importing from the package root) are not provided. Direct imports ensure fast build times and optimal tree-shaking with large icon sets.

## Styling

### Base Styles

Import the base stylesheet for consistent default styling:

```js
import '@ericpitcock/epicenter-icons-vue/base.scss'
```

### CSS Custom Properties

All icons support customization via CSS custom properties:

```css
.my-icon {
  --ep-icon-width: 2rem;
  --ep-icon-height: 2rem;
  --ep-icon-color: #3b82f6;
  --ep-icon-stroke-width: 2;
}
```

| Property | Default | Description |
|---|---|---|
| `--ep-icon-size` | `1.5em` | Base size (width and height) |
| `--ep-icon-width` | `var(--ep-icon-size)` | Icon width |
| `--ep-icon-height` | `var(--ep-icon-size)` | Icon height |
| `--ep-icon-color` | `currentColor` | Stroke color |
| `--ep-icon-stroke-width` | `1.5` | Stroke thickness |

### Props

You can also pass styles as props:

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

## License

MIT
