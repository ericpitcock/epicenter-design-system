import { onMounted, ref } from 'vue'

import EpContainer from '@/components/container/EpContainer.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpLoadingState from '@/components/loading-state/EpLoadingState.vue'
import EpSplitButton from '@/components/split-button/EpSplitButton.vue'
import EpTable from '@/components/table/EpTable.vue'
import EpTableHead from '@/components/table/EpTableHead.vue'
import useExclude from '@/components/table/useExclude.js'

import { columns, fakeTableData } from '../../data/tableData.js'
import { paddedBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Loading State',
  component: EpLoadingState,
  decorators: [paddedBg],
  argTypes: {
    message: {
      name: 'Message',
      control: {
        type: 'array'
      }
    },
  }
}

export const LoadingState = args => ({
  components: {
    EpContainer,
    EpHeader,
    EpSplitButton,
    EpTable,
    EpTableHead,
    EpLoadingState,
  },
  setup() {
    const loading = ref(true)
    const messages = ref(null)
    const tableData = ref(fakeTableData(30))
    const columnsRef = ref(columns)

    const {
      includedColumns,
      includedData
    } = useExclude(columnsRef, tableData, ['id'])

    const splitButtonProps = {
      buttonProps: {
        label: 'Refresh',
        iconLeft: { name: 'refresh' },
        class: 'ep-button-var--primary',
      },
      dropdownProps: {
        buttonProps: {
          label: '',
          ariaLabel: 'Refresh',
          class: 'ep-button-var--primary',
        },
        menuClass: 'ep-menu-default',
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
      tableData.value = fakeTableData(30)
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
      fakeTableData,
      done,
      refresh,
      tableData,
      loading,
      messages,
      includedColumns,
      includedData,
      splitButtonProps,
      currentMessage,
    }
  },
  template: `
    <ep-container
      class="ep-container-default ep-container--sticky-header ep-container--framed"
      style="--ep-container-framed-offset: 60px; --ep-container-content-padding: 0 0 10rem 0;"
    >
      <template #header>
      <ep-header :style="{ '--ep-header-container-overflow': 'visible' }">
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
        <transition name="fade" mode="out-in">
          <ep-loading-state
            v-if="loading"
            v-bind="args"
            :message="currentMessage"
            :loading
            @done="done"
          />
          <ep-table
            v-else
            :columns="includedColumns"
            :data="includedData"
            :style="{
              '--ep-table-container-overflow': 'unset',
              '--ep-table-width': '100%',
              '--ep-table-sticky-top': '61px',
            }"
            sticky-header
            bordered
            striped
          >
            <template #thead="{ visibleColumns }">
              <ep-table-head :columns="visibleColumns" />
            </template>
          </ep-table>
        </transition>
      </template>
    </ep-container>
  `
})
