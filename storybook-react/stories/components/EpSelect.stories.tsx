import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpSelect } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpSelect> = {
  title: 'Components/EpSelect',
  component: EpSelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the select'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected'
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large', 'xlarge'],
      description: 'Size variant'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select'
    },
    errorEnabled: {
      control: 'boolean',
      description: 'Enables error state and message display'
    },
    error: {
      control: 'boolean',
      description: 'Displays select in error state'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpSelect>

const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Disabled Option', value: '4', disabled: true },
  { label: 'Option 5', value: '5' }
]

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div style={{ width: '300px' }}>
        <EpSelect
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  args: {
    label: 'Choose an option',
    options: sampleOptions,
    placeholder: 'Select an option'
  }
}

export const WithValue: Story = {
  render: (args) => {
    const [value, setValue] = useState('2')
    return (
      <div style={{ width: '300px' }}>
        <EpSelect
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  args: {
    label: 'Pre-selected',
    options: sampleOptions,
    placeholder: 'Select an option'
  }
}

export const WithIcon: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    
    const categoryIcon = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
      </svg>
    )
    
    return (
      <div style={{ width: '300px' }}>
        <EpSelect
          {...args}
          value={value}
          onChange={setValue}
          iconLeft={categoryIcon}
        />
      </div>
    )
  },
  args: {
    label: 'Category',
    options: sampleOptions,
    placeholder: 'Select a category'
  }
}

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div style={{ width: '300px' }}>
        <EpSelect
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  args: {
    label: 'Required Field',
    options: sampleOptions,
    placeholder: 'Please select',
    errorEnabled: true,
    error: true,
    errorMessage: 'This field is required'
  }
}

export const Sizes: Story = {
  render: () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
        <EpSelect
          label="Small Size"
          size="small"
          options={sampleOptions}
          value={value1}
          onChange={setValue1}
        />
        <EpSelect
          label="Default Size"
          size="default"
          options={sampleOptions}
          value={value2}
          onChange={setValue2}
        />
        <EpSelect
          label="Large Size"
          size="large"
          options={sampleOptions}
          value={value3}
          onChange={setValue3}
        />
        <EpSelect
          label="XLarge Size"
          size="xlarge"
          options={sampleOptions}
          value={value4}
          onChange={setValue4}
        />
      </div>
    )
  }
}

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState('2')
    return (
      <div style={{ width: '300px' }}>
        <EpSelect
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
  args: {
    label: 'Disabled Select',
    options: sampleOptions,
    disabled: true
  }
}
