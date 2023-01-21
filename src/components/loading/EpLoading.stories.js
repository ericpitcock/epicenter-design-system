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
    messages: {
      name: 'Message',
      control: {
        type: 'array'
      },
      defaultValue: refresh
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

const refresh = [
  {
    icon: 'oval',
    message: 'Refreshing data…'
  }
]

const clearAndRefresh = [
  {
    icon: 'oval',
    message: 'Clearing local data…'
  },
  {
    icon: 'oval',
    message: 'Fetching new data from our servers…'
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
      loading: false,
      messages: null
    }
  },
  methods: {
    done() {
      this.loading = false
      this.messages = null
      console.log('done')
    },
    refresh() {
      // load default messages
      this.messages = refresh
      this.loading = true
    },
    extraRefresh() {
      this.messages = clearAndRefresh
      this.loading = true
      // set timeout to stop loading after 5 seconds
      // setTimeout(() => {
      //   this.loading = false
      // }, 5000)
    }
  },
  template: `
    <ep-container
      useHeader
      useFooter
      height="100%"
      padding="1rem 2rem"
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
            label="Clear & Refresh"
            :iconLeft="{ name: 'refresh' }"
          />
        </template>
        <template #right>

        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-loading
          v-show="loading"
          @done="done"
          :messages="messages"
        />
        <ep-table
          :columns="columns"
          :data="fakeArray(7)"
          :exclude="['id']"
        />
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})
