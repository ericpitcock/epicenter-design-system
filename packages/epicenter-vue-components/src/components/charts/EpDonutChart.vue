<template>
  <div id="app">
    <div id="chart" />
  </div>
</template>

<script>
  import * as d3 from 'd3'

  export default {
    name: 'EpDonutChart',
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.drawChart()
    },
    methods: {
      drawChart() {
        // Set up the data
        var data = [20, 30, 40, 50]
        var labels = ["Label 1", "Label 2", "Label 3", "Label 4"]
        var total = d3.sum(data)

        // Set up the dimensions and margins of the chart
        var width = 200
        var height = 200
        var margin = 10

        // Calculate the radius of the chart
        var radius = Math.min(width, height) / 2 - margin

        // Select the SVG element and set its dimensions
        var svg = d3.select("#chart")
          .append("svg")
          .attr("width", width)
          .attr("height", height)

        // Create a group element for the chart
        var g = svg.append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

        // Set up the color scale
        var color = d3.scaleOrdinal()
          .range(["#FF6384", "#36A2EB", "#FFCE56", "#33FF99"])

        // Set up the arc generator
        var arc = d3.arc()
          .innerRadius(radius - 20)
          .outerRadius(radius)

        // Set up the pie generator
        var pie = d3.pie()
          .sort(null)
          .value(function (d) { return d })

        // Generate the arcs
        var arcs = g.selectAll("arc")
          .data(pie(data))
          .enter()
          .append("g")
          .attr("class", "arc")

        // Draw the paths for the arcs
        arcs.append("path")
          .attr("d", arc)
          .attr("fill", function (d) { return color(d.data) })

        // Add the labels to the arcs
        arcs.append("text")
          .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")" })
          .attr("text-anchor", "middle")
          .text(function (d, i) { return labels[i] })

        // Add the total value to the center of the chart
        g.append("text")
          .attr("text-anchor", "middle")
          .text(total)

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
