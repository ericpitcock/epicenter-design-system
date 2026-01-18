import { EpDivider } from '@ericpitcock/epicenter-react-components';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof EpDivider> = {
  title: 'Components/Divider',
  component: EpDivider,
  argTypes: {
    direction: {
      name: 'Direction',
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
      table: {
        category: 'Base Props',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpDivider>;

export const Divider: Story = {
  args: {
    direction: 'horizontal',
  },
};
