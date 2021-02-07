import svgIcons from './EpIcon/load-icons'
import EpButton from './EpButton'

const icons = svgIcons.map(icon => icon.name.slice(2, -4))

export default {
  title: 'Components/EpButton',
  component: EpButton,
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    kind: {
      name: 'Button Kind',
      control: {
        type: 'select',
        options: {
          Primary: 'primary',
          Secondary: 'secondary',
          Tertiary: 'tertiary',
          Naked: 'naked',
          Danger: 'danger',
          Warning: 'warning',
          Success: 'success'
        },
      },
      defaultValue: 'primary'
    },
    element: {
      name: 'HTML Element',
      control: {
        type: 'select',
        options: {
          Button: 'button',
          Link: 'a'
        }
      },
      defaultValue: 'button'
    },
    size: {
      name: 'Button Size',
      control: {
        type: 'select',
        options: {
          Default: 'default',
          Small: 'small'
        }
      },
      defaultValue: 'default'
    },
    label: {
      name: 'Use Button Label',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    },
    labelText: {
      name: 'Button Label',
      control: {
        type: 'text'
      },
      defaultValue: 'Download'
    },
    icon: {
      name: 'Use Icon',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    iconSource: {
      name: 'Icon Source',
      control: {
        type: 'select',
        options: icons
      },
      defaultValue: 'refresh'
    },
    iconAlignRight: {
      name: 'Alight Icon Right',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpButton },
  props: Object.keys(argTypes),
  template: `
  <EpButton
    @click="action"
    :kind="kind"
    :element="element"
    :size="size"
    :label="label"
    :labelText="labelText"
    :icon="icon"
    :iconSource="iconSource"
    :iconAlignRight="iconAlignRight"
    :disabled="disabled"
  />
  `
})

export const Basic = Template.bind({});
// Basic.args = {
//   labelText: 'Butthole'
// }
