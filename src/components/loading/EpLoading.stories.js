import { padded } from '@/helpers/decorators'
import EpButton from '@/components/button/EpButton'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpTable from '@/components/table/EpTable'
import EpLoading from './EpLoading.vue'
import { columns, fakeArray } from '@/components/table/data'

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
    borderRadius: {
      name: 'Border Radius',
      control: {
        type: 'text'
      },
      defaultValue: 'var(--border-radius--large)'
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
    }
  }
}

export const Loading = args => ({
  components: {
    EpButton,
    EpContainer,
    EpHeader,
    EpTable,
    EpLoading
  },
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
    },
    refresh() {
      this.loading = true
      // set timeout to stop loading after 5 seconds
      setTimeout(() => {
        this.loading = false
      }, 5000)
    }
  },
  template: `
    <ep-container :useHeader="true" height="100%">
      <template #header>
      <ep-header>
        <template #left>
          <ep-button
            @click="refresh"
            kind="primary"
            label="Refresh"
            :iconLeft="{ name: 'refresh' }"
          />
          <ep-button
            @click="refresh"
            label="Extra Refresh"
            :iconLeft="{ name: 'refresh' }"
          />
        </template>
        <template #right>
          <ep-dropdown v-bind="args" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-loading v-show="loading" @done="done" v-bind="args" />
        <ep-table :columns="columns" :data="fakeArray(7)" :exclude="['id']"  />
      </template>
    </ep-container>
  `
})
