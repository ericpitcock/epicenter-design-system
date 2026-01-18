import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EpicenterLogo from '../../../packages/epicenter-react-components/src/components/logo/EpicenterLogo';

const meta: Meta<typeof EpicenterLogo> = {
  title: 'Components/EpicenterLogo',
  component: EpicenterLogo,
};

export default meta;
type Story = StoryObj<typeof EpicenterLogo>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '200px', height: '200px' }}>
      <EpicenterLogo />
    </div>
  ),
};
