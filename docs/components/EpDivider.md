# EpDivider



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `direction` | The direction of the divider. | `string` | `'horizontal'` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<template>
  <div :class="['ep-divider', `ep-divider--${direction}`]" />
</template>

<script setup>
  defineOptions({
    name: 'EpDivider'
  })

  const props = defineProps({
    /**
     * The direction of the divider.
     * @values horizontal, vertical
     */
    direction: {
      type: String,
      default: 'horizontal'
    },
  })
</script>

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
    border-bottom-style: var(--ep-divider-border-style);
    border-bottom-color: var(--ep-divider-border-color);
    border-bottom-width: var(--ep-divider-border-width);
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