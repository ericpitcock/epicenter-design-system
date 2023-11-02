import { padded } from '../../helpers/decorators'
import EpCheckbox from '@/components/checkbox/EpCheckbox'
import EpContainer from '@/components/container/EpContainer'
import EpDropdown from '@/components/dropdown/EpDropdown'
import EpHeader from '@/components/header/EpHeader'
import EpFlexContainer from '@/components/flexbox/EpFlexContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpSearch from '@/components/search/EpSearch'
import EpTable from '@/components/table/EpTable'
import { columns, fakeArray } from '../../data/tableData'

const tableData = fakeArray(30)

export default {
  title: 'Components/Table',
  component: EpTable,
  decorators: [padded],
  argTypes: {
    bordered: {
      name: 'Bordered',
      control: {
        type: 'boolean'
      },
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text'
      }
    },
    calculateHeight: {
      table: { disable: true }
    },
    calculateHeightOffset: {
      table: { disable: true }
    },
    columns: {
      table: { disable: true }
    },
    compact: {
      name: 'Compact',
      control: {
        type: 'boolean'
      },
    },
    data: {
      name: 'Data',
      control: {
        type: 'array'
      },
      table: {
        category: 'Data',
        disable: true
      }
    },
    exclude: {
      table: { disable: true }
    },
    headerBackgroundColor: {
      name: 'Header Background Color',
      control: {
        type: 'color'
      }
    },
    hiddenColumns: {
      table: { disable: true }
    },
    padding: {
      table: { disable: true }
    },
    search: {
      table: { disable: true }
    },
    searchable: {
      table: { disable: true }
    },
    selectable: {
      name: 'Selectable',
      control: {
        type: 'boolean'
      },
    },
    selected: {
      table: { disable: true }
    },
    sortable: {
      name: 'Sortable',
      control: {
        type: 'boolean'
      },
    },
    sortDir: {
      name: 'Sort Direction',
      options: ['asc', 'desc'],
      control: {
        type: 'radio',
        labels: {
          asc: 'Ascending',
          desc: 'Descending'
        }
      },
    },
    sortKey: {
      table: { disable: true }
    },
    stickyHeader: {
      name: 'Sticky Header',
      control: {
        type: 'boolean'
      },
    },
    stickyTop: {
      table: { disable: true }
    },
    striped: {
      name: 'Striped',
      control: {
        type: 'boolean'
      },
    },
    verticalAlign: {
      name: 'Vertical Align',
      options: ['top', 'middle', 'bottom'],
      control: {
        type: 'select'
      },
      table: {
        labels: {
          bottom: 'Bottom',
          middle: 'Middle',
          top: 'Top'
        }
      }
    },
    whiteSpace: {
      name: 'White Space',
      options: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
      control: {
        type: 'select'
      },
      table: {
        labels: {
          normal: 'Normal',
          nowrap: 'No Wrap',
          pre: 'Pre',
          'pre-line': 'Pre Line',
          'pre-wrap': 'Pre Wrap'
        }
      }
    },
    width: {
      table: { disable: true }
    }
  }
}

const filters = columns.map(column => {
  return {
    id: column.key,
    name: 'columns',
    value: column.key,
    checked: true,
    // indeterminate: false,
    label: column.header,
    disabled: false,
    // required: false,
    // readonly: false,
    // tabindex: 1,
    // commmand: null
  }
})

// let hiddenColumns = []

// const handleFilter = (checked, unchecked) => {
//   hiddenColumns = unchecked
// }

export const Table = args => ({
  components: {
    EpContainer,
    EpCheckbox,
    EpDropdown,
    EpHeader,
    EpFlexContainer,
    EpFooter,
    EpSearch,
    EpTable
  },
  // setup() {
  //   return { args, filters, handleFilter }
  // },
  data() {
    return {
      args,
      filters,
      hiddenColumns: [],
      tableData
    }
  },
  methods: {
    handleFilter(event) {
      // if unchecked, add to hiddenColumns
      if (event.target.checked === false) {
        this.hiddenColumns.push(event.target.id)
      } else {
        // if checked, remove from hiddenColumns
        this.hiddenColumns = this.hiddenColumns.filter(column => column !== event.target.id)
      }
    },
    onSearch(value) {
      // filter tableData
      this.tableData = tableData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    }
  },
  template: `
  <ep-container
    max-width="120rem"
    height="100%"
    container-padding="0 3rem"
    overflow="hidden"
    calculateHeight
    :calculateHeightOffset="30"
  >
    <template #header>
      <ep-header>
        <template #left>
          <ep-search
            :search-results="tableData"
            results-value="name"
            results-label="name"
            :input-props="{
              width: '40rem',
              size: 'large',
              backgroundColor: 'var(--interface-foreground)',
              placeholder: 'Search by Name'
            }"
            @search="onSearch"
          />
        </template>
        <template #right>
          <ep-dropdown
            :button="{
              variant: 'ghost',
              label: '',
              iconRight: { name: 'f/columns' }
            }"
            align-right
          >
            <template #content>
              <ep-container
                backgroundColor="var(--interface-overlay)"
                borderColor="var(--border-color--lighter)"
                borderRadius="var(--border-radius)"
                container-padding="2rem"
              >
                <ep-flex-container
                  flex-flow="column nowrap"
                  gap="1rem"
                >
                  <ep-checkbox
                    v-for="filter in filters"
                    :key="filter.id"
                    v-bind="filter"
                    @checkchange="handleFilter"
                  />
                </ep-flex-container>
              </ep-container>
            </template>
          </ep-dropdown>
        </template>
      </ep-header>
      </template>
    <ep-table
      v-bind="args"
      :hiddenColumns="hiddenColumns"
    />
  </ep-container>
  `
})

Table.args = {
  bordered: true,
  borderColor: 'var(--border-color)',
  calculateHeight: true,
  calculateHeightOffset: 30,
  columns: columns,
  compact: false,
  data: tableData,
  exclude: ['id'],
  headerBackgroundColor: 'var(--interface-surface)',
  hiddenColumns: [],
  padding: '0 0 10rem 0',
  search: [],
  selectable: false,
  selected: null,
  sortable: true,
  sortKey: 'start_date',
  sortDir: 'asc',
  stickyHeader: true,
  stickyTop: '0',
  striped: true,
  verticalAlign: 'middle',
  whiteSpace: 'normal',
  width: '100%'
}
