import { EpMultiSearch } from '@ericpitcock/epicenter-react-components';
import type { Meta, StoryObj } from '@storybook/react';

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
