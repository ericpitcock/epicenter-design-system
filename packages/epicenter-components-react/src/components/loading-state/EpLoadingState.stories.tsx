import { EpLoadingState } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { paddedBg } from '../../../storybook/helpers/decorators';

const meta: Meta<typeof EpLoadingState> = {
  title: 'Components/LoadingState',
  component: EpLoadingState,
  decorators: [paddedBg],
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

export const LoadingState: Story = {
  render: (args: any) => (
    <EpLoadingState message={{ message: args.message }} />
  ),
  args: {
    message: 'Loading data...',
  },
};
