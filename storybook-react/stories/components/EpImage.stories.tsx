import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpImage } from '@ericpitcock/epicenter-react-components';

const meta: Meta<typeof EpImage> = {
  title: 'Components/Image',
  component: EpImage,
  argTypes: {
    src: {
      name: 'Source URL',
      control: {
        type: 'text',
      },
      table: {
        category: 'Base Props',
      },
    },
    alt: {
      name: 'Alt Text',
      control: {
        type: 'text',
      },
      table: {
        category: 'Base Props',
      },
    },
    lazy: {
      name: 'Lazy Load',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Base Props',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpImage>;

export const Image: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Sample image',
    lazy: false,
  },
};
