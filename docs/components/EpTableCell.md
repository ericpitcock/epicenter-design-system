# EpTableCell



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `column` | - | `TableColumn` | `-` |
| `row` | - | `TableRow` | `-` |
| `styles` | - | `Array` | `-` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<script setup lang="ts">
  import { ref, watchEffect } from 'vue'

  import type { TableColumn, TableRow } from '../../types'

  interface EpTableCellProps {
    column: TableColumn
    row: TableRow
    styles?: string[]
  }

  const { row, column, styles = [] } = defineProps<EpTableCellProps>()

  const cellContent = ref<unknown>('')

  const formattedCell = (row: TableRow, column: TableColumn): unknown => {
    const value = row[column.key]
    const formatter = column.formatter

    if (formatter) {
      return formatter(value, row)
    }
    return value
  }

  watchEffect(() => {
    cellContent.value = formattedCell(row, column)
  })
</script>

<template>
  <span :class="column.class">
    {{ cellContent }}
  </span>
</template>
```