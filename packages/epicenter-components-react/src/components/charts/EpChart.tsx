import React, { useEffect, useRef, useState } from 'react'

export interface EpChartProps {
  /** Custom color overrides for chart series (CSS custom properties) */
  chartColors?: React.CSSProperties
  /** Additional CSS classes */
  className?: string
  /** Height of the chart in pixels */
  height?: number
  /** Highcharts configuration options object */
  options?: any
}

/**
 * EpChart - Highcharts wrapper component
 * 
 * Dynamically loads Highcharts and renders charts with styled mode enabled.
 * Provides chart reflow method for responsive resizing.
 */
export const EpChart = React.forwardRef<{ reflowChart: () => void }, EpChartProps>(
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

    // Styled mode cycles series colours modulo colorCount, so a chart with more
    // series than that repeats a colour. The stylesheet publishes how many
    // --chart-sequence-NN tokens exist; reading it here means the cycle is the
    // palette, and stays so when the palette grows.
    const paletteSize = (element: HTMLElement) => {
      const declared = getComputedStyle(element).getPropertyValue('--chart-sequence-count')
      return Number.parseInt(declared, 10) || 10
    }

    const drawChart = async () => {
      const Highcharts = (await import('highcharts')).default
      const element = document.getElementById(chartId)
      if (!element) return

      // A shallow spread would let an options object that names `chart` drop
      // styledMode with it, which turns every series black — the defaults have to
      // merge deeply. Caller options come last so they still win.
      chartRef.current = Highcharts.chart(chartId, Highcharts.merge(
        chartDefaults,
        { chart: { colorCount: paletteSize(element) } },
        options
      ))
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
