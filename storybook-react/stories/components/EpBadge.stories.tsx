import React, { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EpBadge from '../../../packages/epicenter-react-components/src/components/badge/EpBadge';

const meta: Meta<typeof EpBadge> = {
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
type Story = StoryObj<typeof EpBadge>;

export const Badge: Story = {
  render: (args: any) => {
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
