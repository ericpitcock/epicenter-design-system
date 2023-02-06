import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
import EpTable from './EpTable'
import { columns, fakeArray } from './data'

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

const Template = args => ({
  components: {
    EpActionBar,
    EpContainer,
    EpHeader,
    EpFooter,
    EpTable },
  setup() {
    return { args, commonActionBarArgs }
  },
  template: `
  <ep-container
    use-header
    use-footer
    max-width="120rem"
    height="100%"
    padding="0 2rem"
    overflow="hidden"
  >
    <template #header>
      <ep-header>
        <template #left>
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
    <ep-table v-bind="args" />
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
