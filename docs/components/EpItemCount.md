# EpItemCount



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `count` | The count of items to display. | `number` | `-` |
| `plural` | The plural form of the item name. | `string` | `-` |
| `singular` | The singular form of the item name. | `string` | `-` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<script setup lang="ts">
  interface EpItemCountProps {
    /** The count of items to display. */
    count: number
    /** The plural form of the item name. */
    plural: string
    /** The singular form of the item name. */
    singular: string
  }

  const props = defineProps<EpItemCountProps>()
</script>

<template>
  <span>
    {{ count }} {{ count === 1 ? singular : plural }}
  </span>
</template>
```