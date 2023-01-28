<template>
  <div class="assets">
    <ep-header>
      <template #left>
        <ep-tabs :items="tabs"></ep-tabs>
      </template>
      <template #right>
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
  import { columns, merged } from './assetData'

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
        data: merged,
        tabs: [
          { label: 'All Assets' },
          { label: 'Active' },
          { label: 'Inactive' },
          { label: 'Archived'}
        ]
      }
    },
    methods: {
      // function to find the highest total in data.vulnerabilities array
      // then return the highest total index
      findHighestVulnerabilityIndex() {
        const totals = this.data.map((asset) => {
          return asset.vulnerabilities.reduce((acc, curr) => {
            return acc + curr.total
          }, 0)
        })
        return totals.indexOf(Math.max(...totals))
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