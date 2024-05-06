import { padded } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpFooter from '@/components/footer/EpFooter.vue'
import EpSplitButton from '@/components/split-button/EpSplitButton.vue'
import EpTable from '@/components/table/EpTable.vue'
import EpLoadingState from '@/components/loading-state/EpLoadingState.vue'
import { columns, fakeArray } from '../../data/tableData.js'
import { ref, onMounted } from 'vue'

export default {
  title: 'Components/Loading State',
  component: EpLoadingState,
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

export const LoadingState = args => ({
  components: {
    EpContainer,
    EpHeader,
    EpFooter,
    EpSplitButton,
    EpTable,
    EpLoadingState
  },
  setup() {
    const refreshConfig = [
      {
        icon: 'oval',
        message: 'Refreshing data…'
      }
    ]

    const clearAndFetchConfig = [
      {
        icon: 'oval',
        message: 'Clearing local data…'
      },
      {
        icon: 'oval',
        message: 'Fetching new data from our servers…'
      }
    ]

    const destroyAndFetchConfig = [
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

    const loading = ref(true)
    const messages = ref(null)
    const tableData = ref(fakeArray(30))

    const done = () => {
      loading.value = false
      messages.value = null
      tableData.value = fakeArray(30)
    }

    const refresh = () => {
      messages.value = refreshConfig
      loading.value = true
    }

    const clearAndFetch = () => {
      messages.value = clearAndFetchConfig
      loading.value = true
    }

    const destroyAndFetch = () => {
      messages.value = destroyAndFetchConfig
      loading.value = true
    }

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 2000)
    })

    return {
      args,
      columns,
      fakeArray,
      done,
      refresh,
      clearAndFetch,
      destroyAndFetch,
      tableData,
      loading,
      messages
    }
  },
  template: `
    <ep-container
      max-width="120rem"
      height="100%"
      container-padding="0 3rem"
      overflow="hidden"
      background-color="var(--interface-surface)"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-split-button
            :buttonProps="{
              variant: 'primary',
              label: 'Refresh',
              iconLeft: { name: 'refresh' },
              command: () => refresh()
            }"
            :dropdownProps="{
              buttonProps: {
                variant: 'primary',
                label: ''
              },
              containerProps: {
                backgroundColor: 'var(--interface-overlay)',
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
        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-loading-state
          v-bind="args"
          :messages="messages"
          v-show="loading"
          @done="done"
        />
        <ep-table
          :columns="columns"
          :data="tableData"
          :exclude="['id']"
          width="100%"
          sticky-header
          calculate-height
          :calculate-height-offset="81"
          bordered
          sortable
          striped
          padding="0 0 10rem 0"
        />
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

LoadingState.args = {
  backgroundColor: 'var(--interface-surface)',
  borderRadius: 'var(--border-radius--large)',
  // messages: messages,
  messageDelay: 2000
}
