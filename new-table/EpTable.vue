<template>
  <div>
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
          v-for="row in paginatedData"
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
  }
})

const { sortedData, sortBy, sortColumn, sortOrder } = useSorting(props.data, props.enableSorting)

const { paginatedData, currentPage } = usePagination(sortedData, props.pageSize, props.enablePagination)
const totalPages = Math.ceil(sortedData.length / props.pageSize)
</script>
