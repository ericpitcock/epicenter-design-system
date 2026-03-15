import { EpInput } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { componentNames, useIconComponent } from '../../../storybook/helpers/useIcons'
import { paddedSurface } from '../../../storybook/helpers/decorators'

const meta: Meta<typeof EpInput> = {
  title: 'Components/Input',
  component: EpInput,
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
    },
    iconLeftName: {
      name: 'Icon Left',
      options: componentNames,
      control: { type: 'select' },
      table: { category: 'Icons' },
    },
    iconRightName: {
      name: 'Icon Right',
      options: componentNames,
      control: { type: 'select' },
      table: { category: 'Icons' },
    },
  }
}

export default meta
type Story = StoryObj<typeof EpInput>

export const Input: Story = {
  render: (args: any) => {
    const [value, setValue] = useState('')
    const IconLeft = useIconComponent(args.iconLeftName)
    const IconRight = useIconComponent(args.iconRightName)

    return (
      <div style={{ width: '400px' }}>
        <EpInput
          {...args}
          value={value}
          onChange={setValue}
          iconLeft={IconLeft ? <IconLeft /> : undefined}
          iconRight={IconRight ? <IconRight /> : undefined}
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
    errorMessage: '',
    iconLeftName: 'None',
    iconRightName: 'None',
  }
}
