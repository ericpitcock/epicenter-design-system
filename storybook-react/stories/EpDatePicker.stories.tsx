import type { Meta, StoryObj } from '@storybook/react';
import { EpDatePicker } from '@ericpitcock/epicenter-react-components';

const meta = {
  title: 'Components/Form Inputs/EpDatePicker',
  component: EpDatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
    },
    positionX: {
      control: 'select',
      options: ['auto', 'left', 'right'],
    },
    positionY: {
      control: 'select',
      options: ['auto', 'above', 'below'],
    },
    dateFormat: {
      control: 'text',
    },
    enableCloseOnSelect: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof EpDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleDate: Story = {
  args: {
    mode: 'single',
    dateFormat: 'Y-m-d',
    enableCloseOnSelect: true,
    placeholder: 'Select date...',
  },
};

export const MultipleDates: Story = {
  args: {
    mode: 'multiple',
    dateFormat: 'Y-m-d',
    enableCloseOnSelect: false,
    placeholder: 'Select multiple dates...',
  },
};

export const DateRange: Story = {
  args: {
    mode: 'range',
    dateFormat: 'Y-m-d',
    enableCloseOnSelect: false,
    placeholder: 'Select date range...',
  },
};

export const CustomFormat: Story = {
  args: {
    mode: 'single',
    dateFormat: 'F j, Y',
    enableCloseOnSelect: true,
    placeholder: 'Select date...',
  },
};

export const PositionedAbove: Story = {
  args: {
    mode: 'single',
    positionY: 'above',
    dateFormat: 'Y-m-d',
    placeholder: 'Opens above...',
  },
};

export const PositionedLeft: Story = {
  args: {
    mode: 'single',
    positionX: 'left',
    dateFormat: 'Y-m-d',
    placeholder: 'Opens to left...',
  },
};

export const WithCallbacks: Story = {
  args: {
    mode: 'single',
    dateFormat: 'Y-m-d',
    onChange: (dates, dateStr) => {
      console.log('Selected dates:', dates);
      console.log('Date string:', dateStr);
    },
    onOpen: () => {
      console.log('Calendar opened');
    },
  },
};
