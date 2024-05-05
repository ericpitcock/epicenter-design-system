<template>
  <div>
    <!-- Table component with filters -->
    <YourTableComponent
      :columns="columns"
      :data="tableData"
      :enable-sorting="true"
      :enable-pagination="true"
      :enable-search="true"
      :applied-filters="appliedFilters"
      @update:applied-filters="updateFilters"
    />

    <!-- Checkbox filter -->
    <CheckboxFilter
      v-if="filterType === 'checkbox'"
      :options="checkboxOptions"
      :applied-filters="appliedFilters"
      filter-key="checkboxFilter"
      @update:applied-filters="updateFilters"
    />

    <!-- Date picker filter -->
    <DatePickerFilter
      v-if="filterType === 'date'"
      :applied-filters="appliedFilters"
      filter-key="dateFilter"
      @update:applied-filters="updateFilters"
    />

    <!-- Range input filter -->
    <RangeInputFilter
      v-if="filterType === 'range'"
      :min="0"
      :max="100"
      :applied-filters="appliedFilters"
      filter-key="rangeFilter"
      @update:applied-filters="updateFilters"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import YourTableComponent from './YourTableComponent.vue'
  import CheckboxFilter from './CheckboxFilter.vue'
  import DatePickerFilter from './DatePickerFilter.vue'
  import RangeInputFilter from './RangeInputFilter.vue'

  // Table data
  const tableData = ref([
    { id: 1, name: 'John', age: 30, city: 'New York' },
    { id: 2, name: 'Alice', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob', age: 35, city: 'Chicago' },
    // Add more data as needed
  ])

  // Table columns configuration
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'age', label: 'Age', sortable: true },
    { key: 'city', label: 'City', sortable: true }
    // Add more columns as needed
  ]

  // Applied filters
  const appliedFilters = ref({})

  // Update filters method
  const updateFilters = (filters) => {
    appliedFilters.value = { ...appliedFilters.value, ...filters }
  }

  // Filter type (checkbox, date, range)
  const filterType = ref('checkbox')

  // Checkbox options
  const checkboxOptions = ref([
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' }
  ]);

</script>
