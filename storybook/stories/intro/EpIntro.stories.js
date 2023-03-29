import EpIntro from './EpIntro'

export default {
  title: 'Intro',
  component: EpIntro,
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

export const Intro = (args) => ({
  components: { EpIntro },
  setup() {
    return { args }
  },
  template: '<ep-intro />'
})
