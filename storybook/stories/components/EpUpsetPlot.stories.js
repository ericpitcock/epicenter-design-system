import EpUpsetPlot from '@/components/upset-plot/EpUpsetPlot.vue'
import { paddedBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Upset Plot',
  component: EpUpsetPlot,
  decorators: [paddedBg],
  argTypes: {
  }
}

export const UpsetPlot = args => ({
  components: { EpUpsetPlot },
  setup() {
    return { args }
  },
  template: `
    <ep-upset-plot v-bind="args" />
  `
})

UpsetPlot.args = {
}
