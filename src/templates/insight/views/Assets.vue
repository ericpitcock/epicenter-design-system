<template>
  <div class="assets">
    <ep-header>
      <template #left>
        <ep-tabs :items="tabs" @tab-click="tabClick" />
        <ep-basic-input
          width="50rem"
          height="4rem"
          backgroundColor="var(--background-1)"
          :icon="{ name: 'search' }"
          placeholder='Search (use "quotes" for exact match)'
          @keydown="debounceSearch"
          @clear="debounceSearch"
        />
      </template>
      <template #right>
        <ep-button
          :iconLeft="{ name: 'file' }"
          @click=""
        />
      </template>
    </ep-header>
    <div style="padding: 0 1.6rem 10rem 1.6rem;">
      <ep-table
        :columns="columns"
        :data="data"
        :exclude="['id']"
        :search="search"
        sticky-header
        sortable
        sortDir="asc"
        striped
        bordered
      />
    </div>
  </div>
</template>

<script>
  import EpBasicInput from '@/components/input/EpBasicInput'
  import EpButton from '@/components/button/EpButton'
  import EpHeader from '@/components/header/EpHeader'
  import EpTable from '@/components/table/EpTable'
  import EpTabs from '@/components/tabs/EpTabs'
  import { columns, merged } from './assetData'

  export default {
    name: 'Assets',
    components: {
      EpBasicInput,
      EpButton,
      EpHeader,
      EpTable,
      EpTabs
    },
    data() {
      return {
        columns,
        data: merged,
        search: '',
        debounce: null,
        tabs: [
          { label: 'All Assets' },
          { label: 'Active' },
          { label: 'Inactive' },
          { label: 'Archived'}
        ]
      }
    },
    methods: {
      debounceSearch(event) {
        this.search = ''
        clearTimeout(this.debounce)
        this.debounce = setTimeout(() => {
          this.search = event.target.value
        }, 600)
      },
      tabClick(item, index) {
        if (item.label === 'All Assets') {
          this.search = ''
          return
        }
        this.search = `"${item.label}"`
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>