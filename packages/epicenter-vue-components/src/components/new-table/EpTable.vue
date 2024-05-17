<template>
  <div>
    <ep-table-search-input
      v-if="enableSearch"
      :search-text="searchText"
      @update:search-text="updateSearchText"
    />
    <table class="ep-table">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
          >
            {{ column.label }}
            <span
              v-if="column.sortable && enableSorting"
              @click="sortBy(column.key)"
            >
              {{ sortColumn === column.key ? (sortOrder === 'asc' ? '▲' : '▼') :
                '' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in paginatedAndFilteredData"
          :key="row.id"
        >
          <td
            v-for="column in columns"
            :key="column.key"
          >
            {{ row[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="enablePagination">
      <button
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        Previous
      </button>
      <span>{{ currentPage }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, watch, computed } from 'vue'
  import EpTableSearchInput from './EpTableSearchInput.vue'
  import useSorting from './useSorting'
  import usePagination from './usePagination'
  import useSearch from './useSearch'

  const props = defineProps({
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    enableFilters: {
      type: Boolean,
      default: false
    },
    appliedFilters: {
      type: Object,
      default: () => ({})
    },
    enablePagination: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: 10
    },
    enableSearch: {
      type: Boolean,
      default: false
    },
    enableSorting: {
      type: Boolean,
      default: false
    },
  })

  const yourData = ref(props.data)

  const { sortedData, sortBy, sortColumn, sortOrder } = useSorting(yourData, props.enableSorting)

  const { paginatedData, currentPage } = usePagination(sortedData, props.pageSize, props.enablePagination)
  const totalPages = Math.ceil(sortedData.length / props.pageSize)

  const searchText = ref('')
  const { searchedData } = useSearch(paginatedData, props.enableSearch, searchText)

  const appliedFilters = ref(props.appliedFilters)

  watch(appliedFilters, (newFilters) => {
    console.log("Applied filters changed:", newFilters)
  }, { deep: true })

  const paginatedAndFilteredData = computed(() => {
    if (!props.enableFilters) {
      console.log("No filters applied", searchedData.value)
      console.log("Current page:", currentPage.value)
      return searchedData.value.slice((currentPage.value - 1) * props.pageSize, currentPage.value * props.pageSize)
    }

    let filteredData = searchedData.value

    // Apply filters
    for (const key in appliedFilters.value) {
      const filterValue = appliedFilters.value[key]
      filteredData = filteredData.filter(row => {
        return row[key] === filterValue
      })
    }

    return filteredData.slice((currentPage.value - 1) * props.pageSize, currentPage.value * props.pageSize)
  })

  const updateSearchText = (text) => {
    searchText.value = text
  }
</script>
