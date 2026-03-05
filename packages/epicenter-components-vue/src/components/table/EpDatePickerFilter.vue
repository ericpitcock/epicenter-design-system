<script setup lang="ts">
  import { ref } from 'vue'

  interface EpDatePickerFilterProps {
    appliedFilters: Record<string, unknown>
    columnKey: string
    filterKey: string
  }

  const props = defineProps<EpDatePickerFilterProps>()

  const emit = defineEmits<{
    'update:appliedFilters': [value: Record<string, string>]
  }>()

  // Initialize selected date
  const selectedDate = ref<string>('')

  // Method to apply filter and emit event
  const applyFilter = (): void => {
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
