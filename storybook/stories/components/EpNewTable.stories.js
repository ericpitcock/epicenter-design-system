import EpTable from '@/components/new-table/EpTable.vue'

export default {
  title: 'Components/New Table',
  component: EpTable,
  argTypes: {
    columns: {
      name: 'Columns',
      control: {
        type: 'object'
      }
    },
    data: {
      name: 'Data',
      control: {
        type: 'array'
      }
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

export const NewTable = (args) => ({
  components: { EpTable },
  setup() {
    return { args }
  },
  template: `
    <ep-table v-bind="args" />
  `
})

const tableData = [
  { id: 1, name: 'John', age: 30, city: 'New York' },
  { id: 2, name: 'Alice', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Bob', age: 35, city: 'Chicago' },
  // Add more data as needed
]

// Table columns configuration
const columns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'city', label: 'City', sortable: true }
  // Add more columns as needed
]

NewTable.args = {
  columns,
  data: tableData,
  enableFilters: false,
  enablePagination: false,
  pageSize: 10,
  enableSearch: false,
  enableSorting: false,
}