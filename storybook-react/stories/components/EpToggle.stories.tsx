import { EpToggle } from '@ericpitcock/epicenter-react-components';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

const meta: Meta<typeof EpToggle> = {
  title: 'Components/Toggle',
  component: EpToggle,
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
