<!-- eslint-disable vue/no-v-html -->
<template>
  <td :style="styles">
    <component
      :is="column.component"
      v-if="!!column.component"
      v-bind="row[column.key].props"
    />
    <span
      v-else
      v-html="formattedCell(row, column)"
    />
  </td>
</template>

<script setup>
  import DOMPurify from 'dompurify'

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
    return formatter ? DOMPurify.sanitize(formatter(value)) : value
  }
</script>