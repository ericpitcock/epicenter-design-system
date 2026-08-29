/**
 * Sample Highcharts option sets for the EpChart stories.
 *
 * These carry data and chart type only. Styled mode, colour count, credits and
 * the rest come from EpChart's own defaults, which it merges deeply — so an
 * options object here can name `chart` without dropping them.
 */

const cities = [
  'Reggieworth', 'Pearlinebury', 'Beattyboro', 'Durganmouth',
  'Fort Cindyburgh', 'West Carlee', 'DeKalb', 'Kansas City',
  'Frisco', 'New Rogeliaton', 'Lake Wallace', 'East Gregworth'
]

// Deterministic stand-in for random sample data: stories that reshuffle on every
// render make visual regressions impossible to spot.
const sample = (seed: number, length: number): number[] =>
  Array.from({ length }, (_, i) => 1200 + ((seed * 37 + i * 911) % 88) * 100)

export const pieChartOptions = {
  chart: {
    type: 'pie'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [
    {
      name: 'Browsers',
      data: [
        { name: 'Chrome', y: 61.41 },
        { name: 'Internet Explorer', y: 11.84 },
        { name: 'Firefox', y: 10.85 },
        { name: 'Edge', y: 4.67 },
        { name: 'Safari', y: 4.18 },
        { name: 'Sogou Explorer', y: 1.64 },
        { name: 'Opera', y: 1.6 },
        { name: 'QQ', y: 1.2 },
        { name: 'Netscape', y: 1 },
        { name: 'Brave', y: 1 },
        { name: 'DuckDuckGo', y: 1 },
        { name: 'Yandex', y: 1 },
        { name: 'Vivaldi', y: 1 },
        { name: 'Samsung Internet', y: 1 }
      ]
    }
  ]
}

export const stackedBarChartOptions = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [
    'Security Incidents', 'Unusual Activity', 'Policy', 'Recon', 'Service', 'Other'
  ].map((name, index) => ({ name, data: sample(index, 12) })),
  title: {
    text: undefined
  },
  xAxis: {
    categories: cities
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total Incidents'
    },
    reversedStacks: false
  }
}

export const stackedColumnChartOptions = {
  chart: {
    type: 'column'
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: false,
        verticalAlign: 'top'
      }
    },
    series: {
      groupPadding: 0.2,
      stacking: 'normal'
    }
  },
  series: [
    'Mobile Adware', 'Mobile Malware', 'Adware', 'Malware', 'Exploit Tool', 'Other'
  ].map((name, index) => ({ name, data: sample(index + 3, 8) })),
  title: {
    text: undefined
  },
  xAxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total Incidents'
    },
    reversedStacks: false
  }
}
