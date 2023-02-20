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
      },
      chartColors: []
    },
    data() {
      return {
        chart: null,
        chartDefaults: {
          chart: {
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
