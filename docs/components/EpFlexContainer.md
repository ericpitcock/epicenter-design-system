# EpFlexContainer



::: warning
`EpFlexContainer` is deprecated and will be removed in future versions. Please use [`EpFlex`](./EpFlex.html) instead.
:::
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `width` | The width of the flex container. | `string` | `'100%'` |
| `height` | The height of the flex container. | `string` | `'100%'` |
| `flexFlow` | Shorthand for flex-direction and flex-wrap. | `string` | `'row nowrap'` |
| `justifyContent` | Defines how flex items are distributed along the main axis. | `string` | `'flex-start'` |
| `alignItems` | Defines how flex items are aligned along the cross axis. | `string` | `'stretch'` |
| `alignContent` | Aligns a flex container's lines when there is extra space on the cross axis. | `string` | `'normal'` |
| `gap` | The gap between flex items. | `string` | `'0'` |
| `padding` | The padding of the flex container. | `string` | `'0'` |

## Slots
| Name | Description |
|------|-------------|
| `default` | Default slot for flex container content. |


::: info
This component does not use events.
:::

## Component Code

```vue
<template>
  <div :style="flexContainerStyle">
    <!-- @slot Default slot for flex container content. -->
    <slot />
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    /**
     * The width of the flex container.
     */
    width: {
      type: String,
      default: '100%'
    },
    /**
     * The height of the flex container.
     */
    height: {
      type: String,
      default: '100%'
    },
    /**
     * Shorthand for flex-direction and flex-wrap.
     * @values row nowrap, row wrap, column nowrap, column wrap, etc.
     */
    flexFlow: {
      type: String,
      default: 'row nowrap'
    },
    /**
     * Defines how flex items are distributed along the main axis.
     * @values flex-start, flex-end, center, space-between, space-around, space-evenly
     */
    justifyContent: {
      type: String,
      default: 'flex-start'
    },
    /**
     * Defines how flex items are aligned along the cross axis.
     * @values stretch, flex-start, flex-end, center, baseline
     */
    alignItems: {
      type: String,
      default: 'stretch'
    },
    /**
     * Aligns a flex container's lines when there is extra space on the cross axis.
     * @values flex-start, flex-end, center, space-between, space-around, stretch, normal
     */
    alignContent: {
      type: String,
      default: 'normal'
    },
    /**
     * The gap between flex items.
     */
    gap: {
      type: String,
      default: '0'
    },
    /**
     * The padding of the flex container.
     */
    padding: {
      type: String,
      default: '0'
    },
  })

  const flexContainerStyle = computed(() => {
    return {
      display: 'flex',
      width: props.width,
      height: props.height,
      flexFlow: props.flexFlow,
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
      alignContent: props.alignContent,
      gap: props.gap,
      padding: props.padding
    }
  })
</script>
```