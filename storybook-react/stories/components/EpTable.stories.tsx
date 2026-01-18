import { EpTable } from '@ericpitcock/epicenter-react-components'
import { EpTableHead } from '@ericpitcock/epicenter-react-components'
import { EpTableSortableHeader } from '@ericpitcock/epicenter-react-components'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof EpTable> = {
  title: 'Components/Table',
  component: EpTable,
  parameters: {
    layout: 'padded'
  },
}

export default meta
type Story = StoryObj<typeof EpTable>

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', sortable: true }
]

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager', status: 'Active' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active' }
]

export const Table: Story = {
  args: {
    columns,
    data
  }
}
