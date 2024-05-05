<template>
  <div>
    <ep-table-search-input
      v-if="enableSearch"
      :search-text="searchText"
      @update:search-text="updateSearchText"
    />
    <table>
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
          v-for="row in paginatedAndSearchedData"
          :key="row.id"
        >
          <td
            v-for="column in columns"
            :key="column.key"
          >{{ row[column.key] }}</td>
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
  import { ref, defineProps } from 'vue'
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
    pageSize: {
      type: Number,
      default: 10
    },
    enableSorting: {
      type: Boolean,
      default: true
    },
    enablePagination: {
      type: Boolean,
      default: true
    },
    enableSearch: {
      type: Boolean,
      default: true
    }
  })

  // Your data
  const yourData = ref([])

  const searchText = ref('')
  const { sortedData, sortBy, sortColumn, sortOrder } = useSorting(yourData, props.enableSorting)

  const { paginatedData, currentPage } = usePagination(sortedData, props.pageSize, props.enablePagination)
  const totalPages = Math.ceil(sortedData.length / props.pageSize)

  const { searchedData } = useSearch(paginatedData, props.enableSearch, searchText)

  // Combine pagination and search
  const paginatedAndSearchedData = computed(() => {
    return searchedData.value.slice((currentPage - 1) * props.pageSize, currentPage * props.pageSize)
  })

  // Method to update search text
  const updateSearchText = (text) => {
    searchText.value = text
  }
</script>
