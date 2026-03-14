import { EpSignIn } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/SignIn',
  component: EpSignIn,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EpSignIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  args: {},
};
