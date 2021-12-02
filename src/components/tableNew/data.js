// https://fakerjsdocs.netlify.app/#browser-demo
// import faker from 'faker'
const faker = require('faker')

const columns = [
  {
    header: 'Date',
    key: 'start_date',
    formatter: (value) => {
      return value.split('T')[0].replaceAll('-', '/')
    },
    on: {
      click: () => console.log('click')
    }
  },
  {
    header: 'Name',
    key: 'name'
  },
  {
    header: 'Ride Type',
    key: 'type',
    formatter: (value) => {
      return value
    }
  },
  {
    header: 'Distance (mi)',
    key: 'distance',
    formatter: (value) => {
      return (value / 1609.344).toFixed(2)
    },
    style: 'tabular-numbers'
  },
  {
    header: 'Elevation (ft)',
    key: 'total_elevation_gain',
    formatter: (value) => {
      return (value * 3.28084).toFixed(2)
    },
    style: 'tabular-numbers'
  },
  {
    header: 'Avg Speed (mph)',
    key: 'average_speed',
    formatter: (value) => {
      return (value * 0.621371).toFixed(1)
    },
    style: 'tabular-numbers'
  },
  {
    header: 'Avg Watts',
    key: 'average_watts',
    style: 'tabular-numbers'
  }
]

const fakeArray = (length) => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push({
      id: faker.datatype.uuid(),
      start_date: faker.date.past().toISOString(),
      name: faker.address.city(),
      type: faker.random.arrayElement(['VirtualRide', 'Ride']),
      distance: faker.datatype.number({ min: 10000, max: 100000 }),
      total_elevation_gain: faker.datatype.number({ min: 100, max: 800 }),
      average_speed: faker.datatype.number({ min: 20, max: 30, precision: .1 }),
      average_watts: faker.datatype.number({ min: 80, max: 200, precision: .1 })
    })
  }
  return arr
}

export { columns, fakeArray }
