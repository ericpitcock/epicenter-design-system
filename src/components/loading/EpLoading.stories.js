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
        { 
          icon: 'oval', 
          message: 'Downloading the entire internet…'
        },
        { 
          icon: 'bars', 
          message: 'Rearranging things…'
        },
        { 
          icon: null, 
          message: 'Refreshing the data in our system…'
        },
        { 
          icon: null, 
          message: 'Finishing up…'
        }
      ]
    },
    messageDelay: {
      name: 'Message Delay (ms)',
      control: {
        type: 'number'
      },
      defaultValue: 2000
    },
  }
}

export const Loading = args => ({
  components: { EpContainer, EpTable, EpLoading },
  setup() {
    return { args, columns, fakeArray }
  },
  data() {
    return {
      loading: args.loading
    }
  },
  methods: {
    done() {
      this.loading = false
      console.log('done')
    }
  },
  template: `
    <ep-container width="fit-content" height="fit-content" padding="0.4rem 2rem 2rem">
      <ep-loading v-show="loading" @done="done" v-bind="args" />
      <ep-table :columns="columns" :data="fakeArray(7)" :exclude="['id']"  />
    </ep-container>
  `
})
