import { EpSelect } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { componentNames, useIconComponent } from '../../../storybook/helpers/useIcons'
import { paddedSurface } from '../../../storybook/helpers/decorators'

const meta: Meta<typeof EpSelect> = {
  title: 'Components/Select',
  component: EpSelect,
  decorators: [paddedSurface],
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
    options: {
      table: { disable: true }
    },
    label: {
      control: 'text',
      description: 'Label text for the select'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected'
    },
    size: {
      control: 'radio',
      options: ['small', 'default', 'large', 'xlarge'],
      description: 'Size variant'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select'
    },
    errorEnabled: {
      table: { disable: true }
    },
    error: {
      control: 'boolean',
      description: 'Displays select in error state'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display'
    },
    iconLeftName: {
      name: 'Icon Left',
      options: componentNames,
      control: { type: 'select' },
      table: { category: 'Icons' },
    },
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

export const Select: Story = {
  render: (args: any) => {
    const [value, setValue] = useState('')
    const IconLeft = useIconComponent(args.iconLeftName)

    return (
      <div style={{ width: '300px' }}>
        <EpSelect
          {...args}
          options={sampleOptions}
          value={value}
          onChange={setValue}
          iconLeft={IconLeft ? <IconLeft /> : undefined}
        />
      </div>
    )
  },
  args: {
    label: 'Choose an option',
    placeholder: 'Select an option',
    size: 'default',
    disabled: false,
    errorEnabled: true,
    error: false,
    errorMessage: '',
    iconLeftName: 'None',
  }
}
