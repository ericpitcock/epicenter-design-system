import React from 'react'
// import { centeredBg } from '../../helpers/decorators.js'
import { iconOptions, iconMapping } from '../../../storybook/helpers/iconHelper.js'
import EpButton from '../../../packages/epicenter-react-components/src/components/button/EpButton.jsx'

export default {
  title: 'Components/Button',
  component: EpButton,
  // decorators: [centeredBg],
  argTypes: {
    classes: {
      name: 'Style',
      options: ['Custom', 'Primary', 'Success', 'Warning', 'Danger'],
      mapping: {
        None: null,
        Primary: { 'button-variant-primary': true },
        Success: { 'button-variant-success': true },
        Warning: { 'button-variant-warning': true },
        Danger: { 'button-variant-danger': true },
      },
      control: {
        type: 'select',
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
    iconLeft: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Left',
      options: iconOptions,
      mapping: iconMapping,
      control: {
        type: 'select',
      },
      table: {
        category: 'Icons',
      },
    },
    iconRight: {
      if: { arg: 'enabledIcons' },
      name: 'Icon Right',
      options: iconOptions,
      mapping: iconMapping,
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
  },
}

const Template = (args) => {
  const styles = {
    '--ep-button-bg-color': args.backgroundColor,
    '--ep-button-border-color': args.borderColor,
    '--ep-button-border-radius': `${args.borderRadius}px`,
    '--ep-button-text-color': args.textColor,
  }

  return (
    <EpButton
      {...args}
      style={styles}
      onClick={() => console.log('Button clicked!')}
    />
  )
}

export const Button = Template.bind({})
Button.args = {
  label: 'Download the Internet',
  size: 'large',
  disabled: false,
  classes: 'None',
  // enabledIcons: false,
  iconLeft: 'None',
  iconRight: 'None',
  // borderRadius: 6,
}