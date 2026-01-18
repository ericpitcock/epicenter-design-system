import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpPagination } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpPagination> = {
  title: 'Components/EpPagination',
  component: EpPagination,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    showPages: {
      control: 'boolean',
      description: 'Show individual page buttons'
    },
    buttonClass: {
      control: 'text',
      description: 'CSS class for buttons'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpPagination>

export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    
    return (
      <div style={{ minWidth: '400px' }}>
        <EpPagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
        />
      </div>
    )
  }
}

export const WithPageNumbers: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    
    return (
      <div style={{ minWidth: '600px' }}>
        <EpPagination
          currentPage={currentPage}
          totalPages={10}
          showPages
          onPageChange={setCurrentPage}
        />
      </div>
    )
  }
}

export const ManyPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(15)
    
    return (
      <div style={{ minWidth: '700px' }}>
        <EpPagination
          currentPage={currentPage}
          totalPages={50}
          showPages
          onPageChange={setCurrentPage}
        />
      </div>
    )
  }
}

export const WithResultsPerPage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(10)
    
    return (
      <div style={{ minWidth: '600px' }}>
        <EpPagination
          currentPage={currentPage}
          totalPages={20}
          resultsPerPage={resultsPerPage}
          onPageChange={setCurrentPage}
          onResultsPerPageChange={setResultsPerPage}
        />
        <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          Results per page: {resultsPerPage}
        </div>
      </div>
    )
  }
}

export const FirstPage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    
    return (
      <div style={{ minWidth: '600px' }}>
        <EpPagination
          currentPage={currentPage}
          totalPages={20}
          showPages
          onPageChange={setCurrentPage}
        />
      </div>
    )
  }
}

export const LastPage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(20)
    
    return (
      <div style={{ minWidth: '600px' }}>
        <EpPagination
          currentPage={currentPage}
          totalPages={20}
          showPages
          onPageChange={setCurrentPage}
        />
      </div>
    )
  }
}

export const FewPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(2)
    
    return (
      <div style={{ minWidth: '500px' }}>
        <EpPagination
          currentPage={currentPage}
          totalPages={5}
          showPages
          onPageChange={setCurrentPage}
        />
      </div>
    )
  }
}

export const CustomButtonClass: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(3)
    
    return (
      <div style={{ minWidth: '600px' }}>
        <EpPagination
          currentPage={currentPage}
          totalPages={10}
          showPages
          buttonClass="ep-button-var--ghost"
          onPageChange={setCurrentPage}
        />
      </div>
    )
  }
}

export const WithCustomContent: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5)
    
    return (
      <div style={{ minWidth: '700px' }}>
        <EpPagination
          currentPage={currentPage}
          totalPages={10}
          showPages
          onPageChange={setCurrentPage}
          leftContent={
            <div style={{ fontSize: '14px', color: '#666' }}>
              Showing 41-50 of 100 results
            </div>
          }
          rightContent={
            <div style={{ fontSize: '14px', color: '#666' }}>
              Go to page: <input type="number" min="1" max="10" style={{ width: '60px', padding: '4px', marginLeft: '8px' }} />
            </div>
          }
        />
      </div>
    )
  }
}

export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(20)
    const totalItems = 237
    const totalPages = Math.ceil(totalItems / resultsPerPage)
    
    const startItem = (currentPage - 1) * resultsPerPage + 1
    const endItem = Math.min(currentPage * resultsPerPage, totalItems)
    
    return (
      <div style={{ minWidth: '700px' }}>
        <div style={{ marginBottom: '20px', padding: '20px', background: '#f5f5f5', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Showing {startItem}-{endItem} of {totalItems} items
          </p>
        </div>
        <EpPagination
          currentPage={currentPage}
          totalPages={totalPages}
          showPages
          resultsPerPage={resultsPerPage}
          onPageChange={setCurrentPage}
          onResultsPerPageChange={(value) => {
            setResultsPerPage(value)
            setCurrentPage(1) // Reset to first page when changing results per page
          }}
        />
      </div>
    )
  }
}
