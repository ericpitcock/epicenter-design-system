<template>
  <div class="vulnerabilities">
    <ep-header height="5.1rem" padding="0" borderWidth="1px">
      <template #left>
        <h1 class="font-size--large">Vulnerabilities</h1>
      </template>
      <template #right>
        date range picker
      </template>
    </ep-header>
    <ep-chart
      :options="vulnChartOptions"
      :chartColors="null"
    />
  </div>
</template>

<script>
  import vulnChartOptions from './vulnChartOptions'
  import EpChart from '@/components/charts/EpChart'
  import EpHeader from '@/components/header/EpHeader'

  export default {
    name: 'Vulnerabilities',
    components: {
      EpChart,
      EpHeader
    },
    data() {
      return {
        vulnChartOptions
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vulnerabilities {
    padding: 3rem;
    // give every child element a margin-top of 3rem except the first child
    > * {
      margin-top: 3rem;
      &:first-child {
        margin-top: 0;
      }
    }
  }
</style>