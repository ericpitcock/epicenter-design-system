<template>
  <div>
    <table class="ep-table">
      <thead>
        <tr>
          <template
            v-for="column in columns"
            :key="column.key"
          >
            <slot
              v-if="$slots.header"
              name="header"
              v-bind="{ column }"
            />
            <th v-else>
              {{ column.label }}
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in data"
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
    <!-- <div v-if="enablePagination">
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
    </div> -->
  </div>
</template>

<script setup>
  import { ref, defineProps, watch, computed } from 'vue'
  // import useSorting from './useSorting'
  // import usePagination from './usePagination'
  // import useSearch from './useSearch'

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
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    },
    enableSearch: {
      type: Boolean,
      default: false
    },
    searchQuery: {
      type: String,
      default: ''
    },
    enableSorting: {
      type: Boolean,
      default: false
    },
  })

  // const emit = defineEmits(['sort'])

  // const dataRef = ref(props.data)

  // const {
  //   sortedData,
  //   sortBy,
  //   sortColumn,
  //   sortOrder
  // } = useSorting(yourData, props.enableSorting)

  // const { paginatedData } = usePagination(sortedData, props.pageSize, props.currentPage, props.totalPages, props.enablePagination)

  // const searchText = ref(props.searchQuery)
  // const { searchedData } = useSearch(paginatedData, props.enableSearch, searchText)

  // const appliedFilters = ref(props.appliedFilters)

  // watch(appliedFilters, (newFilters) => {
  //   console.log("Applied filters changed:", newFilters)
  // }, { deep: true })

  // const paginatedAndFilteredData = computed(() => {
  //   if (!props.enableFilters) {
  //     return searchedData.value
  //   }

  //   let filteredData = searchedData.value

  //   // Apply filters
  //   for (const key in appliedFilters.value) {
  //     const filterValue = appliedFilters.value[key]
  //     filteredData = filteredData.filter(row => {
  //       return row[key] === filterValue
  //     })
  //   }

  //   return filteredData.slice((props.currentPage - 1) * props.pageSize, props.currentPage * props.pageSize)
  // })
</script>
