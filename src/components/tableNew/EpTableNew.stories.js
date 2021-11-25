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
      defaultValue: columns
    },
    data: {
      name: 'Data',
      control: {
        type: 'array'
      },
      defaultValue: fakeArray(30)
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
    selected: {
      name: 'Selected ID',
      control: {
        type: 'number'
      },
      defaultValue: 3899513739
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
  <ep-container padding="1rem 2rem">
    <ep-table-new v-bind="args" />
  </ep-container>
  `
})

export const TableNew = Template.bind({})
