import React, { useEffect, useRef, useState } from 'react'

export interface EpDonutChartProps {
  /** If true, animates the chart on initial render */
  animate?: boolean
  /** Width of the chart in pixels */
  width?: number
  /** Height of the chart in pixels */
  height?: number
  /** Margin around the chart in pixels */
  margin?: number
  /** Array of numeric values for each segment */
  data: number[]
  /** Array of label strings corresponding to each data segment */
  labels: string[]
  /** Text or number to display in the center */
  value?: string
  /** CSS class for styling the center value text */
  valueTextClass?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * EpDonutChart - D3-powered donut chart with tooltips
 * 
 * Renders an interactive donut chart using D3.js with hover tooltips
 * and optional animation on mount.
 */
const EpDonutChart: React.FC<EpDonutChartProps> = ({
  animate = true,
  width = 200,
  height = 200,
  margin = 0,
  data,
  labels,
  value = 'Value',
  valueTextClass = 'font-size--jumbo',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const epDonutRef = useRef<HTMLDivElement>(null)
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [tooltipStyles, setTooltipStyles] = useState({ top: 0, left: 0 })
  const [tooltipText, setTooltipText] = useState('tooltip')

  useEffect(() => {
    const drawChart = async () => {
      const d3 = await import('d3')
      
      if (!epDonutRef.current || !containerRef.current || !tooltipRef.current) return

      // Clear any existing SVG
      d3.select(epDonutRef.current).selectAll('*').remove()

      const radius = Math.min(width, height) / 2 - margin

      const svg = d3.select(epDonutRef.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      const g = svg.append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)

      const color = d3.scaleOrdinal()
        .range([
          'hsl(var(--chart-sequence-00))',
          'hsl(var(--chart-sequence-01))',
          'hsl(var(--chart-sequence-02))',
          'hsl(var(--chart-sequence-03))'
        ])

      const arc = d3.arc<any>()
        .innerRadius(radius - 26)
        .outerRadius(radius)

      const pie = d3.pie<number>()
        .sort(null)
        .value((d) => d)

      const handleMouseOver = (event: MouseEvent, d: any) => {
        setTooltipVisible(true)
        const containerRect = containerRef.current!.getBoundingClientRect()
        const tooltipRect = tooltipRef.current!.getBoundingClientRect()
        const x = event.clientX - containerRect.left
        const y = event.clientY - containerRect.top
        let tooltipX = x + 10
        let tooltipY = y + 10
        if (x > containerRect.width / 2) {
          tooltipX = x + 10
        } else {
          tooltipX = x - tooltipRect.width - 10
        }
        if (y > containerRect.height / 2) {
          tooltipY = y + 10
        } else {
          tooltipY = y - tooltipRect.height - 10
        }
        setTooltipStyles({
          top: tooltipY,
          left: tooltipX
        })
        setTooltipText(String(d.data))
      }

      const handleMouseOut = () => {
        setTooltipVisible(false)
      }

      const arcs = g.selectAll('arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc')

      arcs.append('path')
        .attr('d', arc as any)
        .attr('fill', (d) => color(d.data) as string)
        .attr('stroke', 'var(--interface-surface)')
        .attr('stroke-width', '0.3rem')
        .on('mouseover', handleMouseOver)
        .on('mousemove', handleMouseOver)
        .on('mouseout', handleMouseOut)

      if (animate) {
        arcs.select('path')
          .attr('d', arc as any)
          .transition()
          .duration(700)
          .attrTween('d', function(d: any) {
            const interpolate = d3.interpolate(d.startAngle, d.endAngle)
            return function(t: number) {
              d.endAngle = interpolate(t)
              return arc(d) as string
            }
          })
      }
    }

    drawChart()
  }, [data, labels, animate, width, height, margin])

  return (
    <div
      ref={containerRef}
      className={`ep-donut-chart${className ? ` ${className}` : ''}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        ref={tooltipRef}
        className="ep-donut-chart__tooltip"
        style={{
          display: tooltipVisible ? 'block' : 'none',
          top: `${tooltipStyles.top}px`,
          left: `${tooltipStyles.left}px`,
          position: 'absolute'
        }}
      >
        {tooltipText}
      </div>
      <div ref={epDonutRef} />
      <div className={`ep-donut-chart__value ${valueTextClass}`}>
        {value}
      </div>
    </div>
  )
}

export default EpDonutChart
