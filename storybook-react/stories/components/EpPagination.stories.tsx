import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpPagination } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpPagination> = {
  title: 'Components/EpPagination',
  component: EpPagination,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    currentPage: {
      table: { disable: true }
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages'
    },
    showPages: {
      control: 'boolean',
      description: 'Show individual page buttons'
    },
    buttonClass: {
      control: 'text',
      description: 'CSS class for buttons'
    },
    resultsPerPage: {
      control: 'number',
      description: 'Number of results per page'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpPagination>

export const Pagination: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(args.resultsPerPage || 20)
    
    return (
      <div style={{ minWidth: '600px' }}>
        <EpPagination
          {...args}
          currentPage={currentPage}
          resultsPerPage={resultsPerPage}
          onPageChange={setCurrentPage}
          onResultsPerPageChange={setResultsPerPage}
        />
      </div>
    )
  },
  args: {
    totalPages: 10,
    showPages: true,
    buttonClass: '',
    resultsPerPage: 20
  }
}
