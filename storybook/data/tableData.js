import { faker } from '@faker-js/faker'
import EpBadge from '../../packages/epicenter-vue-components/src/components/badge/EpBadge.vue'
import { markRaw } from 'vue'

// header is deprecated, use label instead
const columns = [
  {
    header: 'Status',
    label: 'Status',
    key: 'status',
    component: markRaw(EpBadge),
    sortable: true,
  },
  {
    header: 'Date',
    label: 'Date',
    key: 'start_date',
    formatter: value => {
      return new Date(value).toLocaleDateString()
    },
    command: () => {
      console.log('click')
    },
    sortable: true,
  },
  {
    header: 'Name',
    label: 'Name',
    key: 'name',
    sortable: true,
  },
  {
    header: 'Ride Type',
    label: 'Ride Type',
    key: 'type',
    formatter: value => {
      return value
    },
    sortable: true,
  },
  {
    header: 'Distance (mi)',
    label: 'Distance (mi)',
    key: 'distance',
    formatter: value => {
      return (value / 1609.344).toFixed(2)
    },
    style: 'tabular-numbers',
    sortable: true,
  },
  {
    header: 'Elevation (ft)',
    label: 'Elevation (ft)',
    key: 'total_elevation_gain',
    formatter: value => {
      return (value * 3.28084).toFixed(2)
    },
    style: 'tabular-numbers',
    sortable: true,
  },
  {
    header: 'Avg Speed (mph)',
    label: 'Avg Speed (mph)',
    key: 'average_speed',
    formatter: value => {
      return (value * 0.621371).toFixed(1)
    },
    style: 'tabular-numbers',
    sortable: true,
  }
]

const fakeArray = length => {
  let arr = []
  for (let i = 0; i < length; i++) {
    // create status badge label and variant
    const label = faker.helpers.arrayElement(['Completed', 'Cancelled'])
    arr.push({
      id: faker.string.uuid(),
      status: {
        props: {
          label,
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
