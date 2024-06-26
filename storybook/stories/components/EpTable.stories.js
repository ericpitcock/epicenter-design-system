import EpTable from '@/components/table/EpTable.vue'
import EpTableSearchInput from '@/components/table/EpTableSearchInput.vue'
import EpTablePagination from '@/components/table/EpTablePagination.vue'
import EpTableSortableHeader from '@/components/table/EpTableSortableHeader.vue'
import useExclude from '@/components/table/useExclude.js'
import useSorting from '@/components/table/useSorting.js'
import usePagination from '@/components/table/usePagination.js'
import useSearch from '@/components/table/useSearch.js'
import { paddedSurfaceOverflow } from '../../helpers/decorators.js'
import { columns, fakeArray } from '../../data/tableData'
import { computed, ref } from 'vue'

export default {
  title: 'Components/Table',
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
      table: { disable: true }
    },
    compact: {
      name: 'Compact',
      control: {
        type: 'boolean'
      }
    },
    bordered: {
      name: 'Bordered',
      control: {
        type: 'boolean'
      },
    },
    selectable: {
      name: 'Selectable',
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
    calculateHeight: {
      name: 'Calculate Height',
      control: {
        type: 'boolean'
      }
    },
    calculateHeightOffset: {
      name: 'Calculate Height Offset',
      control: {
        type: 'number'
      }
    },
    styles: {
      table: { disable: true }
    }
  }
}

export const Table = (args) => ({
  components: {
    EpTable,
    EpTableSearchInput,
    EpTablePagination,
    EpTableSortableHeader
  },
  setup() {
    const tableData = ref(fakeArray(100))
    const columnsRef = ref(columns)
    // use exclude
    const {
      includedColumns,
      includedData
    } = useExclude(columnsRef, tableData, args.exclude)

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

    const onRowClick = (row) => {
      console.log('Row clicked:', row)
    }

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
      styles,
      onRowClick
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
      @row-click="onRowClick"
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

Table.args = {
  exclude: ['id'],
  compact: false,
  bordered: true,
  selectable: false,
  striped: true,
  width: '100%',
  stickyHeader: true,
  calculateHeight: true,
  calculateHeightOffset: 81
}