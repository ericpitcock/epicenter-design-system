<template>
  <div>
    <!-- Table component with filters -->
    <YourTableComponent
      :columns="columns"
      :data="tableData"
      :enableSorting="true"
      :enablePagination="true"
      :enableSearch="true"
      :appliedFilters="appliedFilters"
      @update:appliedFilters="updateFilters"
    />

    <!-- Checkbox filter -->
    <CheckboxFilter
      v-if="filterType === 'checkbox'"
      :options="checkboxOptions"
      :appliedFilters="appliedFilters"
      filterKey="checkboxFilter"
      @update:appliedFilters="updateFilters"
    />

    <!-- Date picker filter -->
    <DatePickerFilter
      v-if="filterType === 'date'"
      :appliedFilters="appliedFilters"
      filterKey="dateFilter"
      @update:appliedFilters="updateFilters"
    />

    <!-- Range input filter -->
    <RangeInputFilter
      v-if="filterType === 'range'"
      :min="0"
      :max="100"
      :appliedFilters="appliedFilters"
      filterKey="rangeFilter"
      @update:appliedFilters="updateFilters"
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
