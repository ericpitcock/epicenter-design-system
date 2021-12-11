<template>
  <div class="ep-chart">
    <div id="container"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts'

  export default {
    name: 'EpChart',
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        chart: null,
        chartDefaults: {
          chart:{
            styledMode: true,
          },
          credits: {
            enabled: false
          }
        }
      }
    },
    methods: {
      drawChart() {
        // can dynamically change type with
        // this.chart = Highcharts['stockChart']('container', {
        this.chart = Highcharts.chart('container', this.chartOptions)
      }
    },
    computed: {
      chartOptions() {
        return {
          ...this.chartDefaults,
          ...this.options
        }
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

<style lang="scss" scoped>
  @import '../../../node_modules/highcharts/css/highcharts.css';
  // $colors: (
  //   var(--chart-sequence-00),
  //   var(--chart-sequence-01),
  //   var(--chart-sequence-02),
  //   var(--chart-sequence-03),
  //   var(--chart-sequence-04),
  //   var(--chart-sequence-05),
  //   var(--chart-sequence-06),
  //   var(--chart-sequence-07),
  //   var(--chart-sequence-08),
  //   var(--chart-sequence-09),
  //   var(--chart-sequence-10),
  //   var(--chart-sequence-11),
  //   var(--chart-sequence-12),
  //   var(--chart-sequence-13)
  // );

  // $font-family: 'Inter var', sans-serif;

  // svg {
  //   font-family: $font-family;
  // }

  ::v-deep {
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
    .highcharts-point {
      &.highcharts-color-0 {
        fill: var(--chart-sequence-00);
        stroke: var(--background-2);
      }
      &.highcharts-color-1 {
        fill: var(--chart-sequence-01);
        stroke: var(--background-2);
      }
      &.highcharts-color-2 {
        fill: var(--chart-sequence-02);
        stroke: var(--background-2);
      }
      &.highcharts-color-3 {
        fill: var(--chart-sequence-03);
        stroke: var(--background-2);
      }
      &.highcharts-color-4 {
        fill: var(--chart-sequence-04);
        stroke: var(--background-2);
      }
      &.highcharts-color-5 {
        fill: var(--chart-sequence-05);
        stroke: var(--background-2);
      }
      &.highcharts-color-6 {
        fill: var(--chart-sequence-06);
        stroke: var(--background-2);
      }
      &.highcharts-color-7 {
        fill: var(--chart-sequence-07);
        stroke: var(--background-2);
      }
      &.highcharts-color-8 {
        fill: var(--chart-sequence-08);
        stroke: var(--background-2);
      }
      &.highcharts-color-9 {
        fill: var(--chart-sequence-09);
        stroke: var(--background-2);
      }
      &.highcharts-color-10 {
        fill: var(--chart-sequence-10);
        stroke: var(--background-2);
      }
      &.highcharts-color-11 {
        fill: var(--chart-sequence-11);
        stroke: var(--background-2);
      }
      &.highcharts-color-12 {
        fill: var(--chart-sequence-12);
        stroke: var(--background-2);
      }
      &.highcharts-color-13 {
        fill: var(--chart-sequence-13);
        stroke: var(--background-2);
      }
    }
  }
</style>