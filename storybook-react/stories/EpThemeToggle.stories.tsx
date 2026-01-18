import type { Meta, StoryObj } from '@storybook/react';
import { EpThemeToggle } from '@ericpitcock/epicenter-react-components';

const meta = {
  title: 'Components/Theme/EpThemeToggle',
  component: EpThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EpThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClassName: Story = {
  args: {
    className: 'custom-theme-toggle',
  },
};
