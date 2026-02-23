import { EpKeyValueTable } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EpKeyValueTable> = {
  title: 'Components/KeyValueTable',
  component: EpKeyValueTable,
  parameters: {
    layout: 'padded'
  },
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

export const KeyValueTable: Story = {
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
