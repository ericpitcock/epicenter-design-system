<template>
  <div class="assets">
    <ep-header>
      <template #left>
        <ep-tabs :items="tabs"></ep-tabs>
      </template>
      <template #right>
        <ep-basic-input
          width="30rem"
          :icon="{ name: 'search' }"
          placeholder="Search"
          @keydown="debounceSearch"
          @clear="debounceSearch"
        />
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
      runSearch(event) {
        // debounce search
      },
      debounceSearch(event) {
        this.search = ''
        // this.typing = 'You are typing'
        clearTimeout(this.debounce)
        this.debounce = setTimeout(() => {
          this.search = event.target.value
          // this.typing = null
          // this.message = event.target.value
        }, 600)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-container {
    // width: 100%;
    // height: fit-content;
    // // padding: 4rem;
    // background: var(--background-2);
    // border-left: 1px solid var(--border-color);
  }
</style>