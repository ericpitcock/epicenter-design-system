<template>
  <div>
    <input
      type="date"
      v-model="selectedDate"
      @change="applyFilter"
    >
  </div>
</template>

<script setup>
  import { ref, defineProps } from 'vue'

  const props = defineProps({
    appliedFilters: Object, // Object containing the currently applied filters
    filterKey: String // Key to identify the filter
  })

  // Initialize selected date
  const selectedDate = ref('')

  // Method to apply filter and emit event
  const applyFilter = () => {
    // Emit event to update applied filters in parent component
    emit('update:appliedFilters', { [filterKey]: selectedDate.value })
  }
</script>
