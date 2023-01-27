import EpBadge from '@/components/badge/EpBadge'
import EpContainer from '@/components/container/EpContainer'
import EpTable from './EpTable'
import { columns, fakeArray } from './data'

const container = () => {
  return {
    template: '<div style="padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Table',
  component: EpTable,
  decorators: [container],
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
    exclude: {
      table: { disable: true }
    },
    selectable: {
      name: 'Selectable',
      control: {
        type: 'boolean'
      }
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
    selected: {
      table: { disable: true }
    },
    sortable: {
      name: 'Sortable',
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
    }
  }
}

const Template = args => ({
  components: { EpBadge, EpContainer, EpTable },
  setup() {
    return { args }
  },
  template: `
  <ep-container width="fit-content" padding="0.4rem 2rem 2rem">
    <ep-table v-bind="args" />
  </ep-container>
  `
})

export const Table = Template.bind({})

Table.args = {
  columns: columns,
  data: fakeArray(30),
  exclude: ['id'],
  selectable: false,
  bordered: false,
  compact: false,
  selected: [],
  sortable: false,
  stickyHeader: true,
  stickyTop: '0',
  striped: false
}
