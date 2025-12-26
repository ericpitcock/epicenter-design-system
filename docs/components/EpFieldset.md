# EpFieldset



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `label` | - | `string` | `''` |

## Slots
| Name | Description |
|------|-------------|
| `default` | No description available. |


::: info
This component does not use events.
:::

## Component Code

```vue
<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <fieldset class="ep-fieldset ep-fieldset--horizontal">
    <legend
      v-if="props.label"
      class="ep-fieldset__legend"
    >
      {{ props.label }}
    </legend>

    <div class="ep-fieldset__content">
      <slot />
    </div>
  </fieldset>
</template>
```

## Styles (SCSS)

```scss
.ep-fieldset {
  --ep-fieldset-legend-font-size: var(--font-size--body);
  display: block;
  min-width: 0;

  &__legend {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    color: var(--text-color--loud);
    font-size: var(--ep-fieldset-legend-font-size);
  }
}
```