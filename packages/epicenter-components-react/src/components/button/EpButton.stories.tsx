import {
  EpButton,
  EpDropdown,
  EpDropdownTrigger,
  EpDropdownContent,
  EpLoaderBars,
  EpLoaderBounce,
  EpLoaderDots,
  EpLoaderDualRing,
  EpLoaderFade,
  EpLoaderOrbit,
  EpLoaderPulse,
  EpLoaderScale,
  EpLoaderSpin,
  EpLoaderSquares,
  EpMenu,
  EpMenuItem,
} from '@ericpitcock/epicenter-components-react';
import type { EpButtonProps } from '@ericpitcock/epicenter-components-react';
import { ArrowDown01 } from '@ericpitcock/epicenter-icons-react/ArrowDown01.jsx';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CSSProperties, ComponentType, useState } from 'react';

import { centeredBg } from '../../../storybook/helpers/decorators';
import { componentNames, useIconComponent } from '../../../storybook/helpers/useIcons';

const loaderComponents: Record<string, ComponentType> = {
  Dots: EpLoaderDots,
  Spin: EpLoaderSpin,
  Pulse: EpLoaderPulse,
  Bounce: EpLoaderBounce,
  Bars: EpLoaderBars,
  'Dual Ring': EpLoaderDualRing,
  Fade: EpLoaderFade,
  Scale: EpLoaderScale,
  Orbit: EpLoaderOrbit,
  Squares: EpLoaderSquares,
};

type ButtonStoryProps = EpButtonProps & {
  classes?: string;
  enabledIcons?: boolean;
  iconLeftName?: string;
  iconRightName?: string;
  borderWidth?: string;
  borderRadius?: number;
  paddingBlock?: string;
  paddingInline?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  label?: string;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  hoverTextColor?: string;
  activeBackgroundColor?: string;
  activeBorderColor?: string;
  activeTextColor?: string;
  disabledBackgroundColor?: string;
  disabledBorderColor?: string;
  disabledTextColor?: string;
};

const meta: Meta<ButtonStoryProps> = {
  title: 'Components/Button',
  component: EpButton,
  decorators: [centeredBg],
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
      options: componentNames,
      control: {
        type: 'select',
      },
      table: {
        category: 'Icons',
      },
    },
    iconRightName: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Right',
      options: componentNames,
      control: {
        type: 'select',
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
type Story = StoryObj<ButtonStoryProps>;

const Template = (args: ButtonStoryProps) => {
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

  const IconLeft = useIconComponent(args.enabledIcons ? args.iconLeftName : undefined);
  const IconRight = useIconComponent(args.enabledIcons ? args.iconRightName : undefined);

  return (
    <EpButton
      size={args.size}
      disabled={args.disabled}
      className={variantClass}
      iconLeft={IconLeft ? <IconLeft /> : undefined}
      iconRight={IconRight ? <IconRight /> : undefined}
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
    label: 'Download the internet',
    size: 'large',
    disabled: false,
    classes: 'Primary',
    enabledIcons: true,
    iconLeftName: 'CloudDownload',
    iconRightName: 'None',
    borderRadius: 3,
  },
};

// --- As Loading ---

type LoadingStoryProps = {
  label?: string;
  size?: EpButtonProps['size'];
  classes?: string;
  loader?: string;
};

const LoadingTemplate = (args: LoadingStoryProps) => {
  const [isLoading, setIsLoading] = useState(false);

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
  const LoaderComponent = args.loader ? loaderComponents[args.loader] : EpLoaderDots;

  const onClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <EpButton
      className={variantClass}
      size={args.size}
      aria-disabled={isLoading ? true : undefined}
      style={isLoading ? { pointerEvents: 'none' } : undefined}
      onClick={onClick}
    >
      <span className={`ep-button__async-label${isLoading ? ' ep-button__async-label--loading' : ''}`}>
        <span className="ep-button__async-text">{args.label}</span>
        {isLoading && (
          <span className="ep-button__async-loader">
            {LoaderComponent && <LoaderComponent />}
          </span>
        )}
      </span>
    </EpButton>
  );
};

export const AsLoading: StoryObj<LoadingStoryProps> = {
  render: LoadingTemplate,
  args: {
    label: 'Submit',
    size: 'large',
    classes: 'Primary',
    loader: 'Dots',
  },
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
    },
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: { type: 'radio' },
    },
    classes: {
      name: 'Style',
      options: ['Primary', 'Secondary', 'Success', 'Warning', 'Danger', 'Outline', 'Ghost'],
      control: { type: 'radio' },
    },
    loader: {
      name: 'Loader',
      options: Object.keys(loaderComponents),
      control: { type: 'radio' },
    },
  },
};

