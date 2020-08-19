import svgIcons from './load-icons'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { getTokensByType, getTokenGroup } from './getTokens'

import EpIcon from './EpIcon'

const container = () => {
  return {
    template: '<div style="text-align: center; padding-top: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/EpIcon',
  component: EpIcon,
  decorators: [withKnobs, container]
}

const names = svgIcons.map(icon => icon.name.slice(2, -4))
const iconSizes = getTokenGroup('icon-sizes')
const colors = getTokensByType('color')

export const Icon = () => ({
  components: { EpIcon },
  props: {
    name: {
      default: select('name', names, 'arrow-up')
    },
    color: {
      default: select('color', colors, 'black'),
    },
    fill: {
      default: text('fill', 'currentColor'),
    },
    size: {
      default: select('size', iconSizes, '200'),
    },
  },
  template: '<EpIcon :name="name" :size="size" :fill="fill" :color="color" />'
})

