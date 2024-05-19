<template>
  <th @click="emit('sort', column.key)">
    <div class="ep-table-sortable-header">
      {{ column.label }}
      <ep-icon
        v-if="column.sortable && props.sortColumn === props.column.key"
        v-bind="iconProps"
      />
    </div>
  </th>
</template>

<script setup>
  import EpIcon from '../icon/EpIcon.vue'
  import { computed } from 'vue'

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

  const iconProps = computed(() => {
    return {
      name: props.sortOrder === 'asc' ? 'arrow-up' : 'arrow-down',
      styles: {
        '--ep-icon-height': '17px',
      }
    }
  })  
</script>