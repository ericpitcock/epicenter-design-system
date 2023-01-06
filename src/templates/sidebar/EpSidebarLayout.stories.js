import faker from 'faker'
// import { columns, fakeArray } from '@/components/table/data'
import EpSidebarLayout from './EpSidebarLayout'
import EpSidebar from '@/molecules/sidebar/EpSidebar'
import EpContainer from '@/atoms/container/EpContainer'
import EpTable from '@/organisms/table/EpTable'

const container = () => {
  return {
    template: '<div style="display: block; width: 100vw; height: 100vh;"><story/></div>'
  }
}

const navItems = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: ''
  },
  {
    name: 'Assets',
    icon: 'display',
    path: ''
  },
  {
    name: 'Investigations',
    icon: 'target',
    path: ''
  },
  {
    divider: true
  },
  {
    name: 'Risk Rating',
    icon: 'star',
    path: ''
  },
  {
    name: 'Service Info',
    icon: 'info',
    path: ''
  },
  {
    name: 'Reports',
    icon: 'report',
    path: ''
  },
  {
    name: 'Files',
    icon: 'file',
    path: ''
  },
  {
    name: 'Settings',
    icon: 'settings',
    path: ''
  }
]

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
  },
  {
    header: 'Avg Heartrate',
    key: 'average_heartrate',
    style: 'tabular-numbers'
  },
  {
    header: 'Avg Cadence',
    key: 'average_cadence',
    style: 'tabular-numbers'
  },
  {
    header: 'Avg Temp',
    key: 'average_temp',
    style: 'tabular-numbers'
  },
  {
    header: 'Avg Power',
    key: 'average_power',
    style: 'tabular-numbers'
  },
  {
    header: 'Avg Grade',
    key: 'average_grade',
    formatter: (value) => {
      return (value * 100).toFixed(1)
    },
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
      average_watts: faker.datatype.number({ min: 80, max: 200, precision: .1 }),
      average_heartrate: faker.datatype.number({ min: 80, max: 200, precision: .1 }),
      average_cadence: faker.datatype.number({ min: 80, max: 200, precision: .1 }),
      average_temp: faker.datatype.number({ min: 80, max: 200, precision: .1 }),
      average_power: faker.datatype.number({ min: 80, max: 200, precision: .1 }),
      average_grade: faker.datatype.number({ min: -10, max: 10, precision: .1 }),
    })
  }
  return arr
}

export default {
  title: 'Templates/Sidebar',
  component: EpSidebarLayout,
  decorators: [container],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args) => ({
  components: { EpSidebarLayout, EpSidebar, EpContainer, EpTable },
  setup() {
    return { args, faker, navItems, columns, fakeArray }
  },
  template: `
    <ep-sidebar-layout>
      <template #app-header>
        <div style="position: fixed; width: 100%; height: 41px; background-color: var(--background-2); border-bottom: 1px solid var(--border-color); z-index: 20;"></div>
      </template>
      <template #sidebar>
        <ep-sidebar style="position: fixed;" :navItems="navItems" />
      </template>
      <template #content>
        <ep-container width="fit-content" padding="0.4rem 2rem 2rem">
          <ep-table :columns="columns" :data="fakeArray(30)" :exclude="['id']" bordered striped stickyHeader stickyTop="41px" />
        </ep-container>
      </template>
    </ep-sidebar-layout>
  `
})

export const Sidebar = Template.bind({})
