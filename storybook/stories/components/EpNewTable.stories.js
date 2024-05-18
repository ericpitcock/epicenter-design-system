import EpTable from '@/components/new-table/EpTable.vue'
import EpTableSearchInput from '@/components/new-table/EpTableSearchInput.vue'
import EpTablePagination from '@/components/new-table/EpTablePagination.vue'
import EpTableSortableHeader from '@/components/new-table/EpTableSortableHeader.vue'
import useSorting from '@/components/new-table/useSorting.js'
import usePagination from '@/components/new-table/usePagination.js'
import useSearch from '@/components/new-table/useSearch.js'

export default {
  title: 'Components/New Table',
  component: EpTable,
  argTypes: {
    columns: {
      table: { disable: true }
    },
    data: {
      table: { disable: true }
    },
    enableFilters: {
      name: 'Enable Filters',
      control: {
        type: 'boolean'
      }
    },
    enablePagination: {
      name: 'Enable Pagination',
      control: {
        type: 'boolean'
      }
    },
    pageSize: {
      name: 'Page Size',
      control: {
        type: 'number'
      }
    },
    enableSearch: {
      name: 'Enable Search',
      control: {
        type: 'boolean'
      }
    },
    enableSorting: {
      name: 'Enable Sorting',
      control: {
        type: 'boolean'
      }
    },
  }
}

const tableData = [
  { id: 1, name: 'John', age: 30, city: 'New York' },
  { id: 2, name: 'Alice', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Bob', age: 35, city: 'Chicago' },
  { id: 4, name: 'Emma', age: 28, city: 'Houston' },
  { id: 5, name: 'David', age: 40, city: 'Phoenix' },
  { id: 6, name: 'Sophia', age: 22, city: 'Philadelphia' },
  { id: 7, name: 'Michael', age: 32, city: 'San Antonio' },
  { id: 8, name: 'Olivia', age: 27, city: 'San Diego' },
  { id: 9, name: 'James', age: 29, city: 'Dallas' },
  { id: 10, name: 'Charlotte', age: 31, city: 'San Jose' },
  { id: 11, name: 'Daniel', age: 26, city: 'Austin' },
  { id: 12, name: 'Ava', age: 24, city: 'Jacksonville' },
  { id: 13, name: 'Matthew', age: 37, city: 'Fort Worth' },
  { id: 14, name: 'Isabella', age: 33, city: 'Columbus' },
  { id: 15, name: 'Anthony', age: 36, city: 'Charlotte' },
  { id: 16, name: 'Mia', age: 21, city: 'San Francisco' },
  { id: 17, name: 'Andrew', age: 34, city: 'Indianapolis' },
  { id: 18, name: 'Amelia', age: 30, city: 'Seattle' },
  { id: 19, name: 'Joshua', age: 38, city: 'Denver' },
  { id: 20, name: 'Harper', age: 23, city: 'Washington' },
  { id: 21, name: 'Joseph', age: 28, city: 'Boston' },
  { id: 22, name: 'Evelyn', age: 25, city: 'El Paso' },
  { id: 23, name: 'Christopher', age: 39, city: 'Nashville' },
  { id: 24, name: 'Abigail', age: 32, city: 'Detroit' },
  { id: 25, name: 'Alexander', age: 29, city: 'Oklahoma City' },
  { id: 26, name: 'Emily', age: 31, city: 'Las Vegas' },
  { id: 27, name: 'Ryan', age: 27, city: 'Louisville' },
  { id: 28, name: 'Elizabeth', age: 34, city: 'Baltimore' },
  { id: 29, name: 'Ethan', age: 22, city: 'Milwaukee' },
  { id: 30, name: 'Scarlett', age: 26, city: 'Albuquerque' },
]

const columns = [
  {
    key: 'id',
    label: 'ID',
    sortable: true
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true
  },
  {
    key: 'age',
    label: 'Age',
    sortable: true
  },
  {
    key: 'city',
    label: 'City',
    sortable: true
  }
]

export const NewTable = (args) => ({
  components: {
    EpTable,
    EpTableSearchInput,
    EpTablePagination,
    EpTableSortableHeader
  },
  setup() {
    const {
      searchedData,
      searchText,
      updateSearchText
    } = useSearch(tableData)

    const {
      sortedData,
      sortBy,
      sortColumn,
      sortOrder
    } = useSorting(searchedData)

    const {
      paginatedData,
      currentPage,
      totalPages,
      onPageChange
    } = usePagination(sortedData)

    // const {
    //   searchedData,
    //   searchText,
    //   updateSearchText
    // } = useSearch(paginatedData)

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
      searchedData,
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

// NewTable.args = {
//   columns,
//   data: tableData,
// }