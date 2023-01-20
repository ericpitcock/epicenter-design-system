import { padded } from '@/helpers/decorators'
import EpButton from '@/components/button/EpButton'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
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
      defaultValue: false
    },
    messages: {
      name: 'Message',
      control: {
        type: 'array'
      },
      defaultValue: defaultMessage
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

const defaultMessage = [
  {
    icon: 'oval',
    message: 'Loading…'
  }
]

const extra = [
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

export const Loading = args => ({
  components: {
    EpButton,
    EpContainer,
    EpHeader,
    EpFooter,
    EpTable,
    EpLoading
  },
  setup() {
    return { args, columns, fakeArray }
  },
  data() {
    return {
      loading: args.loading,
      messages: args.messages
    }
  },
  methods: {
    done() {
      this.loading = false
      console.log('done')
    },
    refresh() {
      // load default messages
      args.messages = defaultMessage
      this.loading = true
    },
    extraRefresh() {
      args.messages = extra
      this.loading = true
      // set timeout to stop loading after 5 seconds
      setTimeout(() => {
        this.loading = false
      }, 5000)
    }
  },
  template: `
    <ep-container
      useHeader
      useFooter
      height="100%"
      overflow="hidden"
    >
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
            @click="extraRefresh"
            label="Extra Refresh"
            :iconLeft="{ name: 'refresh' }"
          />
        </template>
        <template #right>

        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-loading v-show="loading" @done="done" v-bind="args" />
        <ep-table :columns="columns" :data="fakeArray(7)" :exclude="['id']"  />
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})
