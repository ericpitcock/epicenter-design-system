import type { Meta, StoryObj } from '@storybook/react';
import { EpFooter } from '@ericpitcock/epicenter-react-components';

const meta = {
  title: 'Components/Layout/EpFooter',
  component: EpFooter,
  parameters: {
    layout: 'fullwidth',
  },
} satisfies Meta<typeof EpFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    left: <div>© 2024 Company Name</div>,
    center: <div>Center Content</div>,
    right: <div>Privacy | Terms</div>,
  },
};

export const SimpleFooter: Story = {
  args: {
    center: <div>© 2024 All Rights Reserved</div>,
  },
};

export const WithLinks: Story = {
  args: {
    left: <div>© 2024 Epicenter Design System</div>,
    right: (
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
      </div>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    left: <div>Left Section</div>,
    center: <div>Center Section</div>,
    right: <div>Right Section</div>,
  },
};
