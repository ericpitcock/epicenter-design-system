<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts/highstock'

  export default {
    data() {
      return {
        chart: null
      }
    },
    props: {
      options: {
        type: Object,
        required: true
      },
      extremes: {
        type: Object,
        default: null
      }
    },
    watch: {
      // this is creating an infinite loop in storybook - investigate
      // options: {
      //   handler() {
      //     this.chart.destroy()
      //     this.drawChart()
      //     if (this.extremes) this.chart.xAxis[0].setExtremes(this.extremes.min, this.extremes.max)
      //   },
      //   deep: true
      // }
    },
    methods: {
      drawChart() {
        // can dynamically change type with
        // this.chart = Highcharts['stockChart']('container', {
        this.chart = Highcharts.stockChart('container', this.options)
      }
    },
    mounted() {
      this.drawChart()
      // can set extremes this way
      if (this.extremes) this.chart.xAxis[0].setExtremes(this.extremes.min, this.extremes.max)
    },
    beforeDestroy() {
      this.chart.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  #container {
    height: 400px; 
  }
</style>