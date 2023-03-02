import { padded } from '../../helpers/decorators'
import EpCheckboxFilter from '@/components/filters/EpCheckboxFilter'
import EpContainer from '@/components/container/EpContainer'
import EpDropdown from '@/components/dropdown/EpDropdown'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
import EpTable from '@/components/table/EpTable'
import { columns, fakeArray } from '@/components/table/data'

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
    hiddenColumns: {
      name: 'Hidden Columns',
      control: {
        type: 'array'
      }
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
        type: 'select'
      },
      table: {
        labels: {
          asc: 'Ascending',
          desc: 'Descending'
        }
      }
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
    name: '',
    value: column.key,
    // checked: true,
    indeterminate: false,
    disabled: false,
    label: column.header,
    required: false,
    readonly: false,
    tabindex: 1,
    commmand: null
  }
})

// let hiddenColumns = []

// const handleFilter = (checked, unchecked) => {
//   hiddenColumns = unchecked
// }

const Template = args => ({
  components: {
    EpContainer,
    EpCheckboxFilter,
    EpDropdown,
    EpHeader,
    EpFooter,
    EpTable
  },
  // setup() {
  //   return { args, filters, handleFilter }
  // },
  data() {
    return {
      args,
      filters,
      hiddenColumns: []
    }
  },
  methods: {
    handleFilter(checked, unchecked) {
      this.hiddenColumns = unchecked
    }
  },
  template: `
  <ep-container
    max-width="120rem"
    height="100%"
    container-padding="0 3rem"
    overflow="hidden"
  >
    <template #header>
      <ep-header>
        <template #left>
        </template>
        <template #right>
          <ep-dropdown
            :button="{
              kind: 'ghost',
              label: '',
              iconRight: { name: 'f/columns' }
            }"
            align-right
          >
            <template #content>
              <ep-container
                backgroundColor="var(--background-4)"
                borderColor="var(--border-color--lighter)"
                borderRadius="var(--border-radius)"
                container-padding="2rem"
              >
                <ep-checkbox-filter
                  :items="filters"
                  @selection-change="handleFilter"
                />
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

export const Table = Template.bind({})

Table.args = {
  bordered: true,
  calculateHeight: true,
  calculateHeightOffset: 30,
  columns: columns,
  compact: false,
  data: fakeArray(30),
  exclude: ['id'],
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
