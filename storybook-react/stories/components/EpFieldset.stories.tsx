import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpFieldset } from '@ericpitcock/epicenter-react-components';
import { EpCheckbox } from '@ericpitcock/epicenter-react-components';

const meta: Meta<typeof EpFieldset> = {
  title: 'Components/Fieldset',
  component: EpFieldset,
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
      table: { category: 'Base Props' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpFieldset>;

export const Fieldset: Story = {
  render: (args: any) => (
    <EpFieldset {...args}>
      <p>Form elements go here</p>
    </EpFieldset>
  ),
  args: {
    label: 'User Preferences',
  },
};
