import EpTable from '@/components/new-table/EpTable.vue'
import EpTableSearchInput from '@/components/new-table/EpTableSearchInput.vue'
import EpTablePagination from '@/components/new-table/EpTablePagination.vue'
import EpTableSortableHeader from '@/components/new-table/EpTableSortableHeader.vue'
import useSorting from '@/components/new-table/useSorting.js'
import usePagination from '@/components/new-table/usePagination.js'
import useSearch from '@/components/new-table/useSearch.js'
import { paddedSurface } from '../../helpers/decorators.js'
import { columns, fakeArray } from '../../data/tableData'

export default {
  title: 'Components/New Table',
  component: EpTable,
  decorators: [paddedSurface],
  argTypes: {
    columns: {
      table: { disable: true }
    },
    data: {
      table: { disable: true }
    },
    exclude: {
      table: { disable: true }
    },
    bordered: {
      name: 'Bordered',
      control: {
        type: 'boolean'
      },
    },
    striped: {
      name: 'Striped',
      control: {
        type: 'boolean'
      },
    },
  }
}

const tableData = fakeArray(30)

export const NewTable = (args) => ({
  components: {
    EpTable,
    EpTableSearchInput,
    EpTablePagination,
    EpTableSortableHeader
  },
  setup() {
    // add search
    const {
      searchedData,
      searchText,
      updateSearchText
    } = useSearch(tableData)

    // add sorting
    const {
      sortedData,
      sortBy,
      sortColumn,
      sortOrder
    } = useSorting(searchedData, 'id', 'asc')

    // add pagination
    const {
      paginatedData,
      currentPage,
      totalPages,
      onPageChange
    } = usePagination(sortedData)

    // filtering
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

    return {
      args,
      columns,
      // sorting
      sortBy,
      sortColumn,
      sortOrder,
      // pagination
      currentPage,
      totalPages,
      onPageChange,
      paginatedData,
      // search
      searchText,
      updateSearchText
    }
  },
  template: `
    <ep-table-search-input
      v-model="searchText"
      @update:modelValue="updateSearchText"
    />
    <ep-table
      :columns="columns"
      :data="paginatedData"
      v-bind="args"
    >
      <template #header="{ column }">
        <ep-table-sortable-header
          :column="column"
          :sort-column="sortColumn"
          :sort-order="sortOrder"
          @sort="sortBy"
        />
      </template>
    </ep-table>
    <ep-table-pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="onPageChange"
    />
  `
})

NewTable.args = {
  exclude: ['status'],
  bordered: true,
  striped: true
}