import { EpHeader } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Header',
  component: EpHeader,
  parameters: {
    layout: 'fullwidth',
  },
} satisfies Meta<typeof EpHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    left: <div>Left Content</div>,
    center: <div>Center Content</div>,
    right: <div>Right Content</div>,
  },
};
