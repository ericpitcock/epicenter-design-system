import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpTable } from '@ericpitcock/epicenter-react-components'
import { EpTableHead } from '@ericpitcock/epicenter-react-components'
import { EpTableSortableHeader } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpTable> = {
  title: 'Components/EpTable',
  component: EpTable,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
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

export const Default: Story = {
  args: {
    columns,
    data
  }
}

export const WithSorting: Story = {
  render: () => {
    const [sortColumn, setSortColumn] = useState('name')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
    const [tableData, setTableData] = useState([...data])

    const handleSort = (columnKey: string) => {
      const newSortOrder = sortColumn === columnKey && sortOrder === 'asc' ? 'desc' : 'asc'
      setSortColumn(columnKey)
      setSortOrder(newSortOrder)

      const sorted = [...tableData].sort((a, b) => {
        const aVal = a[columnKey]
        const bVal = b[columnKey]
        if (aVal < bVal) return newSortOrder === 'asc' ? -1 : 1
        if (aVal > bVal) return newSortOrder === 'asc' ? 1 : -1
        return 0
      })
      setTableData(sorted)
    }

    return (
      <EpTable
        columns={columns}
        data={tableData}
        renderHeader={({ visibleColumns, showActionsMenu }) => (
          <thead>
            <tr>
              {visibleColumns.map((column, index) => (
                <EpTableSortableHeader
                  key={column.key}
                  column={column}
                  columnIndex={index}
                  sortColumn={sortColumn}
                  sortOrder={sortOrder}
                  onSort={handleSort}
                />
              ))}
            </tr>
          </thead>
        )}
      />
    )
  }
}

export const Striped: Story = {
  args: {
    columns,
    data,
    striped: true
  }
}

export const Bordered: Story = {
  args: {
    columns,
    data,
    bordered: true
  }
}

export const Compact: Story = {
  args: {
    columns,
    data,
    compact: true
  }
}

export const Selectable: Story = {
  render: () => {
    const [selectedRow, setSelectedRow] = useState<any>(null)

    return (
      <div>
        <EpTable
          columns={columns}
          data={data}
          selectable
          onRowClick={setSelectedRow}
        />
        {selectedRow && (
          <div style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
            Selected: {selectedRow.name} ({selectedRow.role})
          </div>
        )}
      </div>
    )
  }
}

export const WithCustomCell: Story = {
  args: {
    columns,
    data,
    renderCell: (column, row) => {
      if (column.key === 'status') {
        return (
          <span
            style={{
              padding: '4px 8px',
              borderRadius: '4px',
              background: row.status === 'Active' ? '#e8f5e9' : '#ffebee',
              color: row.status === 'Active' ? '#2e7d32' : '#c62828',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            {row.status}
          </span>
        )
      }
      return row[column.key]
    }
  }
}

export const WithActionsMenu: Story = {
  args: {
    columns,
    data,
    showActionsMenu: true,
    renderActionsMenu: (row) => (
      <button
        onClick={(e) => {
          e.stopPropagation()
          alert(`Actions for ${row.name}`)
        }}
        style={{ padding: '4px 8px', cursor: 'pointer' }}
      >
        •••
      </button>
    )
  }
}

export const WithHiddenColumns: Story = {
  args: {
    columns: [...columns, { key: 'id', label: 'ID' }],
    data,
    hiddenColumns: ['id', 'email']
  }
}

export const StickyHeader: Story = {
  args: {
    columns,
    data: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'User', 'Manager'][i % 3],
      status: i % 3 === 0 ? 'Inactive' : 'Active'
    })),
    stickyHeader: true,
    striped: true
  },
  decorators: [
    (Story) => (
      <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        <Story />
      </div>
    )
  ]
}
