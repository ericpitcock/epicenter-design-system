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
      defaultValue: columns,
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
      defaultValue: fakeArray(30),
      table: {
        disable: true,
        category: 'Data'
      }
    },
    exclude: {
      defaultValue: ['id'],
      table: { disable: true }
    },
    selectable: {
      name: 'Selectable',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    bordered: {
      name: 'Bordered',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    compact: {
      name: 'Compact',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    selected: {
      table: { disable: true }
    },
    sortable: {
      name: 'Sortable',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    stickyHeader: {
      name: 'Sticky Header',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    },
    stickyTop: {
      name: 'Sticky Top',
      control: {
        type: 'text'
      },
      defaultValue: '0'
    },
    striped: {
      name: 'Striped',
      control: {
        type: 'boolean'
      },
      defaultValue: false
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
