import { EpDatePicker } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { paddedSurface } from '../../../storybook/helpers/decorators';

const meta = {
  title: 'Components/DatePicker',
  component: EpDatePicker,
  decorators: [paddedSurface],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EpDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePicker: Story = {
  args: {
    mode: 'single',
    dateFormat: 'Y-m-d',
    enableCloseOnSelect: true,
    placeholder: 'Select date...',
  },
};
