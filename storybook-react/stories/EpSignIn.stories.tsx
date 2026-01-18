import type { Meta, StoryObj } from '@storybook/react';
import { EpSignIn } from '@ericpitcock/epicenter-react-components';

const meta = {
  title: 'Components/Auth/EpSignIn',
  component: EpSignIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EpSignIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSignIn: (email, password) => {
      console.log('Sign in:', { email, password });
    },
    onReset: (email) => {
      console.log('Password reset for:', email);
    },
  },
};

export const WithContainerProps: Story = {
  args: {
    containerProps: {
      width: '500px',
      style: {
        '--container-background': 'var(--interface-surface)',
      },
    },
    onSignIn: (email, password) => {
      console.log('Sign in:', { email, password });
    },
  },
};

export const CustomHandlers: Story = {
  args: {
    onSignIn: (email, password) => {
      alert(`Signing in with ${email}`);
    },
    onReset: (email) => {
      alert(`Sending password reset to ${email}`);
    },
  },
};
