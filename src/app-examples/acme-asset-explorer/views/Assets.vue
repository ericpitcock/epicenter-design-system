<template>
  <div class="assets">
    <ep-header
      leftFlex="0 0 10rem"
      centerFlex="1"
      rightFlex="0 0 10rem"
    >
      <template #left>
        <p class="text--subtle">{{ assetCount }} assets</p>
      </template>
      <template #center>
        <ep-multi-search
          height="4rem"
          backgroundColor="var(--background-1)"
          :icon="{ name: 'search' }"
          placeholder='Multi Search - Hit enter to add to search'
          @enter="updateSearch"
          @delete="updateSearch"
          @query-close="queryClose"
          @clear="updateSearch"
        />
      </template>
      <template #right>
        <ep-button
          kind="ghost"
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
        searchable
        @data-changed="handleDataChanged"
      />
    </div>
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpHeader from '@/components/header/EpHeader'
  import EpMultiSearch from '@/components/input/EpMultiSearch'
  import EpTable from '@/components/table/EpTable'
  import { columns, merged } from './assetData'

  export default {
    name: 'Assets',
    components: {
      EpButton,
      EpHeader,
      EpMultiSearch,
      EpTable
    },
    data() {
      return {
        assetCount: merged.length,
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
      handleDataChanged(data) {
        this.assetCount = data.length
      },
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
      updateSearch(value) {
        // update search array
        this.search = value
      },
      queryClose(query) {
        console.log('queryClose', query)
        // remove query from search array
        this.search = this.search.filter(item => item !== query)
      },
      queryDelete(query) {
        console.log('queryDelete', query)
        // remove query from search array
        this.search = query
      },
      tabClick(item, index) {
        if (item.label === 'All Assets') {
          this.search = []
          return
        }
        // add item.label to search array while removing any existing tabs
        this.search = this.search.filter(item => item !== 'All Assets' && item !== 'Active' && item !== 'Inactive' && item !== 'Archived')
        this.search.push(item.label)
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