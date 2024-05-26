import { paddedBg } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpSplitButton from '@/components/split-button/EpSplitButton.vue'
import EpTable from '@/components/table/EpTable.vue'
import useExclude from '@/components/table/useExclude.js'
import EpLoadingState from '@/components/loading-state/EpLoadingState.vue'
import { columns, fakeArray } from '../../data/tableData.js'
import { ref, onMounted, watch } from 'vue'

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
            onClick: () => {
              messages.value = clearAndFetchConfig
            }
          },
          {
            label: 'Destroy & Fetch',
            onClick: () => {
              messages.value = destroyAndFetchConfig
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
    }

    watch(messages, (newVal, oldVal) => {
      if (newVal && newVal !== oldVal) {
        loading.value = true
      }
    })

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
        '--ep-container-overflow': 'auto'
      }"
    >
      <template #header>
      <ep-header :styles="{ '--ep-header-container-overflow': 'visible' }">
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
          :messages
          :loading
          @done="done"
          style="left: -30px; right: -30px;"
        />
        <ep-table
          :columns="includedColumns"
          :data="includedData"
          :style="{
            '--ep-table-container-overflow': 'unset',
            '--ep-table-width': '100%'
          }"
          calculate-height
          :calculate-height-offset="30"
          sticky-header
          bordered
          striped
        />
      </template>
    </ep-container>
  `
})

LoadingState.args = {
  backgroundColor: 'var(--interface-surface)',
  borderRadius: 'none',
  messageDelay: 2000
}
