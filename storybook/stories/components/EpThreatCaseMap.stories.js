import EpThreatCaseMap from '@/components/threat-case-map/EpThreatCaseMap.vue'
import { paddedBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Threat Case Map',
  component: EpThreatCaseMap,
  decorators: [paddedBg],
  argTypes: {
  }
}

export const ThreatCaseMap = args => ({
  components: { EpThreatCaseMap },
  setup() {
    return { args }
  },
  template: `
    <ep-threat-case-map v-bind="args" />
  `
})

ThreatCaseMap.args = {
}
