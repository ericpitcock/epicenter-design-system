<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    appliedFilters: {
      type: Object,
      required: true
    },
    filterKey: {
      type: String,
      required: true
    },
    columnKey: {
      type: String,
      required: true
    }
  })

  const emit = defineEmits(['update:appliedFilters'])

  // Initialize selected date
  const selectedDate = ref('')

  // Method to apply filter and emit event
  const applyFilter = () => {
    // Emit event to update applied filters in parent component
    emit('update:appliedFilters', { [props.columnKey]: selectedDate.value })
  }
</script>

<template>
  <div>
    <input
      v-model="selectedDate"
      type="date"
      @change="applyFilter"
    >
  </div>
</template>
