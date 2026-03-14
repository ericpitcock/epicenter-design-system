import { EpBasicTable } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof EpBasicTable> = {
  title: 'Components/BasicTable',
  component: EpBasicTable,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    bordered: {
      control: 'boolean',
      description: 'Gives borders to your table rows'
    },
    compact: {
      control: 'boolean',
      description: 'Compact rows in a single line table scenario'
    },
    striped: {
      control: 'boolean',
      description: 'Background colors for every other row'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpBasicTable>

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' }
]

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager', status: 'Active' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active' }
]

export const BasicTable: Story = {
  args: {
    columns,
    data
  }
}
