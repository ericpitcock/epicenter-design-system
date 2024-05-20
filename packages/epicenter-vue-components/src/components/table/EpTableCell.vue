<template>
  <td :style="styles">
    <component
      :is="column.component"
      v-if="!!column.component"
      v-bind="row[column.key].props"
    />
    <template v-else>
      {{ formattedCell(row, column) }}
    </template>
  </td>
</template>

<script setup>
  // eslint-disable-next-line no-unused-vars
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

  const formattedCell = (row, column) => {
    const value = row[column.key].value || row[column.key]
    const formatter = column.formatter
    return formatter ? formatter(value) : value
  }
</script>