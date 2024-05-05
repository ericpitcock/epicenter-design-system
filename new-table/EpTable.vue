<template>
  <div>
    <!-- Search input -->
    <input
      v-model="searchText"
      v-if="enableSearch"
      placeholder="Search..."
    >
    <table>
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
          >
            {{ column.label }}
            <!-- Sorting indicator -->
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
    <!-- Pagination controls -->
    <div v-if="enablePagination">
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
      >Previous</button>
      <span>{{ currentPage }}</span>
      <button
        @click="currentPage++"
        :disabled="currentPage === totalPages"
      >Next</button>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps } from 'vue'
  import useSorting from './useSorting'
  import usePagination from './usePagination'
  import useSearch from './useSearch'

  const props = defineProps({
    columns: Array,
    data: Array,
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

  const { sortedData, sortBy, sortColumn, sortOrder } = useSorting(props.data, props.enableSorting)

  const { paginatedData, currentPage } = usePagination(sortedData, props.pageSize, props.enablePagination)
  const totalPages = Math.ceil(sortedData.length / props.pageSize)

  const { searchText, searchedData } = useSearch(paginatedData, props.enableSearch)

  // Combine pagination and search
  const paginatedAndSearchedData = computed(() => {
    return searchedData.value.slice((currentPage - 1) * props.pageSize, currentPage * props.pageSize)
  })
</script>
