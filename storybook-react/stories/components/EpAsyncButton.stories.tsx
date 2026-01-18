import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpAsyncButton } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpAsyncButton> = {
  title: 'Components/EpAsyncButton',
  component: EpAsyncButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'loading', 'success', 'failure'],
      description: 'The current state of the button'
    },
    loadingIndicator: {
      control: 'select',
      options: ['text', 'spinner'],
      description: 'How to show loading state'
    },
    preserveWidth: {
      control: 'boolean',
      description: 'Maintain consistent width'
    },
    disabledDuringLoading: {
      control: 'boolean',
      description: 'Disable button while loading'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpAsyncButton>

export const Default: Story = {
  render: (args) => {
    const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'failure'>('default')
    
    const handleClick = () => {
      setStatus('loading')
      setTimeout(() => {
        setStatus('success')
        setTimeout(() => setStatus('default'), 2000)
      }, 2000)
    }
    
    return (
      <EpAsyncButton
        {...args}
        status={status}
        onClick={handleClick}
      />
    )
  },
  args: {
    label: 'Submit',
    successMessage: 'Submitted!',
    loadingText: 'Submitting...'
  }
}

export const WithSpinner: Story = {
  render: () => {
    const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'failure'>('default')
    
    const handleClick = () => {
      setStatus('loading')
      setTimeout(() => {
        setStatus('success')
        setTimeout(() => setStatus('default'), 2000)
      }, 2000)
    }
    
    return (
      <EpAsyncButton
        status={status}
        label="Save"
        successMessage="Saved!"
        loadingIndicator="spinner"
        loadingText="Saving..."
        onClick={handleClick}
      />
    )
  }
}

export const FailureState: Story = {
  render: () => {
    const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'failure'>('default')
    
    const handleClick = () => {
      setStatus('loading')
      setTimeout(() => {
        setStatus('failure')
        setTimeout(() => setStatus('default'), 2000)
      }, 2000)
    }
    
    return (
      <EpAsyncButton
        status={status}
        label="Delete"
        failureMessage="Delete failed"
        loadingText="Deleting..."
        onClick={handleClick}
      />
    )
  }
}

export const NoWidthPreservation: Story = {
  render: () => {
    const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'failure'>('default')
    
    const handleClick = () => {
      setStatus('loading')
      setTimeout(() => {
        setStatus('success')
        setTimeout(() => setStatus('default'), 2000)
      }, 2000)
    }
    
    return (
      <EpAsyncButton
        status={status}
        label="Submit"
        successMessage="Done!"
        loadingText="Loading..."
        preserveWidth={false}
        onClick={handleClick}
      />
    )
  }
}

export const AllStates: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <EpAsyncButton
          status="default"
          label="Default State"
        />
        <EpAsyncButton
          status="loading"
          label="Submit"
          loadingText="Loading..."
          loadingIndicator="text"
        />
        <EpAsyncButton
          status="loading"
          label="Submit"
          loadingText="Loading..."
          loadingIndicator="spinner"
        />
        <EpAsyncButton
          status="success"
          label="Submit"
          successMessage="Success!"
        />
        <EpAsyncButton
          status="failure"
          label="Submit"
          failureMessage="Failed"
        />
      </div>
    )
  }
}

export const Interactive: Story = {
  render: () => {
    const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'failure'>('default')
    
    const handleClick = () => {
      setStatus('loading')
      
      // Simulate API call
      setTimeout(() => {
        // Randomly succeed or fail
        if (Math.random() > 0.3) {
          setStatus('success')
        } else {
          setStatus('failure')
        }
        
        // Reset after showing result
        setTimeout(() => setStatus('default'), 2000)
      }, 1500)
    }
    
    return (
      <div style={{ textAlign: 'center' }}>
        <EpAsyncButton
          status={status}
          label="Process Request"
          successMessage="Request processed successfully!"
          failureMessage="Request failed. Try again."
          loadingText="Processing..."
          loadingIndicator="spinner"
          onClick={handleClick}
        />
        <p style={{ marginTop: '20px', color: '#666' }}>
          Click to simulate an API request (70% success rate)
        </p>
      </div>
    )
  }
}
