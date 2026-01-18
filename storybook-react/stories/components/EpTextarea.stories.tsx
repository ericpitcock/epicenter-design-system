import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpTextarea } from '@ericpitcock/epicenter-react-components';

const meta: Meta<typeof EpTextarea> = {
  title: 'Components/Textarea',
  component: EpTextarea,
  argTypes: {
    placeholder: {
      name: 'Placeholder',
      control: { type: 'text' },
      table: { category: 'Base Props' },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
      table: { category: 'Base Props' },
    },
    required: {
      name: 'Required',
      control: { type: 'boolean' },
      table: { category: 'Base Props' },
    },
    rows: {
      name: 'Rows',
      control: { type: 'number' },
      table: { category: 'Base Props' },
    },
    maxLength: {
      name: 'Max Length',
      control: { type: 'number' },
      table: { category: 'Base Props' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpTextarea>;

export const Default: Story = {
  render: (args: any) => {
    const [value, setValue] = useState('');

    return (
      <div>
        <EpTextarea
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p style={{ marginTop: '10px' }}>Character count: {value.length}</p>
      </div>
    );
  },
  args: {
    placeholder: 'Enter your text here...',
    rows: 4,
    disabled: false,
    required: false,
  },
};

export const WithMaxLength: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 200;

    return (
      <div>
        <EpTextarea
          placeholder="Max 200 characters"
          rows={6}
          maxLength={maxLength}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p style={{ marginTop: '10px' }}>
          {value.length} / {maxLength} characters
        </p>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <EpTextarea
      placeholder="This textarea is disabled"
      value="You cannot edit this text"
      disabled={true}
    />
  ),
};
