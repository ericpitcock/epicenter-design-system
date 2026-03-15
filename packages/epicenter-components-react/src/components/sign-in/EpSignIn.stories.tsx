import { EpSignIn } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { centeredCyanBlueGradient } from '../../../storybook/helpers/decorators';

const meta = {
  title: 'Components/SignIn',
  component: EpSignIn,
  decorators: [centeredCyanBlueGradient],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EpSignIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  args: {},
};
