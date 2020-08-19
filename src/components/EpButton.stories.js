import svgIcons from './EpIcon/load-icons'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, select, radios } from '@storybook/addon-knobs'

import EpButton from './EpButton'

const container = () => {
  return {
    template: '<div style="padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/EpButton',
  component: EpButton,
  decorators: [withKnobs, container]
}

const buttonKinds = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Naked: 'naked',
  Danger: 'danger',
  Warning: 'warning',
  Success: 'success'
}

const buttonSizes = {
  Default: 'default',
  Large: 'large'
}

const elements = {
  Button: 'button',
  Link: 'a'
}

const icons = svgIcons.map(icon => icon.name.slice(2, -4))

export const Basic = () => ({
  components: { EpButton },
  template: '<EpButton @click="action" :kind="kind" :element="element" :size="size" :label="label" :labelText="labelText" :icon="icon" :iconSource="iconSource" :iconAlignRight="iconAlignRight" :disabled="disabled" />',
  props: {
    disabled: { default: boolean('Disabled', false) },
    kind: { default: select('Kind', buttonKinds, 'primary') },
    element: { default: select('Element', elements, 'button') },
    size: { default: select('Size', buttonSizes, 'default') },
    label: { default: boolean('Label', true) },
    labelText: { default: text('Label Text', 'Download') },
    icon: { default: boolean('Icon', false) },
    iconSource: { default: select('Icon Source', icons, 'refresh') },
    iconAlignRight: { default: boolean('Align Right', false) }
  },
  methods: { action: action('clicked') }
})
