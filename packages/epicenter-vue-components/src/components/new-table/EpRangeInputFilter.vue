<template>
  <div>
    <input
      v-model="selectedRange"
      type="range"
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
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  })

  // Initialize selected range
  const selectedRange = ref(0)

  // Method to apply filter and emit event
  const applyFilter = () => {
    // Emit event to update applied filters in parent component
    emit('update:appliedFilters', { [columnKey]: selectedRange.value })
  }
</script>
