import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconBrowserComponent } from './IconBrowserComponent';

const meta: Meta<typeof IconBrowserComponent> = {
  title: 'Icon Browser',
  component: IconBrowserComponent,
  parameters: {
    docs: {
      description: {
        component: 'Browse and customize all Epicenter Icons. Search by name, tag, or category.',
      },
    },
  },
  argTypes: {
    size: {
      name: 'Size',
      control: { type: 'range', min: 12, max: 128, step: 4 },
    },
    color: {
      name: 'Color',
      control: { type: 'color' },
    },
    strokeWidth: {
      name: 'Stroke Width',
      control: { type: 'range', min: 0.5, max: 4, step: 0.1 },
    },
    showProblematicOnly: {
      name: 'Show Problematic Only',
      control: { type: 'boolean' },
    },
    hideProblematic: {
      name: 'Hide Problematic',
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconBrowserComponent>;

export const IconBrowser: Story = {
  args: {
    size: 32,
    color: '#a57cedff',
    strokeWidth: 1,
    showProblematicOnly: false,
    hideProblematic: false,
  },
};
