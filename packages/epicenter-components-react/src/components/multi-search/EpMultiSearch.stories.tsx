import { EpMultiSearch } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { paddedSurface } from '../../../storybook/helpers/decorators';

const meta = {
  title: 'Components/MultiSearch',
  component: EpMultiSearch,
  decorators: [paddedSurface],
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
