import EpEnrichmentDropdown from '@/components/enrichment-dropdown/EpEnrichmentDropdown.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'

import { enrichmentSources, getFakeEnrichmentResponse } from '../../data/enrichmentData.js'
import { paddedBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Contextual Lookup',
  component: EpEnrichmentDropdown,
  decorators: [paddedBg],
  argTypes: {
    label: {
      name: 'Button Label',
      control: {
        type: 'text'
      }
    },
    enrichmentOptions: {
      table: {
        disable: true
      }
    },
    enrichmentData: {
      table: {
        disable: true
      }
    }
  }
}

export const ContextualLookup = (args) => ({
  components: { EpEnrichmentDropdown, EpFlex },
  setup() {
    const enrichmentData = getFakeEnrichmentResponse('ip-reputation', 'example-value')

    return { args, enrichmentData, enrichmentSources, getFakeEnrichmentResponse }
  },
  template: `
    <ep-enrichment-dropdown
      v-bind="args"
      :enrichment-options="enrichmentSources['IP Address']"
      :enrichmentData="getFakeEnrichmentResponse('IP Address', '192.1.1.100')"
    />
  `
})

ContextualLookup.args = {
  label: '192.1.1.100'
}
