import ArrowDown01 from '@ericpitcock/epicenter-icons/icons/ArrowDown01'
import Refresh01 from '@ericpitcock/epicenter-icons/icons/Refresh01'
import { onMounted, ref } from 'vue'

import EpButton from '@/components/button/EpButton.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpLoadingState from '@/components/loading-state/EpLoadingState.vue'
import EpMenu from '@/components/menu/EpMenu.vue'
import EpMenuItem from '@/components/menu/EpMenuItem.vue'
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
    ArrowDown01,
    EpButton,
    EpContainer,
    EpDropdown,
    EpHeader,
    EpMenu,
    EpMenuItem,
    EpTable,
    EpTableHead,
    EpLoadingState,
    Refresh01,
  },
  setup() {
    const loading = ref(true)
    const messages = ref(null)
    const tableData = ref(fakeTableData(30))
    const columnsRef = ref(columns)
    const openState = ref(false)

    const {
      includedColumns,
      includedData
    } = useExclude(columnsRef, tableData, ['id'])

    const menuItems = [
      { type: 'item', label: 'Clear & Fetch' },
      { type: 'item', label: 'Destroy & Fetch' }
    ]

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
      openState.value = false
    }

    const onMenuSelect = (item) => {
      if (item.label === 'Clear & Fetch') {
        refresh('clearAndFetch')
      } else if (item.label === 'Destroy & Fetch') {
        refresh('destroyAndFetch')
      }
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
      currentMessage,
      openState,
      menuItems,
      onMenuSelect,
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
          <div class="ep-split-button">
            <ep-button
              class="ep-button-var--primary"
              @click="refresh('refresh')"
            >
              <template #icon-left>
                <Refresh01 />
              </template>
              Refresh
            </ep-button>
            <ep-dropdown v-model:open="openState">
              <template #trigger="{ attrs, on }">
                <ep-button
                  v-bind="attrs"
                  v-on="on"
                  class="ep-button-var--primary"
                >
                  <template #icon-left>
                    <ArrowDown01 />
                  </template>
                </ep-button>
              </template>

              <template #content="{ close }">
                <ep-menu>
                  <template v-for="(item, index) in menuItems" :key="index">
                    <ep-menu-item :type="item.type">
                      <ep-button
                        v-if="item.type === 'item'"
                        class="ep-button--menu-item"
                        @click="() => { onMenuSelect(item); close() }"
                      >
                        {{ item.label }}
                      </ep-button>
                      <template v-else>{{ item.label }}</template>
                    </ep-menu-item>
                  </template>
                </ep-menu>
              </template>
            </ep-dropdown>
          </div>
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
