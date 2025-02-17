import EpEnrichmentDropdown from '@/components/enrichment-dropdown/EpEnrichmentDropdown.vue'

import { enrichmentSources, getFakeEnrichmentResponse } from '../../data/enrichmentData.js'
import { paddedBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Enrichment Dropdown',
  component: EpEnrichmentDropdown,
  decorators: [paddedBg],
  argTypes: {
    label: {
      name: 'Button Label',
      control: 'text',
      defaultValue: 'Enrich Data'
    },
    enrichmentOptions: {
      table: {
        disable: true
      }
    }
  }
}

export const EnrichmentDropdown = (args) => ({
  components: { EpEnrichmentDropdown },
  setup() {
    const enrichmentData = getFakeEnrichmentResponse('ip-reputation', 'example-value')

    const handleDock = (data) => {
      console.log('Docking Data:', data)
    }

    return { args, enrichmentData, enrichmentSources, getFakeEnrichmentResponse, handleDock }
  },
  template: `
    <ep-enrichment-dropdown
      :enrichment-options="enrichmentSources['IP Address']"
      :enrichmentData="getFakeEnrichmentResponse('IP Address', '192.1.1.100')"
      @dock="handleDock"
    />
  `
})
