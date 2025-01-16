import EpThreatCaseMap from '@/components/threat-case-map/EpThreatCaseMap.vue'
import { paddedSurfaceOverflow } from '../../helpers/decorators.js'
import threatcases from '../../data/threatcases.json'

export default {
  title: 'Components/Threat Case Map',
  component: EpThreatCaseMap,
  decorators: [paddedSurfaceOverflow],
  argTypes: {
    selectedThreatCase: {
      name: 'Selected Threat Case',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    threatcases: {
      table: {
        disable: true
      }
    },
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
  selectedThreatCase: 0,
  threatcases
}
