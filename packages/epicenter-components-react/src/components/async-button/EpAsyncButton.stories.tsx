import { EpAsyncButton } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

const meta: Meta<typeof EpAsyncButton> = {
  title: 'Components/AsyncButton',
  component: EpAsyncButton,
  parameters: {
    layout: 'centered'
  },
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

export const AsyncButton: Story = {
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
