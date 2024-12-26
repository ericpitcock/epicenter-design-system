import { faker } from '@faker-js/faker'

const columns = [
  // properties: label, key, class, sortable, filterable, formatter, sorter
  // formatter example:
  // formatter: (value) => {
  //   return value.toUpperCase()
  // }
  // sorter example:
  // sorter: (a, b) => {
  //   return a - b
  // }
  {
    label: 'ID',
    key: 'id',
    sortable: false,
    filterable: false,
  },
  {
    label: 'Severity',
    key: 'severity',
    sortable: true,
    filterable: true,
    sorter: (a, b) => {
      const sortMap = { Critical: 4, High: 3, Medium: 2, Low: 1 }
      const aValue = sortMap[a.severity] || 0
      const bValue = sortMap[b.severity] || 0
      return aValue - bValue
    },
  },
  {
    label: 'Date',
    key: 'start_date',
    sortable: true,
    filterable: true,
    formatter: (value) => {
      return new Date(value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }
  },
  {
    label: 'Location',
    key: 'location',
    sortable: false,
    filterable: true,
  },
  {
    label: 'Ride Type',
    key: 'type',
    sortable: true,
    filterable: true,
  },
  {
    label: 'Distance (mi)',
    key: 'distance',
    class: 'tabular-numbers',
    sortable: true,
    filterable: true,
    formatter: (value) => {
      return (value / 1609.344).toFixed(2)
    }
  },
  {
    label: 'Elevation (ft)',
    key: 'total_elevation_gain',
    class: 'tabular-numbers',
    sortable: true,
    filterable: true,
    formatter: (value) => {
      return (value * 3.28084).toFixed(2)
    }
  },
  {
    label: 'Avg Speed (mph)',
    key: 'average_speed',
    class: 'tabular-numbers',
    sortable: true,
    filterable: true,
    formatter: (value) => {
      return (value * 0.621371).toFixed(1)
    }
  },
]

const fakeArray = length => {
  let arr = []

  for (let i = 0; i < length; i++) {
    arr.push({
      id: faker.string.uuid(),
      severity: faker.helpers.arrayElement(['Critical', 'High', 'Medium', 'Low']),
      start_date: Date.parse(faker.date.past()),
      location: faker.location.city(),
      type: faker.helpers.arrayElement(['VirtualRide', 'Ride']),
      distance: faker.number.int({ min: 10000, max: 100000 }),
      total_elevation_gain: faker.number.int({ min: 100, max: 800 }),
      average_speed: faker.number.int({ min: 20, max: 30, precision: 0.1 }),
    })
  }
  return arr
}

export { columns, fakeArray }
