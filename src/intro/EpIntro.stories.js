import EpIntro from './EpIntro'

export default {
  title: 'Intro',
  component: EpIntro,
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args) => ({
  components: { EpIntro },
  setup() {
    return { args }
  },
  template: '<ep-intro />'
})

export const Intro = Template.bind({})
