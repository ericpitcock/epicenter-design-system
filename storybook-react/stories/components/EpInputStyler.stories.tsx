import type { Meta, StoryObj } from '@storybook/react'
import { EpInputStyler } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpInputStyler> = {
  title: 'Components/EpInputStyler',
  component: EpInputStyler,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
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

export const WithInput: Story = {
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

export const WithClearButton: Story = {
  args: {
    label: 'Search',
    clearable: true,
    hasInput: true,
    iconLeft: searchIcon,
    children: <input className="ep-input" defaultValue="Sample text" />,
    onClear: () => alert('Clear clicked!')
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <EpInputStyler {...args} />
    </div>
  )
}

export const WithError: Story = {
  args: {
    label: 'Email',
    errorEnabled: true,
    error: true,
    errorMessage: 'Please enter a valid email address',
    children: <input className="ep-input" defaultValue="invalid@" type="email" />
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <EpInputStyler {...args} />
    </div>
  )
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    children: <input className="ep-input ep-input--disabled" disabled value="Cannot edit" />
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <EpInputStyler {...args} />
    </div>
  )
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <EpInputStyler
        label="Small"
        size="small"
        children={<input className="ep-input ep-input--small" placeholder="Small input" />}
      />
      <EpInputStyler
        label="Default"
        size="default"
        children={<input className="ep-input" placeholder="Default input" />}
      />
      <EpInputStyler
        label="Large"
        size="large"
        children={<input className="ep-input ep-input--large" placeholder="Large input" />}
      />
      <EpInputStyler
        label="XLarge"
        size="xlarge"
        children={<input className="ep-input ep-input--xlarge" placeholder="XLarge input" />}
      />
    </div>
  )
}

export const WithSelect: Story = {
  args: {
    label: 'Country',
    iconRight: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7 10l5 5 5-5z" fill="currentColor"/>
      </svg>
    ),
    iconRightVisible: true,
    children: (
      <select className="ep-select">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
      </select>
    )
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <EpInputStyler {...args} />
    </div>
  )
}
