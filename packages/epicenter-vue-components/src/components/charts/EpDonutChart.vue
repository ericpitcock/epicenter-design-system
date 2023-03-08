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
        var labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4']
        var total = d3.sum(data)

        // Set up the dimensions and margins of the chart
        var width = 200
        var height = 200
        var margin = 10

        // Calculate the radius of the chart
        var radius = Math.min(width, height) / 2 - margin

        // Select the SVG element and set its dimensions
        var svg = d3.select('#chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)

        // Create a group element for the chart
        var g = svg.append('g')
          .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

        // Set up the color scale
        var color = d3.scaleOrdinal()
          .range(['var(--chart-sequence-1)', 'var(--chart-sequence-2)', 'var(--chart-sequence-3)', 'var(--chart-sequence-4)'])

        // Set up the arc generator
        var arc = d3.arc()
          .innerRadius(radius - 26)
          .outerRadius(radius)

        // Set up the pie generator
        var pie = d3.pie()
          .sort(null)
          .value(function (d) { return d })

        // Generate the arcs
        var arcs = g.selectAll('arc')
          .data(pie(data))
          .enter()
          .append('g')
          .attr('class', 'arc')

        // Draw the paths for the arcs
        arcs.append('path')
          .attr('d', arc)
          .attr('fill', function (d) { return color(d.data) })
          .attr('stroke', 'var(--background-1)')
          .attr('stroke-width', '0.3rem')
        // animate the arcs
        // .transition()
        // .duration(2000) // Set the duration of the animation to 2 seconds
        // .attrTween('d', function (d) {
        //   var interpolate = d3.interpolate(d.startAngle, d.endAngle)
        //   return function (t) {
        //     d.endAngle = interpolate(t)
        //     return arc(d)
        //   }
        // })

        // Add the labels to the arcs
        // arcs.append('text')
        //   .attr('transform', function (d) { return 'translate(' + arc.centroid(d) + ')' })
        //   .attr('text-anchor', 'middle')
        //   .text(function (d, i) { return labels[i] })

        // Add the total value to the center of the chart
        g.append('text')
          .attr('text-anchor', 'middle')
          .text(total)
          .attr('fill', 'var(--text-color)')
          .attr('font-size', '3rem')
          .attr('font-family', 'Inter var, sans-serif')
          .attr('font-weight', '300')
          // move text down a bit
          .attr('dy', '0.3em')
        // css class
        // .attr('class', '.font-size--large')
        // animate the total
        // .text(0)
        // .transition()
        // .duration(2000) // Set the duration of the animation to 2 seconds
        // .tween('text', function (d) {
        //   var i = d3.interpolate(0, total)
        //   return function (t) {
        //     d3.select(this).text(Math.round(i(t)))
        //   }
        // })
      }
    }
  }
</script>
