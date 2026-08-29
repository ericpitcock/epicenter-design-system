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

const stackedBarChartOptions = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [
    {
      name: 'Security Incidents',
      data: fakeArray(12)
    },
    {
      name: 'Unusual Activity',
      data: fakeArray(12)
    },
    {
      name: 'Policy',
      data: fakeArray(12)
    },
    {
      name: 'Recon',
      data: fakeArray(12)
    },
    {
      name: 'Service',
      data: fakeArray(12)
    },
    {
      name: 'Other',
      data: fakeArray(12)
    }
  ],
  title: {
    text: undefined
  },
  xAxis: {
    categories: fakeCitiesArray(12)
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total Incidents'
    },
    reversedStacks: false
  }
}

export default stackedBarChartOptions
