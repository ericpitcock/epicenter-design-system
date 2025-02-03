# EpFlexContainer


## Description
::: warning
`EpFlexContainer` is deprecated and will be removed in future versions. Please use [`EpFlex`](./EpFlex.html) instead.
:::
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `width` | - | `string` | `'100%'` |
| `height` | - | `string` | `'100%'` |
| `flexFlow` | - | `string` | `'row nowrap'` |
| `justifyContent` | - | `string` | `'flex-start'` |
| `alignItems` | - | `string` | `'stretch'` |
| `alignContent` | - | `string` | `'normal'` |
| `gap` | - | `string` | `'0'` |
| `padding` | - | `string` | `'0'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
| `default` | No description available. |

## Component Code

```vue
<template>
  <div :style="flexContainerStyle">
    <slot />
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  defineOptions({
    name: 'EpFlexContainer',
  })

  const props = defineProps({
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    // shorthand for flex-direction and flex-wrap
    // flex-direction: row | row-reverse | column | column-reverse;
    // flex-wrap: nowrap | wrap | wrap-reverse;
    flexFlow: {
      type: String,
      default: 'row nowrap'
    },
    // justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
    justifyContent: {
      type: String,
      default: 'flex-start'
    },
    // align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
    alignItems: {
      type: String,
      default: 'stretch'
    },
    // align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
    // Note: This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.
    alignContent: {
      type: String,
      default: 'normal'
    },
    gap: {
      type: String,
      default: '0'
    },
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