// https://fakerjsdocs.netlify.app/#browser-demo
import faker from 'faker'

const columns = [
  {
    header: 'Status',
    key: 'status',
    formatter: value => {
      return value === 'Completed'
        ? `<span class="ep-badge" style="border-color: var(--success-green--border);">${value}</span>`
        : `<span class="ep-badge" style="border-color: var(--danger-red--border);">${value}</span>`
    }
  },
  {
    header: 'Date',
    key: 'start_date',
    cellType: 'string',
    formatter: value => {
      return value.split('T')[0].replaceAll('-', '/')
    },
    command: () => {
      console.log('click')
    }
  },
  {
    header: 'Name',
    key: 'name',
    cellType: 'string'
  },
  {
    header: 'Ride Type',
    key: 'type',
    cellType: 'string',
    formatter: value => {
      return value
    }
  },
  {
    header: 'Distance (mi)',
    key: 'distance',
    cellType: 'string',
    formatter: value => {
      return (value / 1609.344).toFixed(2)
    },
    style: 'tabular-numbers'
  },
  {
    header: 'Elevation (ft)',
    key: 'total_elevation_gain',
    cellType: 'string',
    formatter: value => {
      return (value * 3.28084).toFixed(2)
    },
    style: 'tabular-numbers'
  },
  {
    header: 'Avg Speed (mph)',
    key: 'average_speed',
    cellType: 'string',
    formatter: value => {
      return (value * 0.621371).toFixed(1)
    },
    style: 'tabular-numbers'
  }
]

const fakeArray = length => {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push({
      id: faker.datatype.uuid(),
      status: faker.random.arrayElement(['Completed', 'Cancelled']),
      start_date: faker.date.past().toISOString(),
      name: faker.address.city(),
      type: faker.random.arrayElement(['VirtualRide', 'Ride']),
      distance: faker.datatype.number({ min: 10000, max: 100000 }),
      total_elevation_gain: faker.datatype.number({ min: 100, max: 800 }),
      average_speed: faker.datatype.number({ min: 20, max: 30, precision: 0.1 })
    })
  }
  return arr
}

export { columns, fakeArray }
