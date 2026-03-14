import { EpDivider } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof EpDivider> = {
  title: 'Components/Divider',
  component: EpDivider,
  argTypes: {
    direction: {
      name: 'Direction',
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
      table: {
        category: 'Base Props',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpDivider>;

export const Divider: Story = {
  args: {
    direction: 'horizontal',
  },
};
