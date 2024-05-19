<template>
  <td :style="styles">
    <component
      :is="column.component"
      v-if="!!column.component"
      v-bind="row[column.key].props"
    />
    <template v-else>
      {{ formatCell(row[column.key], column) }}
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

  const formatCell = (value, column) => {
    const formatter = column.formatter
    return formatter ? formatter(value) : value
  }
</script>