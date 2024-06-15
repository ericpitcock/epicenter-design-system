import { faker } from '@faker-js/faker'
import EpBadge from '../../packages/epicenter-vue-components/src/components/badge/EpBadge.vue'
import EpDropdown from '../../packages/epicenter-vue-components/src/components/dropdown/EpDropdown.vue'
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
    sortable: false,
    filterable: false,
  },
  {
    label: 'Severity',
    key: 'severity',
    component: markRaw(EpBadge),
    sortable: true,
    filterable: true,
  },
  {
    label: 'Date',
    key: 'start_date',
    sortable: true,
    filterable: true,
  },
  {
    label: 'Location',
    key: 'location',
    sortable: true,
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
    style: 'tabular-numbers',
    sortable: true,
    filterable: true,
  },
  {
    label: 'Elevation (ft)',
    key: 'total_elevation_gain',
    style: 'tabular-numbers',
    sortable: true,
    filterable: true,
  },
  {
    label: 'Avg Speed (mph)',
    key: 'average_speed',
    style: 'tabular-numbers',
    sortable: true,
    filterable: true,
  },
  {
    label: '',
    key: 'actions',
    component: markRaw(EpDropdown),
    sortable: false,
    filterable: false,
  }
]

const fakeArray = length => {
  let arr = []
  for (let i = 0; i < length; i++) {
    // create status badge label and variant
    const severity = faker.helpers.arrayElement(['Critical', 'Medium', 'High', 'Low'])
    const start_date = faker.date.past().toISOString()
    const distance = faker.number.int({ min: 10000, max: 100000 })
    const total_elevation_gain = faker.number.int({ min: 100, max: 800 })
    const average_speed = faker.number.int({ min: 20, max: 30, precision: 0.1 })
    const id = faker.string.uuid()

    const sortMap = {
      Critical: '4',
      High: '3',
      Medium: '2',
      Low: '1',
    }

    arr.push({
      id,
      severity: {
        props: {
          label: severity,
          classes: {
            'ep-badge--success': severity === 'Completed',
            'ep-badge--warning': severity === 'Cancelled'
          }
        },
        value: severity,
        raw: sortMap[severity]
      },
      start_date: {
        raw: Date.parse(start_date),
        value: new Date(start_date).toLocaleString()
      },
      location: faker.location.city(),
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
      },
      actions: {
        props: {
          context: id,
          size: 'small',
          menuItems: [
            {
              label: 'Edit',
              iconLeft: { name: 'f-file' },
              onClick: (payload) => {
                alert(`Edit ${payload.contextData}`)
              }
            },
            {
              label: 'Delete',
              iconLeft: { name: 'f-trash' },
              onClick: (payload) => {
                alert(`Delete ${payload.contextData}`)
              }
            }
          ],
          containerProps: {
            '--ep-container-border-radius': 'var(--border-radius)',
            '--ep-container-border-color': 'var(--interface-overlay)'
          },
          buttonProps: {
            label: '',
            iconLeft: {
              name: 'dots-vertical',
              styles: { '--ep-icon-stroke-width': 3 }
            },
            iconRight: null,
            classes: ['ep-button-variant-subtle-ghost'],
            size: 'small',
          },
          alignRight: true,
        }
      }
    })
  }
  return arr
}

export { columns, fakeArray }
