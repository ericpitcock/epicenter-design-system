<template>
  <div class="assets">
    <ep-header>
      <template #left>
        <ep-tabs :items="tabs" @tab-click="tabClick" />
        <ep-multi-search
          width="50rem"
          height="4rem"
          backgroundColor="var(--background-1)"
          :icon="{ name: 'search' }"
          placeholder='Search (use "quotes" for exact match)'
          @enter="debounceSearch"
          @clear=""
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
  import EpButton from '@/components/button/EpButton'
  import EpHeader from '@/components/header/EpHeader'
  import EpMultiSearch from '@/components/input/EpMultiSearch'
  import EpTable from '@/components/table/EpTable'
  import EpTabs from '@/components/tabs/EpTabs'
  import { columns, merged } from './assetData'

  export default {
    name: 'Assets',
    components: {
      EpButton,
      EpHeader,
      EpMultiSearch,
      EpTable,
      EpTabs
    },
    data() {
      return {
        columns,
        data: merged,
        search: [],
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
      debounceSearch(value) {
        console.log('debounceSearch', value)
        // add value to search array
        this.search.push(value)
        // this.search = ''
        // clearTimeout(this.debounce)
        // this.debounce = setTimeout(() => {
        //   // this.search = event.target.value
        //   // add to search array
        //   this.search.push(event.target.value)
        // }, 600)
      },
      tabClick(item, index) {
        if (item.label === 'All Assets') {
          this.search = ''
          return
        }
        this.search.push(`"${item.label}"`)
      }
    },
    // watch: {
    //   search() {
    //     console.log(this.search)
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
</style>