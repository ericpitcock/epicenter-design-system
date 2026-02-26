import { EpThemeToggle, ThemeProvider } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ThemeToggle',
  component: EpThemeToggle,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof EpThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeToggle: Story = {
  args: {},
};
