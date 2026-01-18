import type { Meta, StoryObj } from '@storybook/react';
import { EpMultiSearch } from '@ericpitcock/epicenter-react-components';

const meta = {
  title: 'Components/Search/EpMultiSearch',
  component: EpMultiSearch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof EpMultiSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    icon: true,
    width: '600px',
    onEnter: (query) => {
      console.log('Query:', query);
    },
  },
};

export const NoIcon: Story = {
  args: {
    placeholder: 'Enter search terms...',
    icon: false,
    width: '600px',
  },
};

export const CustomStyling: Story = {
  args: {
    placeholder: 'Custom styled search...',
    icon: true,
    width: '700px',
    height: '6rem',
    borderRadius: '1rem',
    backgroundColor: 'var(--interface-surface)',
  },
};

export const WithCallbacks: Story = {
  args: {
    placeholder: 'Search with callbacks...',
    icon: true,
    width: '600px',
    onInput: (value) => {
      console.log('Input:', value);
    },
    onEnter: (query) => {
      console.log('Enter pressed:', query);
    },
    onQueryClose: (query) => {
      console.log('Query closed:', query);
    },
    onClear: (query) => {
      console.log('Cleared:', query);
    },
  },
};

export const OperatorSupport: Story = {
  args: {
    placeholder: 'Try: term1, AND, term2, OR, term3...',
    icon: true,
    width: '700px',
    onEnter: (query) => {
      console.log('AND queries:', query.and);
      console.log('OR queries:', query.or);
    },
  },
};
