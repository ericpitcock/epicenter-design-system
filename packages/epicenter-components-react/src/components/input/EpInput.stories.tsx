import { EpInput } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof EpInput> = {
  title: 'Components/Input',
  component: EpInput,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    id: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    },
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
      control: 'radio',
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
    autofocus: {
      control: 'boolean',
      description: 'Autofocus the input on mount'
    },
    errorEnabled: {
      table: { disable: true }
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

export const Input: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div style={{ width: '400px' }}>
        <EpInput
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  args: {
    label: 'What is your favorite word?',
    type: 'text',
    placeholder: 'e.g., Serendipity',
    size: 'xlarge',
    clearable: true,
    disabled: false,
    autofocus: false,
    errorEnabled: true,
    error: false,
    errorMessage: ''
  }
}
