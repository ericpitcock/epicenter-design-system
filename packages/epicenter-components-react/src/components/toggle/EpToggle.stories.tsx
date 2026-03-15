import { EpToggle } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { centeredSurface } from '../../../storybook/helpers/decorators';

const meta: Meta<typeof EpToggle> = {
  title: 'Components/Toggle',
  component: EpToggle,
  decorators: [centeredSurface],
  argTypes: {
    isActive: {
      control: 'boolean',
      description: 'Toggle state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the toggle'
    },
    label: {
      control: 'text',
      description: 'Label text'
    },
    size: {
      control: 'radio',
      options: ['small', 'default', 'large'],
      description: 'Size variant'
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpToggle>;

export const Toggle: Story = {
  render: (args: any) => {
    const [isActive, setIsActive] = useState(args.isActive || false);

    return (
      <EpToggle
        {...args}
        isActive={isActive}
        onToggle={() => setIsActive(!isActive)}
      />
    );
  },
  args: {
    isActive: false,
    disabled: false,
    label: 'Enable notifications',
    size: 'default',
  },
};
