import { EpButton } from '@ericpitcock/epicenter-react-components';
import type { Meta, StoryObj } from '@storybook/react';
import React, { CSSProperties } from 'react';

type ButtonStoryProps = {
  classes?: string;
  size?: 'small' | 'default' | 'large' | 'xlarge';
  disabled?: boolean;
  iconLeftName?: string;
  iconRightName?: string;
  borderWidth?: string;
  borderRadius?: string;
  paddingBlock?: string;
  paddingInline?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  label?: string;
};

const meta: Meta<ButtonStoryProps> = {
  title: 'Components/Button',
  component: EpButton,
  argTypes: {
    classes: {
      name: 'Style',
      options: [
        'Primary',
        'Secondary',
        'Success',
        'Warning',
        'Danger',
        'Outline',
        'Ghost',
        'Custom',
      ],
      control: {
        type: 'radio',
      },
      table: {
        category: 'Styles',
      },
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Base Props',
      },
    },
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
      table: {
        category: 'Base Props',
      },
    },
    ariaLabel: { table: { disable: true } },
    type: { table: { disable: true } },
    label: {
      name: 'Label',
      control: {
        type: 'text',
      },
      table: {
        category: 'Base Props',
      },
    },
    enabledIcons: {
      name: 'Enable Icons',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Icons',
      },
    },
    iconLeftName: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Left',
      control: {
        type: 'text',
      },
      table: {
        category: 'Icons',
      },
    },
    iconRightName: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Right',
      control: {
        type: 'text',
      },
      table: {
        category: 'Icons',
      },
    },
    backgroundColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-bg-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Base Styles',
      },
    },
    borderColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-border-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Base Styles',
      },
    },
    textColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-text-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Base Styles',
      },
    },
    borderRadius: {
      name: '--ep-button-border-radius',
      control: {
        type: 'number',
      },
      table: {
        category: 'Base Props',
      },
    },
    hoverBackgroundColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-hover-bg-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Hover Styles',
      },
    },
    hoverBorderColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-hover-border-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Hover Styles',
      },
    },
    hoverTextColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-hover-text-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Hover Styles',
      },
    },
    activeBackgroundColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-active-bg-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Active Styles',
      },
    },
    activeBorderColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-active-border-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Active Styles',
      },
    },
    activeTextColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-active-text-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Active Styles',
      },
    },
    disabledBackgroundColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-disabled-bg-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Disabled Styles',
      },
    },
    disabledBorderColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-disabled-border-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Disabled Styles',
      },
    },
    disabledTextColor: {
      if: { arg: 'classes', eq: 'Custom' },
      name: '--ep-button-disabled-text-color',
      control: {
        type: 'color',
      },
      table: {
        category: 'Disabled Styles',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EpButton>;

interface TemplateArgs {
  activeBackgroundColor?: string;
  activeBorderColor?: string;
  activeTextColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  classes?: string;
  disabled?: boolean;
  disabledBackgroundColor?: string;
  disabledBorderColor?: string;
  disabledTextColor?: string;
  enabledIcons?: boolean;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  hoverTextColor?: string;
  iconLeftName?: string;
  iconRightName?: string;
  label?: string;
  size?: 'small' | 'default' | 'large' | 'xlarge';
  textColor?: string;
}

const Template = (args: TemplateArgs) => {
  const styles: CSSProperties = {
    '--ep-button-bg-color': args.backgroundColor,
    '--ep-button-border-color': args.borderColor,
    '--ep-button-border-radius': args.borderRadius ? `${args.borderRadius}px` : undefined,
    '--ep-button-text-color': args.textColor,
    '--ep-button-hover-bg-color': args.hoverBackgroundColor,
    '--ep-button-hover-border-color': args.hoverBorderColor,
    '--ep-button-hover-text-color': args.hoverTextColor,
    '--ep-button-active-bg-color': args.activeBackgroundColor,
    '--ep-button-active-border-color': args.activeBorderColor,
    '--ep-button-active-text-color': args.activeTextColor,
    '--ep-button-disabled-bg-color': args.disabledBackgroundColor,
    '--ep-button-disabled-border-color': args.disabledBorderColor,
    '--ep-button-disabled-text-color': args.disabledTextColor,
  } as CSSProperties;

  // Apply variant class mapping
  const variantMapping: Record<string, string> = {
    Primary: 'ep-button-var--primary',
    Secondary: 'ep-button-var--secondary',
    Success: 'ep-button-var--success',
    Warning: 'ep-button-var--warning',
    Danger: 'ep-button-var--danger',
    Outline: 'ep-button-var--outline',
    Ghost: 'ep-button-var--ghost',
  };

  const variantClass = args.classes ? variantMapping[args.classes] || '' : '';

  // Create icon placeholders if names are provided
  const iconLeft = args.enabledIcons && args.iconLeftName && args.iconLeftName !== 'None' 
    ? <span>{args.iconLeftName}</span>
    : null;
  const iconRight = args.enabledIcons && args.iconRightName && args.iconRightName !== 'None' 
    ? <span>{args.iconRightName}</span>
    : null;

  return (
    <EpButton
      size={args.size}
      disabled={args.disabled}
      className={variantClass}
      iconLeft={iconLeft}
      iconRight={iconRight}
      style={styles}
      onClick={() => console.log('Button clicked!')}
    >
      {args.label}
    </EpButton>
  );
};

export const Button: Story = {
  render: Template,
  args: {
    label: '',
    size: 'large',
    disabled: false,
    classes: 'Primary',
    enabledIcons: true,
    iconLeftName: '⭕',
    iconRightName: 'None',
    borderRadius: 3,
  },
};
