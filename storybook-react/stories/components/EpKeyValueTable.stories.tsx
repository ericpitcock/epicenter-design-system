import type { Meta, StoryObj } from '@storybook/react'
import { EpKeyValueTable } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpKeyValueTable> = {
  title: 'Components/EpKeyValueTable',
  component: EpKeyValueTable,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    commonKeyWidth: {
      control: 'boolean',
      description: 'Use common width for all key columns'
    },
    sectionHeaders: {
      control: 'boolean',
      description: 'Show section headers'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpKeyValueTable>

export const SingleObject: Story = {
  args: {
    data: {
      Name: 'John Doe',
      Email: 'john@example.com',
      Role: 'Administrator',
      Status: 'Active',
      'Last Login': '2026-01-18'
    }
  }
}

export const MultipleSections: Story = {
  args: {
    data: [
      {
        name: 'Personal Information',
        data: {
          Name: 'Jane Smith',
          Email: 'jane@example.com',
          Phone: '555-1234',
          Location: 'San Francisco, CA'
        }
      },
      {
        name: 'Account Details',
        data: {
          'User ID': '12345',
          Role: 'Manager',
          Status: 'Active',
          'Member Since': 'January 2024'
        }
      },
      {
        name: 'Preferences',
        data: {
          Theme: 'Dark',
          Language: 'English',
          Timezone: 'PST',
          Notifications: 'Enabled'
        }
      }
    ],
    sectionHeaders: true
  }
}

export const WithCommonKeyWidth: Story = {
  args: {
    data: {
      ID: '001',
      Name: 'Product Alpha',
      Description: 'A comprehensive solution for modern businesses',
      Price: '$99.99',
      Stock: '150 units'
    },
    commonKeyWidth: true
  }
}

export const CustomValueRenderer: Story = {
  args: {
    data: {
      Name: 'John Doe',
      Email: 'john@example.com',
      Status: 'Active',
      'Account Type': 'Premium'
    },
    renderValue: (key, value) => {
      if (key === 'Status') {
        return (
          <span
            style={{
              padding: '4px 8px',
              borderRadius: '4px',
              background: value === 'Active' ? '#e8f5e9' : '#ffebee',
              color: value === 'Active' ? '#2e7d32' : '#c62828',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            {value}
          </span>
        )
      }
      if (key === 'Email') {
        return <a href={`mailto:${value}`}>{value}</a>
      }
      return value
    }
  }
}

export const LongKeys: Story = {
  args: {
    data: {
      'Short': 'Value 1',
      'Medium Length Key': 'Value 2',
      'Very Long Key Name That Spans Multiple Words': 'Value 3',
      'Another Key': 'Value 4'
    },
    commonKeyWidth: true
  }
}

export const MixedDataTypes: Story = {
  args: {
    data: {
      'String Value': 'Hello World',
      'Number Value': 42,
      'Boolean Value': true,
      'Null Value': null,
      'Undefined Value': undefined
    },
    renderValue: (key, value) => {
      if (value === null) return <em style={{ color: '#999' }}>null</em>
      if (value === undefined) return <em style={{ color: '#999' }}>undefined</em>
      if (typeof value === 'boolean') {
        return <code>{String(value)}</code>
      }
      return String(value)
    }
  }
}
