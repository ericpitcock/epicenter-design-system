# EpDivider



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `direction` | The direction of the divider. | `Direction` | `-` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<script setup lang="ts">
  import type { Direction } from '../../types'

  interface EpDividerProps {
    /**
     * The direction of the divider.
     * @values horizontal, vertical
     */
    direction?: Direction
  }

  const {
    direction = 'horizontal',
  } = defineProps<EpDividerProps>()
</script>

<template>
  <div :class="['ep-divider', `ep-divider--${direction}`]" />
</template>

```

## Styles (SCSS)

```scss
.ep-divider {
  --ep-divider-border-width: 0.1rem;
  --ep-divider-border-style: solid;
  --ep-divider-border-color: var(--border-color);
  --ep-divider-width: 100%;
  --ep-divider-height: 100%;
  --ep-divider-margin: 0;
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