import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'
import EpSplitButton from '@/components/split-button/EpSplitButton'
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
      }
    },
    borderRadius: {
      name: 'Border Radius',
      control: {
        type: 'text'
      }
    },
    messages: {
      name: 'Message',
      control: {
        type: 'array'
      }
    },
    messageDelay: {
      name: 'Message Delay (ms)',
      control: {
        type: 'number'
      }
    }
  }
}

const refresh = [
  {
    icon: 'oval',
    message: 'Refreshing data…'
  }
]

const clearAndFetch = [
  {
    icon: 'oval',
    message: 'Clearing local data…'
  },
  {
    icon: 'oval',
    message: 'Fetching new data from our servers…'
  }
]

const destroyAndFetch = [
  {
    icon: 'oval',
    message: 'Destroying everything…'
  },
  {
    icon: 'oval',
    message: 'Fetching new data from our servers…'
  },
  {
    icon: 'oval',
    message: 'Considering the repercussions of this action…'
  }
]

export const Loading = args => ({
  components: {
    EpActionBar,
    EpContainer,
    EpHeader,
    EpFooter,
    EpSplitButton,
    EpTable,
    EpLoading
  },
  setup() {
    return {
      args,
      commonActionBarArgs,
      columns,
      fakeArray
    }
  },
  data() {
    return {
      loading: false,
      messages: null,
      tableData: this.fakeArray(7)
    }
  },
  methods: {
    done() {
      this.loading = false
      this.messages = null
      console.log('done')
    },
    refresh() {
      this.messages = refresh
      this.loading = true
    },
    clearAndFetch() {
      this.messages = clearAndFetch
      this.loading = true
    },
    destroyAndFetch() {
      this.messages = destroyAndFetch
      this.loading = true
    }
  },
  template: `
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      padding="0 2rem"
      overflow="auto"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-split-button
            :buttonProps="{
              kind: 'primary',
              label: 'Refresh',
              iconLeft: { name: 'refresh' },
              command: () => refresh()
            }"
            :dropdownProps="{
              button: {
                kind: 'primary',
                label: ''
              },
              containerProps: {
                backgroundColor: 'var(--background-4)',
                padding: '1rem 0',
                borderRadius: 'var(--border-radius)',
                borderColor: 'var(--border-color--lighter)',
              },
              menuItems: [
                {
                  label: 'Clear & Fetch',
                  command: () => clearAndFetch()
                },
                {
                  label: 'Destroy & Fetch',
                  command: () => destroyAndFetch()
                }
              ]
            }"
          />
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
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
          v-show="!loading"
          :columns="columns"
          :data="fakeArray(50)"
          :exclude="['id']"
          stickyHeader
        />
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

Loading.args = {
  backgroundColor: 'var(--overlay-color)',
  borderRadius: 'var(--border-radius--large)',
  messages: refresh,
  messageDelay: 2000
}
