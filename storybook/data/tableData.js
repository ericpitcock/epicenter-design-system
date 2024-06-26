import { faker } from '@faker-js/faker'
import EpBadge from '../../packages/epicenter-vue-components/src/components/badge/EpBadge.vue'
import { markRaw } from 'vue'

// header is deprecated, use label instead
const columns = [
  // options: label, key, sortable, component, formatter, style
  // example:
  // formatter: (value) => {
  //   return value.toUpperCase()
  // }
  {
    label: 'ID',
    key: 'id',
    sortable: true,
  },
  {
    label: 'Status',
    key: 'status',
    component: markRaw(EpBadge),
    sortable: true,
  },
  {
    label: 'Date',
    key: 'start_date',
    sortable: true,
  },
  {
    label: 'Name',
    key: 'name',
    sortable: true,
  },
  {
    label: 'Ride Type',
    key: 'type',
    sortable: true,
  },
  {
    label: 'Distance (mi)',
    key: 'distance',
    style: 'tabular-numbers',
    sortable: true,
  },
  {
    label: 'Elevation (ft)',
    key: 'total_elevation_gain',
    style: 'tabular-numbers',
    sortable: true,
  },
  {
    label: 'Avg Speed (mph)',
    key: 'average_speed',
    style: 'tabular-numbers',
    sortable: true,
  }
]

const fakeArray = length => {
  let arr = []
  for (let i = 0; i < length; i++) {
    // create status badge label and variant
    const label = faker.helpers.arrayElement(['Completed', 'Cancelled'])
    const start_date = faker.date.past().toISOString()
    const distance = faker.number.int({ min: 10000, max: 100000 })
    const total_elevation_gain = faker.number.int({ min: 100, max: 800 })
    const average_speed = faker.number.int({ min: 20, max: 30, precision: 0.1 })

    arr.push({
      id: faker.string.uuid(),
      status: {
        props: {
          label,
          classes: { 'ep-badge--success': label === 'Completed', 'ep-badge--warning': label === 'Cancelled' }
        },
        value: label
      },
      start_date: {
        raw: Date.parse(start_date),
        value: new Date(start_date).toLocaleString()
      },
      name: faker.location.city(),
      type: faker.helpers.arrayElement(['VirtualRide', 'Ride']),
      distance: {
        raw: distance,
        value: (distance / 1609.344).toFixed(2)
      },
      total_elevation_gain: {
        raw: total_elevation_gain,
        value: (total_elevation_gain * 3.28084).toFixed(2)
      },
      average_speed: {
        raw: average_speed,
        value: (average_speed * 0.621371).toFixed(1)
      }
    })
  }
  return arr
}

export { columns, fakeArray }
