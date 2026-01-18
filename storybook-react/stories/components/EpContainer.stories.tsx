import { EpContainer } from '@ericpitcock/epicenter-react-components';
import type { Meta, StoryObj } from '@storybook/react';
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
