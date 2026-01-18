import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpToggle } from '@ericpitcock/epicenter-react-components';

const meta: Meta<typeof EpToggle> = {
  title: 'Components/Toggle',
  component: EpToggle,
  argTypes: {
    isActive: {
      name: 'Is Active',
      control: { type: 'boolean' },
      table: { category: 'Base Props' },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
      table: { category: 'Base Props' },
    },
    label: {
      name: 'Label',
      control: { type: 'text' },
      table: { category: 'Base Props' },
    },
    size: {
      name: 'Size',
      options: ['small', 'default', 'large'],
      control: { type: 'radio' },
      table: { category: 'Base Props' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpToggle>;

export const Default: Story = {
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

export const Active: Story = {
  render: (args: any) => {
    const [isActive, setIsActive] = useState(true);

    return (
      <EpToggle
        isActive={isActive}
        label="Enabled"
        onToggle={() => setIsActive(!isActive)}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <EpToggle
      isActive={false}
      disabled={true}
      label="Disabled toggle"
    />
  ),
};
