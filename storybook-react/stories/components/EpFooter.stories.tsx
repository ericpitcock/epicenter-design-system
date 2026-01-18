import { EpFooter } from '@ericpitcock/epicenter-react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Footer',
  component: EpFooter,
  parameters: {
    layout: 'fullwidth',
  },
} satisfies Meta<typeof EpFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {
  args: {
    left: <div>© 2024 Company Name</div>,
    center: <div>Center Content</div>,
    right: <div>Privacy | Terms</div>,
  },
};
