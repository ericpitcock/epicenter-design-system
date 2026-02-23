import { EpCheckbox } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

const meta: Meta<typeof EpCheckbox> = {
  title: 'Components/Checkbox',
  component: EpCheckbox,
  argTypes: {
    id: { table: { disable: true } },
    name: { table: { disable: true } },
    value: { table: { disable: true } },
    checked: { table: { disable: true } },
    disabled: { table: { disable: true } },
    indeterminate: { table: { disable: true } },
    label: { table: { disable: true } },
    required: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof EpCheckbox>;

export const Checkbox: Story = {
  render: () => {
    const [checkboxes, setCheckboxes] = useState([
      { id: 'checkbox1', label: 'Checked', name: 'checkboxes', value: 'checked', checked: true },
      { id: 'checkbox2', label: 'Indeterminate', name: 'checkboxes', value: 'indeterminate', checked: false, indeterminate: true },
      { id: 'checkbox3', label: 'Disabled', name: 'checkboxes', value: 'disabled', checked: false, disabled: true },
    ]);
    const [customLabel, setCustomLabel] = useState(true);

    const handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckboxes(prev => prev.map(cb => 
        cb.id === id ? { ...cb, checked: event.target.checked } : cb
      ));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2>Checkbox States</h2>
        {checkboxes.map(checkbox => (
          <EpCheckbox
            key={checkbox.id}
            {...checkbox}
            onChange={handleChange(checkbox.id)}
          />
        ))}
        <EpCheckbox
          id="checkbox4"
          label="Custom Label"
          name="checkboxes"
          value="custom"
          checked={customLabel}
          onChange={(e) => setCustomLabel(e.target.checked)}
        >
          <p>Custom Label with <span style={{ display: 'inline-block', transform: 'rotate(346deg)' }}>HTML</span></p>
        </EpCheckbox>
        <p style={{ marginTop: 'auto' }}>
          Selected: {[...checkboxes.filter(cb => cb.checked).map(cb => cb.value), customLabel && 'custom'].filter(Boolean).join(', ')}
        </p>
      </div>
    );
  },
};
