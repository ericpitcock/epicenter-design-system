import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EpDivider from '../../../packages/epicenter-react-components/src/components/divider/EpDivider';

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

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '100px', alignItems: 'center' }}>
      <span>Left content</span>
      <EpDivider direction="vertical" />
      <span>Right content</span>
    </div>
  ),
};
