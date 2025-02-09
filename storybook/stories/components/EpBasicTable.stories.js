import EpBasicTable from '@/components/basic-table/EpBasicTable.vue'

import { paddedSurface } from '../../helpers/decorators.js'

export default {
  title: 'Components/Table/Basic Table',
  component: EpBasicTable,
  decorators: [paddedSurface],
  argTypes: {
    columns: {
      table: { disable: true }
    },
    data: {
      table: { disable: true }
    },
    compact: {
      name: 'Compact',
      control: {
        type: 'boolean'
      }
    },
    bordered: {
      name: 'Bordered',
      control: {
        type: 'boolean'
      }
    },
    striped: {
      name: 'Striped',
      control: {
        type: 'boolean'
      }
    }
  }
}

const sampleColumns = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
  { key: 'role', label: 'Role' },
  { key: 'email', label: 'Email' },
  { key: 'createdAt', label: 'Created At' },
  { key: 'lastLogin', label: 'Last Login' },
  { key: 'location', label: 'Location' }
]

const sampleData = [
  {
    name: 'Alice',
    status: 'Active',
    role: 'Admin',
    email: 'alice@example.com',
    createdAt: '2024-01-01',
    lastLogin: '2024-02-05',
    location: 'New York'
  },
  {
    name: 'Bob',
    status: 'Inactive',
    role: 'User',
    email: 'bob@example.com',
    createdAt: '2023-12-15',
    lastLogin: '2024-01-20',
    location: 'Los Angeles'
  },
  {
    name: 'Charlie',
    status: 'Pending',
    role: 'Manager',
    email: 'charlie@example.com',
    createdAt: '2024-02-01',
    lastLogin: '2024-02-04',
    location: 'Chicago'
  },
  {
    name: 'David',
    status: 'Active',
    role: 'Support',
    email: 'david@example.com',
    createdAt: '2023-11-10',
    lastLogin: '2024-02-01',
    location: 'Seattle'
  },
  {
    name: 'Eve',
    status: 'Inactive',
    role: 'User',
    email: 'eve@example.com',
    createdAt: '2023-10-05',
    lastLogin: '2023-12-30',
    location: 'Austin'
  }
]

export const BasicTable = (args) => ({
  components: { EpBasicTable },
  setup() {
    return { args, sampleColumns, sampleData }
  },
  template: `
    <ep-basic-table
      :columns="sampleColumns"
      :data="sampleData"
      v-bind="args"
    />
  `
})

BasicTable.args = {
  compact: false,
  bordered: true,
  striped: true
}