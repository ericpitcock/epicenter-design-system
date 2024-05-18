<template>
  <th @click="emit('sort', column.key)">
    {{ column.label }}
    <span v-if="column.sortable">
      {{ sortColumn === column.key ? (sortOrder === 'asc' ? '▲' : '▼') :
        '' }}
    </span>
  </th>
</template>

<script setup>
  // eslint-disable-next-line no-unused-vars
  const props = defineProps({
    column: {
      type: Object,
      required: true
    },
    sortColumn: {
      type: String,
      required: true
    },
    sortOrder: {
      type: String,
      required: true
    }
  })

  const emit = defineEmits(['sort'])
</script>