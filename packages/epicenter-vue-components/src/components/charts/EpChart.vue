<template>
  <div :id="chartId" />
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
      chartColors: {
        type: Array,
        default: () => []
      }
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
        },
        chartId: `chart-${Math.random().toString(36).substring(7)}`
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
    beforeUnmount() {
      this.chart.destroy()
    },
    methods: {
      drawChart() {
        this.chart = Highcharts.chart(this.chartId, this.chartOptions)
      }
    }
  }
</script>
