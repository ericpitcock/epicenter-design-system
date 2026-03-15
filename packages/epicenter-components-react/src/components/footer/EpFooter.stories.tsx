import { EpFooter } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { paddedBg } from '../../../storybook/helpers/decorators';

const meta = {
  title: 'Components/Footer',
  component: EpFooter,
  decorators: [paddedBg],
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
