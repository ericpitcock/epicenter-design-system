import svgIcons from './load-icons'
import { getTokensByType, getTokenGroup } from './getTokens'

import EpIcon from './EpIcon'

const names = svgIcons.map(icon => icon.name.slice(2, -4))
const iconSizes = getTokenGroup('icon-sizes')
const colors = getTokensByType('color')

const container = () => {
  return {
    template:
      '<div style="padding: 30px; display:flex; justify-content: center;"><story/></div>'
  }
}

export default {
  title: 'Style/Icons',
  component: EpIcon,
  decorators: [container],
  argTypes: {
    name: {
      name: 'Name',
      control: {
        type: 'select',
        options: names
      },
      defaultValue: 'arrow-up'
    },
    color: {
      name: 'Color',
      control: {
        type: 'select',
        options: colors
      },
      defaultValue: 'black'
    },
    fill: {
      name: 'Fill Color',
      control: {
        type: 'text'
      },
      defaultValue: 'currentColor'
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: iconSizes
      },
      // 300 == 1.5
      defaultValue: '300'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpIcon },
  props: Object.keys(argTypes),
  template: `
  <EpIcon
    :name="name"
    :size="size"
    :fill="fill"
    :color="color"
  />
  `
})

export const Icons = Template.bind({})
