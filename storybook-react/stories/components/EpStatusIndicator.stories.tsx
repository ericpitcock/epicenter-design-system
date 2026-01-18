import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EpStatusIndicator from '../../../packages/epicenter-react-components/src/components/status-indicator/EpStatusIndicator';

const meta: Meta<typeof EpStatusIndicator> = {
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
type Story = StoryObj<typeof EpStatusIndicator>;

export const Default: Story = {
  render: (args: any) => (
    <EpStatusIndicator pulse={args.pulse}>
      {args.label}
    </EpStatusIndicator>
  ),
  args: {
    pulse: false,
    label: 'Online',
  },
};

export const Pulsing: Story = {
  render: (args: any) => (
    <EpStatusIndicator pulse={true}>
      {args.label}
    </EpStatusIndicator>
  ),
  args: {
    label: 'Processing...',
  },
};
