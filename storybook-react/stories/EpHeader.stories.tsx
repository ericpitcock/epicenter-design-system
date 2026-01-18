import type { Meta, StoryObj } from '@storybook/react';
import { EpHeader, EpButton } from '@ericpitcock/epicenter-react-components';

const meta = {
  title: 'Components/Layout/EpHeader',
  component: EpHeader,
  parameters: {
    layout: 'fullwidth',
  },
} satisfies Meta<typeof EpHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    left: <div>Left Content</div>,
    center: <div>Center Content</div>,
    right: <div>Right Content</div>,
  },
};

export const WithButtons: Story = {
  args: {
    left: <h2>My App</h2>,
    center: <nav>Navigation</nav>,
    right: (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <EpButton>Login</EpButton>
        <EpButton className="ep-button-var--primary">Sign Up</EpButton>
      </div>
    ),
  },
};

export const LeftOnly: Story = {
  args: {
    left: <h1>Application Title</h1>,
  },
};

export const CenterOnly: Story = {
  args: {
    center: <h2>Centered Title</h2>,
  },
};

export const RightOnly: Story = {
  args: {
    right: <div>Right Aligned Content</div>,
  },
};
