import { EpRadio } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

const meta: Meta<typeof EpRadio> = {
  title: 'Components/Radio',
  component: EpRadio,
  argTypes: {
    id: { table: { disable: true } },
    label: { table: { disable: true } },
    name: { table: { disable: true } },
    value: { table: { disable: true } },
    disabled: { table: { disable: true } },
    required: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof EpRadio>;

export const Radio: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState('');

    const radioButtons = [
      { id: 'radio1', label: 'Mild', name: 'hotsauce', value: 'Mild' },
      { id: 'radio2', label: 'Hot', name: 'hotsauce', value: 'Hot' },
      { id: 'radio3', label: 'Extreme', name: 'hotsauce', value: 'Extreme' },
      { id: 'radio4', label: 'Absolute Fire (Sold out)', name: 'hotsauce', value: 'Absolute Fire (Sold out)', disabled: true },
    ];

    const handleChange = (value: string) => () => {
      setSelectedOption(value);
      console.log('Selected:', value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2>Hot Sauce:</h2>
        {radioButtons.map(radio => (
          <EpRadio
            key={radio.id}
            {...radio}
            checked={selectedOption === radio.value}
            onChange={handleChange(radio.value)}
          />
        ))}
        <EpRadio
          id="radio5"
          label="Custom Label"
          name="hotsauce"
          value="Custom Label"
          checked={selectedOption === 'Custom Label'}
          onChange={handleChange('Custom Label')}
        >
          <p>Custom Label with <span style={{ display: 'inline-block', transform: 'rotate(346deg)' }}>HTML</span></p>
        </EpRadio>
        <p style={{ marginTop: 'auto' }}>Selected Option: {selectedOption}</p>
      </div>
    );
  },
};
