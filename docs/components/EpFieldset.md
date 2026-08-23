# EpFieldset



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `label` | - | `string` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `default` | No description available. |


::: info
This component does not use events.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-fieldset` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-fieldset {
  --ep-fieldset-legend-font-size: /* … */;
}
```

### Text

| Property | Default | State |
|---|---|---|
| `--ep-fieldset-legend-font-size` | `var(--font-size--body)` | — |
| `--ep-fieldset-legend-text-color` | `var(--text-color--loud)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-fieldset-legend-margin-block` | `0 1rem` | — |

## Component Code

```vue
<script setup lang="ts">
  interface Props {
    label?: string
  }

  const { label = '' } = defineProps<Props>()

  defineOptions({ name: 'EpFieldset' })
</script>

<template>
  <fieldset class="ep-fieldset ep-fieldset--horizontal">
    <legend
      v-if="label"
      class="ep-fieldset__legend"
    >
      {{ label }}
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
  --ep-fieldset-legend-text-color: var(--text-color--loud);
  --ep-fieldset-legend-margin-block: 0 1rem;

  display: block;
  min-width: 0;

  &__legend {
    display: block;
    width: 100%;
    color: var(--ep-fieldset-legend-text-color);
    font-size: var(--ep-fieldset-legend-font-size);
    margin-block: var(--ep-fieldset-legend-margin-block);
  }
}

```