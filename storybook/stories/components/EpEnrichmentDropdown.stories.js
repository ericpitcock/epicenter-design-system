import { faker } from '@faker-js/faker'

import EpEnrichmentDropdown from '@/components/enrichment-dropdown/EpEnrichmentDropdown.vue'

import { getFakeEnrichmentResponse } from '../../data/enrichmentData.js'
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

    return { args, enrichmentData, handleDock }
  },
  template: `
    <ep-enrichment-dropdown
      v-bind="args"
      :enrichmentData="enrichmentData"
      @dock="handleDock"
    />
  `
})

EnrichmentDropdown.args = {
  label: '',
  enrichmentOptions: [
    {
      id: faker.string.uuid(),
      label: 'VirusTotal Lookup'
    },
    {
      id: faker.string.uuid(),
      label: 'WHOIS Lookup'
    },
    {
      id: faker.string.uuid(),
      label: 'Shodan Search'
    }
  ]
}
