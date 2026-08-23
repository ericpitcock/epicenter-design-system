# EpDivider



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `direction` | The direction of the divider. | `Direction` | `-` |


::: info
This component does not use events, slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-divider` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-divider {
  --ep-divider-border-color: /* … */;
}
```

### Border

| Property | Default | State |
|---|---|---|
| `--ep-divider-border-color` | `var(--border-color)` | — |
| `--ep-divider-border-style` | `solid` | — |
| `--ep-divider-border-width` | `var(--border-width--hairline)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-divider-height` | `100%` | — |
| `--ep-divider-width` | `100%` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-divider-margin` | `0` | — |

## Component Code

```vue
<script setup lang="ts">
  import type { Direction } from '../../types'

  interface Props {
    /**
     * The direction of the divider.
     * @values horizontal, vertical
     */
    direction?: Direction
  }

  const {
    direction = 'horizontal',
  } = defineProps<Props>()

  defineOptions({ name: 'EpDivider' })
</script>

<template>
  <div :class="['ep-divider', `ep-divider--${direction}`]" />
</template>

```

## Styles (SCSS)

```scss
.ep-divider {
  --ep-divider-width: 100%;
  --ep-divider-height: 100%;
  --ep-divider-margin: 0;
  --ep-divider-border-width: var(--border-width--hairline);
  --ep-divider-border-style: solid;
  --ep-divider-border-color: var(--border-color);

  margin: var(--ep-divider-margin);

  &--horizontal {
    width: var(--ep-divider-width);
    height: 0;
    border-bottom-width: var(--ep-divider-border-width);
    border-bottom-style: var(--ep-divider-border-style);
    border-bottom-color: var(--ep-divider-border-color);
  }

  &--vertical {
    width: 0;
    height: var(--ep-divider-height);
    border-right-width: var(--ep-divider-border-width);
    border-right-style: var(--ep-divider-border-style);
    border-right-color: var(--ep-divider-border-color);
  }
}

```