# @ericpitcock/epicenter-icons-react

React icon components for Epicenter Design System. 4,617 stroke-based SVG icons with full TypeScript support.

## Installation

```bash
npm install @ericpitcock/epicenter-icons-react
```

## Usage

### Barrel Import

```jsx
import { Heart, Coffee02, ArrowRight01 } from '@ericpitcock/epicenter-icons-react';

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

### Individual Imports

```jsx
import { Heart } from '@ericpitcock/epicenter-icons-react/Heart';
```

### Custom Props

All standard SVG props are supported:

```jsx
<Heart
  width={32}
  height={32}
  stroke="currentColor"
  fill="none"
  strokeWidth={2}
/>
```

### Ref Forwarding

All icons support `ref` forwarding for direct DOM access:

```jsx
import { useRef } from 'react';
import { Heart } from '@ericpitcock/epicenter-icons-react';

function MyComponent() {
  const iconRef = useRef(null);
  return <Heart ref={iconRef} />;
}
```

## Styling

### Base Styles

Import the base stylesheet for consistent default styling:

```js
import '@ericpitcock/epicenter-icons-react/base.scss'
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

## TypeScript

Full TypeScript support is included. All icons are typed as `ForwardRefExoticComponent` and wrapped in `memo` for optimal performance.

```tsx
import { Heart } from '@ericpitcock/epicenter-icons-react';
import type { IconComponent } from '@ericpitcock/epicenter-icons-react';

const icon: IconComponent = Heart;
```

## License

MIT
