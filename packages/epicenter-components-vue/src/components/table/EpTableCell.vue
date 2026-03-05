<script setup lang="ts">
  import { ref, watchEffect } from 'vue'

  import type { TableColumn, TableRow } from '../../types'

  interface EpTableCellProps {
    column: TableColumn
    row: TableRow
    styles?: string[]
  }

  const props = withDefaults(defineProps<EpTableCellProps>(), {
    styles: () => [],
  })

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
    cellContent.value = formattedCell(props.row, props.column)
  })
</script>

<template>
  <span :class="column.class">
    {{ cellContent }}
  </span>
</template>