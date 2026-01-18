import { EpStatusIndicator } from '@ericpitcock/epicenter-react-components';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

type StatusIndicatorStoryProps = {
  pulse?: boolean;
  label?: string;
};

const meta: Meta<StatusIndicatorStoryProps> = {
  title: 'Components/StatusIndicator',
  component: EpStatusIndicator,
  argTypes: {
    pulse: {
      name: 'Pulse',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Base Props',
      },
    },
    label: {
      name: 'Label',
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
type Story = StoryObj<StatusIndicatorStoryProps>;

export const StatusIndicator: Story = {
  render: (args) => (
    <EpStatusIndicator pulse={args.pulse}>
      {args.label}
    </EpStatusIndicator>
  ),
  args: {
    pulse: false,
    label: 'Online',
  },
};
