import { EpButton, EpTooltip } from '@ericpitcock/epicenter-components-react';
import type { EpButtonProps } from '@ericpitcock/epicenter-components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { centeredBg } from '../../../storybook/helpers/decorators';

type ButtonGroupStoryProps = {
  size?: EpButtonProps['size'];
  variant?: string;
  disabled?: boolean;
};

const meta: Meta<ButtonGroupStoryProps> = {
  title: 'Components/Button/Button Group',
  decorators: [centeredBg],
  argTypes: {
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: {
        type: 'radio',
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-Large',
        },
      },
    },
    variant: {
      name: 'Active Variant',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          success: 'Success',
          warning: 'Warning',
          danger: 'Danger',
        },
      },
    },
    disabled: {
      name: 'Tooltip Disabled',
      control: 'boolean',
    },
  },
};

export default meta;

const buttonItems = [
  { label: 'Taco', tooltip: '¡Delicious!' },
  { label: 'Burrito', tooltip: '¡Fantastic!' },
  { label: 'Enchilada', tooltip: '¡Yummy!' },
  { label: 'Quesadilla', tooltip: '¡Cheesy!' },
  { label: 'Pupusa', tooltip: '¡Savory stuffed corn tortillas from El Salvador!' },
];

const ButtonGroupTemplate = (args: ButtonGroupStoryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="ep-button-group">
      {buttonItems.map((item, index) => (
        <EpTooltip
          key={item.label}
          position="top center"
          dismissOnClick
          disabled={args.disabled}
          tooltip={<div>{item.tooltip}</div>}
        >
          <EpButton
            size={args.size}
            className={
              activeIndex === index
                ? `ep-button-var--${args.variant} ep-button-group--selected`
                : undefined
            }
            onClick={() => setActiveIndex(index)}
          >
            {item.label}
          </EpButton>
        </EpTooltip>
      ))}
    </div>
  );
};

export const ButtonGroup: StoryObj<ButtonGroupStoryProps> = {
  render: ButtonGroupTemplate,
  args: {
    size: 'large',
    variant: 'primary',
    disabled: false,
  },
};