// --- As Toggle ---

type ToggleStoryProps = {
  label?: string;
  size?: EpButtonProps['size'];
  disabled?: boolean;
  classes?: string;
  enabledIcons?: boolean;
  iconLeftName?: string;
};

const ToggleTemplate = (args: ToggleStoryProps) => {
  const [isActive, setIsActive] = useState(false);

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
  const IconLeft = useIconComponent(args.enabledIcons ? args.iconLeftName : undefined);

  const onClick = () => {
    if (args.disabled) return;
    setIsActive(!isActive);
  };

  return (
    <div style={{ width: 200 }}>
      <EpButton
        className={`${variantClass}${isActive ? ' ep-button--selected' : ''}`}
        size={args.size}
        disabled={args.disabled}
        iconLeft={IconLeft ? <IconLeft /> : undefined}
        onClick={onClick}
      >
        {args.label}
      </EpButton>
      <p style={{ marginTop: '1rem' }}>Toggle state: {String(isActive)}</p>
    </div>
  );
};

export const AsToggle: StoryObj<ToggleStoryProps> = {
  render: ToggleTemplate,
  args: {
    label: 'Aa',
    size: 'default',
    disabled: false,
    classes: 'Secondary',
    enabledIcons: false,
    iconLeftName: 'None',
  },
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
    },
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: { type: 'radio' },
    },
    classes: {
      name: 'Active Style',
      options: ['Primary', 'Secondary', 'Success', 'Warning', 'Danger', 'Outline', 'Ghost'],
      control: { type: 'radio' },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
    },
    enabledIcons: {
      name: 'Enable Icons',
      control: { type: 'boolean' },
    },
    iconLeftName: {
      if: { arg: 'enabledIcons' },
      name: 'Icon',
      options: componentNames,
      control: { type: 'select' },
    },
  },
};

// --- Split Button ---

type SplitButtonStoryProps = {
  disabled?: boolean;
  size?: EpButtonProps['size'];
  enabledIcons?: boolean;
  iconLeftName?: string;
  iconRightName?: string;
};

const SplitButtonTemplate = (args: SplitButtonStoryProps) => {
  const menuItems = [
    { type: 'section' as const, label: 'Prev Versions' },
    { type: 'item' as const, label: 'v1.1' },
    { type: 'item' as const, label: 'v1.0.1' },
    { type: 'item' as const, label: 'v1.0' },
    { type: 'item' as const, label: 'v0.9' },
  ];

  const IconLeft = useIconComponent(args.enabledIcons ? args.iconLeftName : undefined);
  const IconRight = useIconComponent(args.enabledIcons ? args.iconRightName : undefined);

  return (
    <div className="ep-split-button">
      <EpButton
        className="ep-button-var--primary"
        disabled={args.disabled}
        size={args.size}
        iconLeft={IconLeft ? <IconLeft /> : undefined}
        iconRight={IconRight ? <IconRight /> : undefined}
      >
        Download Latest (v1.2)
      </EpButton>
      <EpDropdown disabled={args.disabled}>
        <EpDropdownTrigger>
          <EpButton
            disabled={args.disabled}
            size={args.size}
            className="ep-button-var--primary"
            iconLeft={<ArrowDown01 />}
          />
        </EpDropdownTrigger>
        <EpDropdownContent>
          {({ close }) => (
            <EpMenu>
              {menuItems.map((item, index) => (
                <EpMenuItem
                  key={index}
                  type={item.type}
                  onSelect={() => {
                    console.log('clicked:', item.label);
                    close();
                  }}
                >
                  {item.type === 'item' ? (
                    <EpButton className="ep-button--menu-item">
                      {item.label}
                    </EpButton>
                  ) : (
                    item.label
                  )}
                </EpMenuItem>
              ))}
            </EpMenu>
          )}
        </EpDropdownContent>
      </EpDropdown>
    </div>
  );
};

export const SplitButton: StoryObj<SplitButtonStoryProps> = {
  render: SplitButtonTemplate,
  args: {
    disabled: false,
    size: 'large',
    enabledIcons: true,
    iconLeftName: 'Download05',
    iconRightName: 'None',
  },
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
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
      table: { category: 'Button Style' },
    },
    enabledIcons: {
      name: 'Enable Icons',
      control: { type: 'boolean' },
      table: { category: 'Icons' },
    },
    iconLeftName: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Left',
      options: componentNames,
      control: { type: 'select' },
      table: { category: 'Icons' },
    },
    iconRightName: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Right',
      options: componentNames,
      control: { type: 'select' },
      table: { category: 'Icons' },
    },
  },
};
