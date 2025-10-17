import { faker } from '@faker-js/faker'

const fakeArray = length => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(faker.number.int({ min: 0, max: 10000, precision: 0.1 }))
  }
  return arr
}

const fakeCitiesArray = length => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(faker.location.city())
  }
  return arr
}

const textColor = getComputedStyle(document.documentElement).getPropertyValue(
  '--text-color'
)

const stackedBarChartOptions = {
  chart: {
    backgroundColor: undefined,
    style: {
      fontFamily: 'Proxima Nova, sans-serif'
    },
    styledMode: true,
    type: 'bar'
  },
  // colors: [
  //   '#915ce0',
  //   '#ec93b8',
  //   '#7fcc93',
  //   '#b29124',
  //   '#9c511c',
  //   '#52aae0'
  // ],
  credits: {
    enabled: false
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [
    {
      name: 'Security Incidents',
      data: fakeTableData(12)
    },
    {
      name: 'Unusual Activity',
      data: fakeTableData(12)
    },
    {
      name: 'Policy',
      data: fakeTableData(12)
    },
    {
      name: 'Recon',
      data: fakeTableData(12)
    },
    {
      name: 'Service',
      data: fakeTableData(12)
    },
    {
      name: 'Other',
      data: fakeTableData(12)
    }
  ],
  title: {
    text: undefined
  },
  xAxis: {
    categories: fakeCitiesArray(12),
    labels: {
      style: {
        color: textColor,
        fontSize: '12px'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total Incidents',
      style: {
        color: textColor,
        fontSize: '12px'
      }
    },
    labels: {
      style: {
        color: textColor,
        fontSize: '12px'
      }
    },
    reversedStacks: false
  }
}

export default stackedBarChartOptions
