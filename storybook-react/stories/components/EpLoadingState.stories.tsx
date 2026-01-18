import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EpLoadingState from '../../../packages/epicenter-react-components/src/components/loading-state/EpLoadingState';

const meta: Meta<typeof EpLoadingState> = {
  title: 'Components/LoadingState',
  component: EpLoadingState,
  argTypes: {
    message: {
      name: 'Message',
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
type Story = StoryObj<typeof EpLoadingState>;

export const Default: Story = {
  render: (args: any) => (
    <EpLoadingState message={{ message: args.message }} />
  ),
  args: {
    message: 'Loading data...',
  },
};

export const NoMessage: Story = {
  render: () => <EpLoadingState />,
};
