import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpTextarea } from '@ericpitcock/epicenter-react-components';

const meta: Meta<typeof EpTextarea> = {
  title: 'Components/Textarea',
  component: EpTextarea,
  argTypes: {
    id: { table: { disable: true } },
    name: { table: { disable: true } },
    value: { table: { disable: true } },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea'
    },
    required: {
      control: 'boolean',
      description: 'Makes the field required'
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows'
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length'
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpTextarea>;

export const Textarea: Story = {
  render: (args: any) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '400px' }}>
        <EpTextarea
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
          Character count: {value.length}{args.maxLength ? ` / ${args.maxLength}` : ''}
        </p>
      </div>
    );
  },
  args: {
    placeholder: 'Enter your text here...',
    rows: 4,
    disabled: false,
    required: false,
    maxLength: undefined
  },
};
