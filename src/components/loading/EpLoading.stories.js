import { padded } from '@/helpers/decorators'
import EpContainer from '@/components/container/EpContainer'
import EpTable from '@/components/table/EpTable'
import EpLoading from './EpLoading.vue'
import { columns, fakeArray } from '../table/data'

export default {
  title: 'Components/Loading',
  component: EpLoading,
  decorators: [padded],
  argTypes: {
    backgroundColor: {
      name: 'Background Color',
      control: {
        type: 'text'
      },
      defaultValue: 'var(--overlay-color)'
    },
    loading: {
      name: 'Loading',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    },
    messages: {
      name: 'Message',
      control: {
        type: 'array'
      },
      defaultValue: [
        'Downloading the internet…',
        'Rearranging things…',
        'Refreshing the data in our system…',
        'Finishing up…'
      ]
    }
  }
}

const Template = args => ({
  components: { EpContainer, EpTable, EpLoading },
  setup() {
    return { args, columns, fakeArray }
  },
  template: `
    <ep-container width="fit-content" height="fit-content" padding="0.4rem 2rem 2rem">
      <ep-table :columns="columns" :data="fakeArray(7)" :exclude="['id']"  />
      <ep-loading v-if="args.loading" v-bind="args" />
    </ep-container>
  `
})

export const Loading = Template.bind({})
