<template>
  <div class="content-container">
    <ep-header>
      <template #left>
        <ep-tabs :items="tabs"></ep-tabs>
      </template>
      <template #right>
        <ep-button kind="secondary" :iconLeft="{ name: 'location' }" label="Alexandrinestad" />
        <ep-button kind="secondary" :iconLeft="{ name: 'calendar' }" label="11/01/2021 – 11/30/2021" />
      </template>
    </ep-header>
    <div style="padding: 0 1.6rem 10rem 1.6rem;">
      <ep-table
        :columns="columns"
        :data="data"
        :exclude="['id']"
        sticky-header
        sortable
        striped
        bordered
      />
    </div>
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpHeader from '@/components/header/EpHeader'
  import EpTable from '@/components/table/EpTable'
  import EpTabs from '@/components/tabs/EpTabs'
  import { columns, fakeArray } from './assetData'

  export default {
    name: 'Assets',
    components: {
      EpButton,
      EpHeader,
      EpTable,
      EpTabs
    },
    data() {
      return {
        columns,
        data: fakeArray(100),
        tabs: [
          { label: 'All Assets' },
          { label: 'Active' },
          { label: 'Inactive' },
          { label: 'Archived'}
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .content-container {
    width: 100%;
    height: fit-content;
    // padding: 4rem;
    background: var(--background-2);
    border-left: 1px solid var(--border-color);
  }
</style>