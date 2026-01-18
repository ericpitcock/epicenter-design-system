import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpToggleButton } from '@ericpitcock/epicenter-react-components';

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

export const Default: Story = {
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

export const WithIcon: Story = {
  render: () => {
    const [isActive, setIsActive] = useState(false);

    return (
      <EpToggleButton
        label="Favorite"
        icon={<span>⭐</span>}
        isActive={isActive}
        activeClass="button-variant-warning"
        onClick={() => setIsActive(!isActive)}
      />
    );
  },
};

export const Group: Story = {
  render: () => {
    const [selected, setSelected] = useState('center');

    const alignments = [
      { value: 'left', label: 'Left', icon: '⬅️' },
      { value: 'center', label: 'Center', icon: '↔️' },
      { value: 'right', label: 'Right', icon: '➡️' },
    ];

    return (
      <div style={{ display: 'flex', gap: '0' }}>
        {alignments.map(align => (
          <EpToggleButton
            key={align.value}
            label={align.label}
            icon={<span>{align.icon}</span>}
            isActive={selected === align.value}
            activeClass="button-variant-primary"
            onClick={() => setSelected(align.value)}
          />
        ))}
      </div>
    );
  },
};
