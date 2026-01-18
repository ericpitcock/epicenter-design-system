import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EpContainer from '../../../packages/epicenter-react-components/src/components/container/EpContainer';

const meta: Meta<typeof EpContainer> = {
  title: 'Components/Container',
  component: EpContainer,
};

export default meta;
type Story = StoryObj<typeof EpContainer>;

export const Default: Story = {
  render: () => (
    <EpContainer>
      <p>Main content area</p>
    </EpContainer>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <EpContainer
      header={<h2>Header Section</h2>}
      footer={<p>Footer Section</p>}
    >
      <p>Main content area</p>
      <p>More content...</p>
    </EpContainer>
  ),
};
