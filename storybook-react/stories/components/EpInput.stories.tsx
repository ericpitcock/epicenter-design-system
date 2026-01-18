import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpInput } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpInput> = {
  title: 'Components/EpInput',
  component: EpInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input'
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The input type attribute'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    size: {
      control: 'select',
      options: ['default', 'large', 'xlarge'],
      description: 'Size variant'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input'
    },
    clearable: {
      control: 'boolean',
      description: 'Shows clear button when input has value'
    },
    errorEnabled: {
      control: 'boolean',
      description: 'Enables error state and message display'
    },
    error: {
      control: 'boolean',
      description: 'Displays input in error state'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpInput>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div style={{ width: '300px' }}>
        <EpInput
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text'
  }
}

export const WithIcons: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    
    const searchIcon = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
      </svg>
    )
    
    return (
      <div style={{ width: '300px' }}>
        <EpInput
          {...args}
          value={value}
          onChange={setValue}
          iconLeft={searchIcon}
        />
      </div>
    )
  },
  args: {
    label: 'Search',
    placeholder: 'Search...',
    type: 'search'
  }
}

export const Clearable: Story = {
  render: (args) => {
    const [value, setValue] = useState('Sample text')
    return (
      <div style={{ width: '300px' }}>
        <EpInput
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  args: {
    label: 'Clearable Input',
    clearable: true
  }
}

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState('invalid@')
    return (
      <div style={{ width: '300px' }}>
        <EpInput
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  args: {
    label: 'Email',
    type: 'email',
    errorEnabled: true,
    error: true,
    errorMessage: 'Please enter a valid email address'
  }
}

export const Sizes: Story = {
  render: () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
        <EpInput
          label="Default Size"
          value={value1}
          onChange={setValue1}
          placeholder="Default"
        />
        <EpInput
          label="Large Size"
          size="large"
          value={value2}
          onChange={setValue2}
          placeholder="Large"
        />
        <EpInput
          label="XLarge Size"
          size="xlarge"
          value={value3}
          onChange={setValue3}
          placeholder="XLarge"
        />
      </div>
    )
  }
}

export const Password: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div style={{ width: '300px' }}>
        <EpInput
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password'
  }
}
