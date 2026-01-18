import { EpToggleButton } from '@ericpitcock/epicenter-react-components';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

const meta: Meta<typeof EpToggleButton> = {
  title: 'Components/ToggleButton',
  component: EpToggleButton,
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
      table: { category: 'Base Props' },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
      table: { category: 'Base Props' },
    },
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: { type: 'radio' },
      table: { category: 'Base Props' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpToggleButton>;

export const ToggleButton: Story = {
  render: (args: any) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <EpToggleButton
        {...args}
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />
    );
  },
  args: {
    label: 'Toggle Me',
    disabled: false,
    size: 'default',
    activeClass: 'button-variant-primary',
  },
};
