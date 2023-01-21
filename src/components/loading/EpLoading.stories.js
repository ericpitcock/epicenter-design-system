import { padded } from '@/helpers/decorators'
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
    message: ''
  }
]

export const Loading = args => ({
  components: {
    EpContainer,
    EpHeader,
    EpFooter,
    EpSplitButton,
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
      height="100%"
      padding="1rem 2rem"
      overflow="hidden"
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
        <template #right></template>
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
