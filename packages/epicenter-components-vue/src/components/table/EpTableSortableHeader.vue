<script setup lang="ts">
  import ArrowDown01 from '@ericpitcock/epicenter-icons-vue/ArrowDown01'
  import ArrowUp01 from '@ericpitcock/epicenter-icons-vue/ArrowUp01'
  import { computed } from 'vue'

  import type { TableColumn, SortOrder } from '../../types'

  interface EpTableSortableHeaderProps {
    cellWidths?: Record<string, string>[]
    column: TableColumn
    columnIndex?: number | null
    sortColumn: string
    sortOrder: SortOrder
  }

  const props = withDefaults(defineProps<EpTableSortableHeaderProps>(), {
    cellWidths: () => [],
    columnIndex: null,
  })

  const emit = defineEmits<{
    sort: [key: string]
  }>()

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

<template>
  <th
    :style="columnIndex != null ? cellWidths[columnIndex] : undefined"
    @click="emit('sort', column.key)"
  >
    <div :class="headerClass">
      {{ column.label }}
      <ArrowUp01 v-if="isSorted && sortOrder === 'asc'" />
      <ArrowDown01 v-if="isSorted && sortOrder === 'desc'" />
    </div>
  </th>
</template>