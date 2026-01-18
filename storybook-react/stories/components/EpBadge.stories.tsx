import React, { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpBadge } from '@ericpitcock/epicenter-react-components';

type BadgeStoryProps = {
  classes?: 'Primary' | 'Success' | 'Warning' | 'Danger' | 'Custom';
  label?: string;
};

const meta: Meta<BadgeStoryProps> = {
  title: 'Components/Badge',
  component: EpBadge,
  argTypes: {
    classes: {
      name: 'Style',
      options: ['Primary', 'Success', 'Warning', 'Danger', 'Custom'],
      control: {
        type: 'radio',
      },
      table: {
        category: 'Styles',
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
type Story = StoryObj<BadgeStoryProps>;

export const Badge: Story = {
  render: (args) => {
    const variantMapping: Record<string, string> = {
      Primary: 'badge-variant-primary',
      Success: 'badge-variant-success',
      Warning: 'badge-variant-warning',
      Danger: 'badge-variant-danger',
    };

    const variantClass = args.classes ? variantMapping[args.classes] || '' : '';

    return (
      <EpBadge className={variantClass}>
        {args.label}
      </EpBadge>
    );
  },
  args: {
    label: 'Subscribed',
    classes: 'Primary',
  },
};
