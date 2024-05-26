import { paddedBg } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpSplitButton from '@/components/split-button/EpSplitButton.vue'
import EpTable from '@/components/table/EpTable.vue'
import useExclude from '@/components/table/useExclude.js'
import EpLoadingState from '@/components/loading-state/EpLoadingState.vue'
import { columns, fakeArray } from '../../data/tableData.js'
import { computed, ref, onMounted } from 'vue'

export default {
  title: 'Components/Loading State',
  component: EpLoadingState,
  decorators: [paddedBg],
  argTypes: {
    loading: { table: { disable: true } },
    message: {
      name: 'Message',
      control: {
        type: 'array'
      }
    },
    backgroundColor: {
      name: '--ep-loading-state-bg-color',
      control: {
        type: 'color'
      }
    },
    borderRadius: {
      name: '--ep-loading-state-border-radius',
      control: {
        type: 'text'
      }
    },
    styles: { table: { disable: true } }
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
    const loading = ref(true)
    const messages = ref(null)
    const tableData = ref(fakeArray(30))
    const columnsRef = ref(columns)

    const styles = computed(() => {
      return {
        '--ep-loading-state-bg-color': args.backgroundColor,
        '--ep-loading-state-border-radius': args.borderRadius,
        right: '-30px',
        left: '-30px',
      }
    })

    const {
      includedColumns,
      includedData
    } = useExclude(columnsRef, tableData, ['id'])

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
              refresh('clearAndFetch')
            }
          },
          {
            label: 'Destroy & Fetch',
            onClick: () => {
              refresh('destroyAndFetch')
            }
          }
        ]
      }
    }

    const refreshStates = {
      refresh: [
        { icon: 'oval', message: 'Refreshing data…' }
      ],
      clearAndFetch: [
        { icon: 'oval', message: 'Clearing local data…' },
        { icon: 'oval', message: 'Fetching new data from our servers…' }
      ],
      destroyAndFetch: [
        { icon: 'oval', message: 'Destroying everything…' },
        { icon: 'oval', message: 'Fetching new data from our servers…' },
        { icon: 'oval', message: 'Considering the repercussions of this action…' }
      ]
    }

    const refresh = (state) => {
      messages.value = refreshStates[state]
      loading.value = true
      cycleMessages()
    }

    const done = () => {
      loading.value = false
      messages.value = null
      // fake refresh data
      tableData.value = fakeArray(30)
    }

    const currentMessage = ref({ icon: '', message: 'Loading...' })

    const cycleMessages = (index = 0) => {
      if (!messages.value || messages.value.length === 0) return

      currentMessage.value = messages.value[index]
      const nextIndex = (index + 1) % messages.value.length

      // if it's the last message, wait for the message delay and then call done
      if (nextIndex === 0) {
        setTimeout(() => {
          done()
        }, 2000)
      }

      setTimeout(() => {
        cycleMessages(nextIndex)
      }, 2000)
    }

    onMounted(() => {
      refresh('refresh')
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
      currentMessage,
      styles
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
            @button-click="refresh('refresh')"
          />
        </template>
        <template #right>
        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-loading-state
          v-bind="args"
          :message="currentMessage"
          :loading
          @done="done"
          :styles="styles"
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
}
