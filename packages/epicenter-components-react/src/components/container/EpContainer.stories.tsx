import { EpContainer } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta<typeof EpContainer> = {
  title: 'Components/Container',
  component: EpContainer,
};

export default meta;
type Story = StoryObj<typeof EpContainer>;

export const Container: Story = {
  render: () => (
    <EpContainer>
      <p>Main content area</p>
    </EpContainer>
  ),
};
