import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
import EpTable from './EpTable'
import { columns, fakeArray } from './data'

// const container = () => {
//   return {
//     template: '<div style="padding: 30px;"><story/></div>'
//   }
// }

export default {
  title: 'Components/Table',
  component: EpTable,
  // the padded decorator affects the table's sticky header
  decorators: [padded],
  argTypes: {
    columns: {
      name: 'Columns',
      control: {
        type: 'object'
      },
      table: {
        disable: true,
        category: 'Data'
      }
    },
    data: {
      name: 'Data',
      control: {
        type: 'array'
      },
      table: {
        disable: true,
        category: 'Data'
      }
    },
    width: {
      name: 'Width',
      control: {
        type: 'text'
      }
    },
    exclude: {
      table: { disable: true }
    },
    bordered: {
      name: 'Bordered',
      control: {
        type: 'boolean'
      }
    },
    compact: {
      name: 'Compact',
      control: {
        type: 'boolean'
      }
    },
    selectable: {
      name: 'Selectable',
      control: {
        type: 'boolean'
      }
    },
    selected: {
      table: { disable: true }
    },
    sortable: {
      name: 'Sortable',
      control: {
        type: 'boolean'
      }
    },
    searchable: {
      name: 'Searchable',
      control: {
        type: 'boolean'
      }
    },
    stickyHeader: {
      name: 'Sticky Header',
      control: {
        type: 'boolean'
      }
    },
    stickyTop: {
      name: 'Sticky Top',
      control: {
        type: 'text'
      }
    },
    striped: {
      name: 'Striped',
      control: {
        type: 'boolean'
      }
    },
    search: {
      name: 'Search',
      control: {
        type: 'array'
      }
    },
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
    overflow="auto"
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
  columns: columns,
  data: fakeArray(30),
  width: '100%',
  exclude: ['id'],
  selectable: false,
  bordered: false,
  compact: false,
  selected: null,
  sortable: false,
  stickyHeader: true,
  stickyTop: '0',
  striped: false
}
