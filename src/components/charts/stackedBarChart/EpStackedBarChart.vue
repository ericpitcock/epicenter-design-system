<template>
  <div id="container"></div>
</template>

<script>
  import Highcharts from 'highcharts'

  export default {
    name: 'StackedBarChart',
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        chart: null
      }
    },
    methods: {
      drawChart() {
        // can dynamically change type with
        // this.chart = Highcharts['stockChart']('container', {
        this.chart = Highcharts.chart('container', this.options)
      }
    },
    mounted() {
      this.drawChart()
    },
    beforeDestroy() {
      this.chart.destroy()
    }
  }
</script>

<style lang="scss">
  @import '../../../../node_modules/highcharts/css/highcharts.css';
  
  .highcharts-axis-labels,
  .highcharts-axis-title,
  .highcharts-legend-item > text {
    fill: var(--text-color);
  }
  .highcharts-container {
    font-family: inherit;
    font-size: var(--font-size--default);
  }
  .highcharts-background {
    fill: transparent;
  }
  .highcharts-axis-line,
  .highcharts-grid-line {
    fill: none;
    stroke: var(--border-color);
  }
  .highcharts-color-0 {
    fill: var(--chart-sequence-00) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-1 {
    fill: var(--chart-sequence-01) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-2 {
    fill: var(--chart-sequence-02) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-3 {
    fill: var(--chart-sequence-03) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-4 {
    fill: var(--chart-sequence-04) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-5 {
    fill: var(--chart-sequence-05) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-6 {
    fill: var(--chart-sequence-06) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-7 {
    fill: var(--chart-sequence-07) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-8 {
    fill: var(--chart-sequence-08) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-9 {
    fill: var(--chart-sequence-09) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-10 {
    fill: var(--chart-sequence-10) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-11 {
    fill: var(--chart-sequence-11) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-12 {
    fill: var(--chart-sequence-12) !important;
    stroke: var(--background-2) !important;
  }
  .highcharts-color-13 {
    fill: var(--chart-sequence-13) !important;
    stroke: var(--background-2) !important;
  }
  // .highcharts-figure,
  // .highcharts-data-table table {
  //   min-width: 310px;
  //   max-width: 800px;
  //   margin: 1em auto;
  // }

  // #container {
  //   height: 400px;
  // }

  // .highcharts-data-table table {
  //   border-collapse: collapse;
  //   border: 1px solid #ebebeb;
  //   margin: 10px auto;
  //   text-align: center;
  //   width: 100%;
  //   max-width: 500px;
  // }

  // .highcharts-data-table caption {
  //   padding: 1em 0;
  //   font-size: 1.2em;
  //   color: #555;
  // }

  // .highcharts-data-table th {
  //   font-weight: 600;
  //   padding: 0.5em;
  // }

  // .highcharts-data-table td,
  // .highcharts-data-table th,
  // .highcharts-data-table caption {
  //   padding: 0.5em;
  // }

  // .highcharts-data-table thead tr,
  // .highcharts-data-table tr:nth-child(even) {
  //   background: #f8f8f8;
  // }

  // .highcharts-data-table tr:hover {
  //   background: #f1f7ff;
  // }
</style>