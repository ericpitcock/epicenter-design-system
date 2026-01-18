import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpItemCount } from '@ericpitcock/epicenter-react-components';

const meta: Meta<typeof EpItemCount> = {
  title: 'Components/ItemCount',
  component: EpItemCount,
  argTypes: {
    count: {
      name: 'Count',
      control: {
        type: 'number',
      },
      table: {
        category: 'Base Props',
      },
    },
    singular: {
      name: 'Singular',
      control: {
        type: 'text',
      },
      table: {
        category: 'Base Props',
      },
    },
    plural: {
      name: 'Plural',
      control: {
        type: 'text',
      },
      table: {
        category: 'Base Props',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpItemCount>;

export const Singular: Story = {
  args: {
    count: 1,
    singular: 'item',
    plural: 'items',
  },
};

export const Plural: Story = {
  args: {
    count: 5,
    singular: 'item',
    plural: 'items',
  },
};
