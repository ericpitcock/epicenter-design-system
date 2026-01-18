import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpBasicTable } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpBasicTable> = {
  title: 'Components/EpBasicTable',
  component: EpBasicTable,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
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

export const Default: Story = {
  args: {
    columns,
    data
  }
}

export const Bordered: Story = {
  args: {
    columns,
    data,
    bordered: true
  }
}

export const Striped: Story = {
  args: {
    columns,
    data,
    striped: true
  }
}

export const Compact: Story = {
  args: {
    columns,
    data,
    compact: true
  }
}

export const BorderedAndStriped: Story = {
  args: {
    columns,
    data,
    bordered: true,
    striped: true
  }
}

export const AllVariants: Story = {
  args: {
    columns,
    data,
    bordered: true,
    striped: true,
    compact: true
  }
}

export const LargeDataset: Story = {
  args: {
    columns: [
      { key: 'id', label: 'ID' },
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'department', label: 'Department' },
      { key: 'position', label: 'Position' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone' }
    ],
    data: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      firstName: `First${i + 1}`,
      lastName: `Last${i + 1}`,
      department: ['Sales', 'Engineering', 'Marketing', 'HR'][i % 4],
      position: ['Manager', 'Associate', 'Director', 'Specialist'][i % 4],
      email: `user${i + 1}@example.com`,
      phone: `555-${String(i + 1).padStart(4, '0')}`
    })),
    bordered: true,
    striped: true
  }
}

export const MinimalData: Story = {
  args: {
    columns: [
      { key: 'item', label: 'Item' },
      { key: 'quantity', label: 'Quantity' }
    ],
    data: [
      { id: 1, item: 'Apples', quantity: '10' },
      { id: 2, item: 'Bananas', quantity: '5' },
      { id: 3, item: 'Oranges', quantity: '8' }
    ]
  }
}

export const EmptyState: Story = {
  args: {
    columns,
    data: []
  }
}
