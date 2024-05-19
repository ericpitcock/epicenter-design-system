import EpTable from '@/components/new-table/EpTable.vue'
import EpTableSearchInput from '@/components/new-table/EpTableSearchInput.vue'
import EpTablePagination from '@/components/new-table/EpTablePagination.vue'
import EpTableSortableHeader from '@/components/new-table/EpTableSortableHeader.vue'
import useExclude from '@/components/new-table/useExclude.js'
import useSorting from '@/components/new-table/useSorting.js'
import usePagination from '@/components/new-table/usePagination.js'
import useSearch from '@/components/new-table/useSearch.js'
import { paddedSurfaceOverflow } from '../../helpers/decorators.js'
import { columns, fakeArray } from '../../data/tableData'
import { computed } from 'vue'

export default {
  title: 'Components/New Table',
  component: EpTable,
  decorators: [paddedSurfaceOverflow],
  argTypes: {
    columns: {
      table: { disable: true }
    },
    data: {
      table: { disable: true }
    },
    exclude: {
      name: 'Exclude',
      control: {
        type: 'array'
      }
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
    width: {
      name: 'Width',
      control: {
        type: 'text'
      }
    },
    stickyHeader: {
      name: 'Sticky Header',
      control: {
        type: 'boolean'
      }
    },
    styles: {
      table: { disable: true }
    }
  }
}

const tableData = fakeArray(100)

export const NewTable = (args) => ({
  components: {
    EpTable,
    EpTableSearchInput,
    EpTablePagination,
    EpTableSortableHeader
  },
  setup() {
    // use exclude
    const {
      includedColumns,
      includedData
    } = useExclude(columns, tableData, args.exclude)

    // add search
    const {
      searchedData,
      searchText,
      updateSearchText
    } = useSearch(includedData)

    // add sorting
    const {
      sortedData,
      sortBy,
      sortColumn,
      sortOrder
    } = useSorting(searchedData, 'status', 'asc')

    // add pagination
    const {
      paginatedData,
      currentPage,
      totalPages,
      onPageChange
    } = usePagination(sortedData, 1, 30)

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

    const styles = computed(() => {
      return {
        '--ep-table-width': args.width
      }
    })

    return {
      args,
      // columns,
      includedColumns,
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
      updateSearchText,
      styles
    }
  },
  template: `
    <ep-table-search-input
      v-model="searchText"
      @update:modelValue="updateSearchText"
    />
    <ep-table
      :columns="includedColumns"
      :data="paginatedData"
      :style="styles"
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
  exclude: [],
  bordered: true,
  striped: true,
  width: '100%',
  stickyHeader: true,
}