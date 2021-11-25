import EpContainer from '@/components/container/EpContainer'
import EpTableNew from './EpTableNew'
import { columns, fakeArray } from './data'

const container = () => {
  return {
    template:
      '<div style="padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Table New',
  component: EpTableNew,
  decorators: [container],
  argTypes: {
    columns: {
      name: 'Columns',
      control: {
        type: 'object'
      },
      defaultValue: columns,
      table: {
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
        category: 'Data'
      }
    },
    exclude: {
      name: 'Exclude',
      control: {
        type: 'array'
      },
      defaultValue: ['id']
    },
    selectable: {
      name: 'Selectable',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    fullWidth: {
      name: 'Full Width',
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
    stickyHeader: {
      name: 'Sticky Header',
      control: {
        type: 'boolean'
      },
      defaultValue: true
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

const Template = (args) => ({
  components: { EpContainer, EpTableNew },
  setup() {
    return { args, columns, fakeArray }
  },
  template: `
  <ep-container padding="1rem 2rem 2rem">
    <ep-table-new v-bind="args" />
  </ep-container>
  `
})

export const TableNew = Template.bind({})
