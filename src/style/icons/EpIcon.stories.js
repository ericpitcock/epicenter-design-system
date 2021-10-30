import svgIcons from './load-icons'
import EpIcon from './EpIcon'

const names = svgIcons.map(icon => icon.name)

const container = () => {
  return {
    template:
      '<div style="padding: 30px; display:flex; justify-content: center;"><story/></div>'
  }
}

export default {
  title: 'Style/Icon',
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
        type: 'text'
      },
      defaultValue: 'currentColor'
    },
    weight: {
      name: 'Weight',
      control: {
        type: 'select',
        options: ['light', 'regular', 'bold']
      },
      defaultValue: 'regular'
    },
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 20, max: 60, step: 2
      },
      defaultValue: 20
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpIcon },
  props: Object.keys(argTypes),
  template: `
  <EpIcon
    :name="name"
    :color="color"
    :weight="weight"
    :size="size"
  />
  `
})

export const Icon = Template.bind({})
