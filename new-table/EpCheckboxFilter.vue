<template>
  <div>
    <div
      v-for="option in options"
      :key="option.value"
    >
      <input
        type="checkbox"
        :value="option.value"
        v-model="selectedOptions"
        @change="applyFilter"
      >
      <label>{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps } from 'vue'

  const props = defineProps({
    options: Array, // Array of options for checkboxes
    appliedFilters: Object, // Object containing the currently applied filters
    filterKey: String // Key to identify the filter
  })

  // Initialize selected options
  const selectedOptions = ref([])

  // Method to apply filter and emit event
  const applyFilter = () => {
    // Emit event to update applied filters in parent component
    emit('update:appliedFilters', { [filterKey]: selectedOptions.value })
  }
</script>
