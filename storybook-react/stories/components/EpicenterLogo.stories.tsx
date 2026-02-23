import { EpicenterLogo } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof EpicenterLogo> = {
  title: 'Components/Logo',
  component: EpicenterLogo,
};

export default meta;
type Story = StoryObj<typeof EpicenterLogo>;

export const Logo: Story = {
  render: () => (
    <div style={{ width: '200px', height: '200px' }}>
      <EpicenterLogo />
    </div>
  ),
};
