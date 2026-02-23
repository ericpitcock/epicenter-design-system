const pieChartOptions = {
  chart: {
    colorCount: 14,
    styledMode: true,
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
        {
          name: 'Chrome',
          y: 61.41
        },
        {
          name: 'Internet Explorer',
          y: 11.84
        },
        {
          name: 'Firefox',
          y: 10.85
        },
        {
          name: 'Edge',
          y: 4.67
        },
        {
          name: 'Safari',
          y: 4.18
        },
        {
          name: 'Sogou Explorer',
          y: 1.64
        },
        {
          name: 'Opera',
          y: 1.6
        },
        {
          name: 'QQ',
          y: 1.2
        },
        {
          name: 'Netscape',
          y: 1
        },
        {
          name: 'Brave',
          y: 1
        },
        {
          name: 'DuckDuckGo',
          y: 1
        },
        {
          name: 'Yandex',
          y: 1
        },
        {
          name: 'Vivaldi',
          y: 1
        },
        {
          name: 'Samsung Internet',
          y: 1
        }
      ]
    }
  ]
}

export default pieChartOptions