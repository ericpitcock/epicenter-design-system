# EpItemCount



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `count` | The count of items to display. | `number` | `-` |
| `singular` | The singular form of the item name. | `string` | `-` |
| `plural` | The plural form of the item name. | `string` | `-` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<template>
  <span>
    {{ count }} {{ count === 1 ? singular : plural }}
  </span>
</template>

<script setup>
  const props = defineProps({
    /**
     * The count of items to display.
     */
    count: {
      type: Number,
      required: true
    },
    /**
     * The singular form of the item name.
     */
    singular: {
      type: String,
      required: true
    },
    /**
     * The plural form of the item name.
     */
    plural: {
      type: String,
      required: true
    }
  })
</script>
```