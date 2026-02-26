import { EpInputStyler } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EpInputStyler> = {
  title: 'Components/InputStyler',
  component: EpInputStyler,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input'
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large', 'xlarge'],
      description: 'Size variant'
    },
    disabled: {
      control: 'boolean',
      description: 'Applies disabled styling'
    },
    error: {
      control: 'boolean',
      description: 'Applies error styling'
    },
    errorEnabled: {
      control: 'boolean',
      description: 'Enables error message display'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display'
    },
    clearable: {
      control: 'boolean',
      description: 'Shows clear button when input has value'
    },
    hasInput: {
      control: 'boolean',
      description: 'Whether the input has a value'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpInputStyler>

const searchIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
  </svg>
)

const userIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
  </svg>
)

export const InputStyler: Story = {
  args: {
    label: 'Username',
    children: <input className="ep-input" placeholder="Enter username" />,
    iconLeft: userIcon
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <EpInputStyler {...args} />
    </div>
  )
}
