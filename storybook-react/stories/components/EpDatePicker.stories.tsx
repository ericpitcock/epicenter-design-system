import { EpDatePicker } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/DatePicker',
  component: EpDatePicker,
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
