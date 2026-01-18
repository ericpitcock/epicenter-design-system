import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EpFieldset } from '@ericpitcock/epicenter-react-components';
import { EpCheckbox } from '@ericpitcock/epicenter-react-components';

const meta: Meta<typeof EpFieldset> = {
  title: 'Components/Fieldset',
  component: EpFieldset,
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
      table: { category: 'Base Props' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpFieldset>;

export const Default: Story = {
  render: (args: any) => (
    <EpFieldset {...args}>
      <p>Form elements go here</p>
    </EpFieldset>
  ),
  args: {
    label: 'User Preferences',
  },
};

export const WithCheckboxes: Story = {
  render: () => {
    const [options, setOptions] = React.useState({
      notifications: true,
      newsletter: false,
      updates: true,
    });

    return (
      <EpFieldset label="Email Settings">
        <EpCheckbox
          id="notifications"
          label="Receive notifications"
          name="email-settings"
          value="notifications"
          checked={options.notifications}
          onChange={(e) => setOptions({ ...options, notifications: e.target.checked })}
        />
        <EpCheckbox
          id="newsletter"
          label="Subscribe to newsletter"
          name="email-settings"
          value="newsletter"
          checked={options.newsletter}
          onChange={(e) => setOptions({ ...options, newsletter: e.target.checked })}
        />
        <EpCheckbox
          id="updates"
          label="Product updates"
          name="email-settings"
          value="updates"
          checked={options.updates}
          onChange={(e) => setOptions({ ...options, updates: e.target.checked })}
        />
      </EpFieldset>
    );
  },
};
