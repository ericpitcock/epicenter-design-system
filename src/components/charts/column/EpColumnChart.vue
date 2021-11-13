<template>
  <div>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
  import { Chart, registerables } from 'chart.js'
  Chart.register(...registerables)
  
  export default {
    name: 'EpColumnChart',
    props: {
      // data: {
      //   type: Array,
      //   required: true
      // },
      // options: {
      //   type: Object,
      //   required: true
      // }
    },
    data () {
      return {
        chart: null,
        data: [{
          id: 'Sales',
          nested: {
            value: 1500
          }},
          {
          id: 'Purchases',
          nested: {
            value: 500
          }
        }],
        options: {
          parsing: {
            xAxisKey: 'id',
            yAxisKey: 'nested.value'
        }
        }
      }
    },
    mounted () {
      this.chart = new Chart(this.$refs.myChart, {
        type: 'bar',
        data: {
          labels: this.data.map(item => item.id),
          datasets: [{
            label: '# of Votes',
            data: this.data.map(item => item.nested.value),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: this.options
      })
    },
    beforeDestroy () {
      this.chart.destroy()
    }
  }
</script>

<style lang="scss" scoped>

</style>