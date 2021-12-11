<template>
  <div id="ep-chart"></div>
</template>

<script>
  import Highcharts from 'highcharts'

  export default {
    name: 'EpChart',
    props: {
      options: {
        type: Object,
        default: () => ({})
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
          },
          title: {
            text: undefined
          },
          tooltip: {
            enabled: false
          }
        }
      }
    },
    methods: {
      drawChart() {
        // can dynamically change type with
        // this.chart = Highcharts['stockChart']('container', {
        this.chart = Highcharts.chart('ep-chart', this.chartOptions)
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

<style lang="scss">
  $colors: (
    var(--chart-sequence-00),
    var(--chart-sequence-01),
    var(--chart-sequence-02),
    var(--chart-sequence-03),
    var(--chart-sequence-04),
    var(--chart-sequence-05),
    var(--chart-sequence-06),
    var(--chart-sequence-07),
    var(--chart-sequence-08),
    var(--chart-sequence-09),
    var(--chart-sequence-10),
    var(--chart-sequence-11),
    var(--chart-sequence-12),
    var(--chart-sequence-13)
  );
  
  $background-color: var(--background-2);

  $tooltip-background: var(--background-2);
  // $tooltip-border: var(--border-color--lighter);

  $font-family: 'Inter var', sans-serif;
  $title-font-size: var(--font-size--default);
  $subtitle-font-size: var(--font-size--default);
  $legend-font-size: var(--font-size--default);
  $axis-labels-font-size: var(--font-size--default);

  @import '../../../node_modules/highcharts/css/highcharts.scss';

  .highcharts-container {
    font-family: $font-family;
    font-size: var(--font-size--default);
    * {
      font-family: inherit;
      font-size: inherit;
    }
    text {
      fill: var(--text-color);
    }
    .highcharts-halo {
      fill-opacity: 0;
    }
  }
  
</style>