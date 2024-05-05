<template>
  <div>
    <input
      type="range"
      v-model="selectedRange"
      :min="min"
      :max="max"
      @input="applyFilter"
    >
    <span>{{ selectedRange }}</span>
  </div>
</template>

<script setup>
  import { ref, defineProps } from 'vue'

  const props = defineProps({
    appliedFilters: Object, // Object containing the currently applied filters
    filterKey: String, // Key to identify the filter
    min: Number, // Minimum value for range
    max: Number // Maximum value for range
  })

  // Initialize selected range
  const selectedRange = ref(0)

  // Method to apply filter and emit event
  const applyFilter = () => {
    // Emit event to update applied filters in parent component
    emit('update:appliedFilters', { [filterKey]: selectedRange.value })
  }
</script>
