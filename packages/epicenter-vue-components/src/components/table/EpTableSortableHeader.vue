<template>
  <th
    :style="cellWidths[columnIndex]"
    @click="emit('sort', column.key)"
  >
    <div :class="headerClass">
      {{ column.label }}
      <ArrowUp01 v-if="isSorted && sortOrder === 'asc'" />
      <ArrowDown01 v-if="isSorted && sortOrder === 'desc'" />
    </div>
  </th>
</template>

<script setup>
  import ArrowDown01 from '@ericpitcock/epicenter-icons/icons/ArrowDown01'
  import ArrowUp01 from '@ericpitcock/epicenter-icons/icons/ArrowUp01'
  import { computed } from 'vue'

  defineOptions({
    name: 'EpTableSortableHeader'
  })

  const props = defineProps({
    column: {
      type: Object,
      required: true
    },
    cellWidths: {
      type: Array,
      default: () => []
    },
    columnIndex: {
      type: Number,
      default: null
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

  const headerClass = computed(() => {
    return [
      'ep-table-sortable-header',
      { 'ep-table-sortable-header--active': props.sortColumn === props.column.key }
    ]
  })

  const isSorted = computed(() => {
    return props.column.sortable && props.sortColumn === props.column.key
  })
</script>