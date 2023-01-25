import { padded } from '@/helpers/decorators'
import EpContainer from '@/components/container/EpContainer'
import EpFlexContainer from '@/components/flexbox/EpFlexContainer'
import EpBadge from './EpBadge'
import EpTable from '@/components/table/EpTable'
import { h } from 'vue'

export default {
  title: 'Components/Badge',
  component: EpBadge,
  decorators: [padded],
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      },
      defaultValue: 'Subscribed',
    },
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'text',
      },
      defaultValue: 'var(--background-4)'
    },
    borderColor: {
      name: 'Border Color',
      control: {
        type: 'text',
      },
      defaultValue: 'var(--border-color--lighter)'
    },
    textColor: {
      name: 'Text Color',
      control: {
        type: 'text',
      },
      defaultValue: 'var(--text-color)'
    },
    uppercase: {
      name: 'Uppercase',
      control: {
        type: 'boolean',
      },
      defaultValue: false
    }
  }
}

const columns = [
  {
    header: 'Date',
    key: 'start_date',
    formatter: value => {
      return value.split('T')[0].replaceAll('-', '/')
    },
    command: () => {
      console.log('click')
    }
  },
  {
    header: 'Name',
    key: 'name'
  },
  {
    header: 'Status',
    key: 'status'
  },
  {
    header: 'Actions',
    key: 'component',
    // use vue component as cell
    command: value => {
      return h(EpBadge, {
        props: {
          label: value,
          // backgroundColor: 'var(--background-4)',
          // borderColor: 'var(--border-color--lighter)',
          // textColor: 'var(--text-color)',
          // uppercase: false
        }
      })
    }
  }
]

const data = [
  {
    start_date: '2021-01-01T00:00:00.000Z',
    name: 'John Doe',
    status: 'Subscribed',
    component: 'Click'
  },
  {
    start_date: '2021-01-01T00:00:00.000Z',
    name: 'Jane Doe',
    status: 'Subscribed',
    component: 'Click'
  },
  {
    start_date: '2021-01-01T00:00:00.000Z',
    name: 'John Doe',
    status: 'Subscribed',
    component: 'Click'
  },
]

const Template = args => ({
  components: {
    EpBadge,
    EpContainer,
    EpFlexContainer,
    EpTable
  },
  setup() {
    return { args, columns, data }
  },
  template: `
  <ep-container width="30rem" height="50rem">
    <ep-flex-container
      flex-flow="column nowrap"
      align-items="center"
      justify-content="center"
      gap="2rem"
    >
      <ep-badge v-bind="args" />
    </ep-flex-container>
  </ep-container>
  `
})

export const Badge = Template.bind({})
