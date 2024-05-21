import { paddedBg } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpFooter from '@/components/footer/EpFooter.vue'
import EpSplitButton from '@/components/split-button/EpSplitButton.vue'
import EpTable from '@/components/table/EpTable.vue'
import useExclude from '@/components/table/useExclude.js'
import EpLoadingState from '@/components/loading-state/EpLoadingState.vue'
import { columns, fakeArray } from '../../data/tableData.js'
import { ref, onMounted } from 'vue'

export default {
  title: 'Components/Loading State',
  component: EpLoadingState,
  decorators: [paddedBg],
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
    const splitButtonProps = {
      buttonProps: {
        variant: 'primary',
        label: 'Refresh',
        iconLeft: { name: 'refresh' },
      },
      dropdownProps: {
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
            command: () => {
              messages.value = clearAndFetchConfig
              loading.value = true
            }
          },
          {
            label: 'Destroy & Fetch',
            command: () => {
              messages.value = destroyAndFetchConfig
              loading.value = true
            }
          }
        ]
      }
    }

    const refreshConfig = [
      { icon: 'oval', message: 'Refreshing data…' }
    ]

    const clearAndFetchConfig = [
      { icon: 'oval', message: 'Clearing local data…' },
      { icon: 'oval', message: 'Fetching new data from our servers…' }
    ]

    const destroyAndFetchConfig = [
      { icon: 'oval', message: 'Destroying everything…' },
      { icon: 'oval', message: 'Fetching new data from our servers…' },
      { icon: 'oval', message: 'Considering the repercussions of this action…' }
    ]

    const loading = ref(true)
    const messages = ref(null)
    const tableData = ref(fakeArray(30))
    const columnsRef = ref(columns)

    const {
      includedColumns,
      includedData
    } = useExclude(columnsRef, tableData, ['id'])

    const done = () => {
      loading.value = false
      messages.value = null
      tableData.value = fakeArray(30)
    }

    const refresh = () => {
      messages.value = refreshConfig
      loading.value = true
    }

    // const clearAndFetch = () => {
    //   messages.value = clearAndFetchConfig
    //   loading.value = true
    // }

    // const destroyAndFetch = () => {
    //   messages.value = destroyAndFetchConfig
    //   loading.value = true
    // }

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
      tableData,
      loading,
      messages,
      includedColumns,
      includedData,
      splitButtonProps,
    }
  },
  template: `
    <ep-container
      :styles="{
        '--ep-container-max-width': '120rem',
        '--ep-container-height': '100%',
        '--ep-container-padding': '0 3rem',
        '--ep-container-bg-color': 'var(--interface-surface)',
        '--ep-container-overflow': 'hidden'
      }"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-split-button
            v-bind="splitButtonProps"
            @button-click="refresh"
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
          :columns="includedColumns"
          :data="includedData"
          :style="{ '--ep-table-width': '100%' }"
          calculate-height
          :calculate-height-offset="30"
          sticky-header
          bordered
          striped
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
  messageDelay: 2000
}
