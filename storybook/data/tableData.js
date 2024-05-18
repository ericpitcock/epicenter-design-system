import { faker } from '@faker-js/faker'
import EpBadge from '../../packages/epicenter-vue-components/src/components/badge/EpBadge.vue'
import { markRaw } from 'vue'

const columns = [
  {
    header: 'Status',
    label: 'Status',
    key: 'status',
    cellType: 'component',
    component: markRaw(EpBadge),
  },
  {
    header: 'Date',
    label: 'Date',
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
    label: 'Name',
    key: 'name',
    cellType: 'string'
  },
  {
    header: 'Ride Type',
    label: 'Ride Type',
    key: 'type',
    cellType: 'string',
    formatter: value => {
      return value
    }
  },
  {
    header: 'Distance (mi)',
    label: 'Distance (mi)',
    key: 'distance',
    cellType: 'string',
    formatter: value => {
      return (value / 1609.344).toFixed(2)
    },
    style: 'tabular-numbers'
  },
  {
    header: 'Elevation (ft)',
    label: 'Elevation (ft)',
    key: 'total_elevation_gain',
    cellType: 'string',
    formatter: value => {
      return (value * 3.28084).toFixed(2)
    },
    style: 'tabular-numbers'
  },
  {
    header: 'Avg Speed (mph)',
    label: 'Avg Speed (mph)',
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
    // create status badge label and variant
    const label = faker.helpers.arrayElement(['Completed', 'Cancelled'])
    const variant = label === 'Completed' ? 'success' : 'danger'
    arr.push({
      id: faker.string.uuid(),
      status: {
        props: {
          label,
          variant,
          outlined: true
        },
        value: label
      },
      start_date: faker.date.past().toISOString(),
      name: faker.location.city(),
      type: faker.helpers.arrayElement(['VirtualRide', 'Ride']),
      distance: faker.number.int({ min: 10000, max: 100000 }),
      total_elevation_gain: faker.number.int({ min: 100, max: 800 }),
      average_speed: faker.number.int({ min: 20, max: 30, precision: 0.1 })
    })
  }
  return arr
}

export { columns, fakeArray }
