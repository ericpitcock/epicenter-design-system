import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpFlex } from '@ericpitcock/epicenter-react-components';

const meta: Meta<typeof EpFlex> = {
  title: 'Components/Flex',
  component: EpFlex,
};

export default meta;
type Story = StoryObj<typeof EpFlex>;

export const Default: Story = {
  render: () => (
    <EpFlex>
      <div style={{ padding: '10px', background: '#e0e0e0' }}>Item 1</div>
      <div style={{ padding: '10px', background: '#d0d0d0' }}>Item 2</div>
      <div style={{ padding: '10px', background: '#c0c0c0' }}>Item 3</div>
    </EpFlex>
  ),
};
