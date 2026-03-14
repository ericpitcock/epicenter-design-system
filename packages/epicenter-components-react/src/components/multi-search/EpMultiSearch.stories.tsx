import { EpMultiSearch } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/MultiSearch',
  component: EpMultiSearch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EpMultiSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiSearch: Story = {
  args: {
    placeholder: 'Search...',
    icon: true,
    width: '600px',
  },
};
