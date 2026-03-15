import { EpToggleButton } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { componentNames, useIconComponent } from '../../../storybook/helpers/useIcons';

const meta: Meta<typeof EpToggleButton> = {
  title: 'Components/ToggleButton',
  component: EpToggleButton,
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
      table: { category: 'Base Props' },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
      table: { category: 'Base Props' },
    },
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: { type: 'radio' },
      table: { category: 'Base Props' },
    },
    iconName: {
      name: 'Icon',
      options: componentNames,
      control: { type: 'select' },
      table: { category: 'Icons' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpToggleButton>;

export const ToggleButton: Story = {
  render: (args: any) => {
    const [isActive, setIsActive] = useState(false);
    const IconComponent = useIconComponent(args.iconName);

    return (
      <EpToggleButton
        {...args}
        icon={IconComponent ? <IconComponent /> : undefined}
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />
    );
  },
  args: {
    label: 'Toggle Me',
    disabled: false,
    size: 'default',
    activeClass: 'button-variant-primary',
    iconName: 'None',
  },
};
