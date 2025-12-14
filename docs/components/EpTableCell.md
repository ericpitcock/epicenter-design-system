# EpTableCell



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `row` | - | `object` | `-` |
| `column` | - | `object` | `-` |
| `styles` | - | `array` | `[]` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<template>
  <span :class="column.class">
    {{ cellContent }}
  </span>
</template>

<script setup>
  import { ref, watchEffect } from 'vue'

  const props = defineProps({
    row: {
      type: Object,
      required: true
    },
    column: {
      type: Object,
      required: true
    },
    styles: {
      type: Array,
      default: () => []
    }
  })

  const cellContent = ref('')

  const formattedCell = (row, column) => {
    const value = row[column.key]
    const formatter = column.formatter

    if (formatter) {
      return formatter(value, row)
    }
    return value
  }

  watchEffect(() => {
    cellContent.value = formattedCell(props.row, props.column)
  })
</script>
```