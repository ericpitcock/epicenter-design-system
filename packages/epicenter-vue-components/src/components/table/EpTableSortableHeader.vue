<template>
  <th
    :style="cellWidths[columnIndex]"
    @click="emit('sort', column.key)"
  >
    <div :class="headerClass">
      {{ column.label }}
      <ep-icon
        v-if="isSorted"
        v-bind="iconProps"
      />
    </div>
  </th>
</template>

<script setup>
  import { computed } from 'vue'

  import EpIcon from '../icon/EpIcon.vue'

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

  const iconProps = computed(() => {
    return {
      name: props.sortOrder === 'asc' ? 'arrow-up' : 'arrow-down',
    }
  })

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