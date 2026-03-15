import { EpicenterLogo } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { centeredCyanBlueGradient } from '../../../storybook/helpers/decorators';

const meta: Meta<typeof EpicenterLogo> = {
  title: 'Components/Logo',
  component: EpicenterLogo,
  decorators: [centeredCyanBlueGradient],
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
