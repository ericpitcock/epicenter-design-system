import EpType from './EpType'

const container = () => {
  return {
    template: '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Style/Type',
  component: EpType,
  decorators: [container],
  argTypes: {

  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpType },
  props: Object.keys(argTypes),
  template: `
  <EpType />
  `
})

export const Type = Template.bind({})
