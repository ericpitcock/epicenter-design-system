import React, { useEffect, useRef, useState } from 'react'

export interface EpChartProps {
  /** Custom color overrides for chart series (CSS custom properties) */
  chartColors?: React.CSSProperties
  /** Height of the chart in pixels */
  height?: number
  /** Highcharts configuration options object */
  options?: any
  /** Additional CSS classes */
  className?: string
}

/**
 * EpChart - Highcharts wrapper component
 * 
 * Dynamically loads Highcharts and renders charts with styled mode enabled.
 * Provides chart reflow method for responsive resizing.
 */
const EpChart = React.forwardRef<{ reflowChart: () => void }, EpChartProps>(
  ({ chartColors = {}, height = 400, options = {}, className = '' }, ref) => {
    const chartRef = useRef<any>(null)
    const [chartId] = useState(`ep-chart-${Math.random().toString(36).substring(7)}`)

    const chartDefaults = {
      accessibility: {
        enabled: false
      },
      chart: {
        styledMode: true
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

    const chartOptions = {
      ...chartDefaults,
      ...options
    }

    const drawChart = async () => {
      const Highcharts = (await import('highcharts')).default
      chartRef.current = Highcharts.chart(chartId, chartOptions)
    }

    const reflowChart = () => {
      if (chartRef.current) {
        chartRef.current.reflow()
      }
    }

    React.useImperativeHandle(ref, () => ({
      reflowChart
    }))

    useEffect(() => {
      drawChart()

      return () => {
        if (chartRef.current) {
          chartRef.current.destroy()
        }
      }
    }, [])

    useEffect(() => {
      // Redraw chart when options change
      if (chartRef.current) {
        chartRef.current.destroy()
        drawChart()
      }
    }, [options])

    return (
      <div
        id={chartId}
        className={className}
        style={{ height: `${height}px`, ...chartColors }}
      />
    )
  }
)

EpChart.displayName = 'EpChart'

export default EpChart
