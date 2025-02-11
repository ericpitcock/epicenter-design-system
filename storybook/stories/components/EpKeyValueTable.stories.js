import { faker } from '@faker-js/faker'

import EpContainer from '@/components/container/EpContainer.vue'
import EpEnrichmentDropdown from '@/components/enrichment-dropdown/EpEnrichmentDropdown.vue'
import EpKeyValueTable from '@/components/key-value-table/EpKeyValueTable.vue'

import { getFakeEnrichmentResponse } from '../../data/enrichmentData.js'
import { paddedBg } from '../../helpers/decorators.js'

const primaryData = [{
  name: 'Primary',
  data: {
    'Application Protocol': 'HTTPS',
    'Port': 49582,
    'Timestamp': '2023-04-20T07:43:47.170Z',
    'Transport Protocol': 'TCP',
    'IP Address': '175.130.222.219',
    'Transport Host Type': 'Virtual',
    'Application Host Type': 'Virtual',
    'Connection Disrupted': false,
    'Customer Asset': 'No',
    'XFF IP Address': '43.101.194.54',
    'XFF AMP Status': 'Enabled',
    'DNS Type': 'CNAME',
    'DNS Resource Name': 'dark-terrace.org',
    'DNS Resource Type': 'A',
    'DNS Resource Data': '164.221.252.124',
    'City': 'Tremblayborough'
  }
}, {
  name: 'Secondary',
  data: {
    'HTTP Hostname': 'juicy-jewel.name',
    'HTTP URL': 'https://strict-tabby.name',
    'HTTP Content Type': 'application/tamp-apex-update',
    'HTTP User Agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; .NET CLR 1.4.41485.2)',
    'HTTP Referrer': 'http://upbeat-face.org',
    'HTTP Method': 'DELETE',
    'Hostname': 'live-lens.name',
    'Domain': 'finished-passion.name',
    'MAC Address': '43:6e:97:4d:87:e1',
    'Country': 'Guam',
    'Company': 'Jones Inc',
    'AMP Status': 'Enabled',
    'AMP Comment': 'Placeat blanditiis perferendis enim.',
    'XFF Hostname': 'worthwhile-wasabi.com',
    'XFF Domain': 'brown-squash.biz',
    'XFF Country': 'Costa Rica',
    'XFF Region': 'Cambridgeshire',
    'XFF City': 'Jerrodbury',
    'XFF Company': 'Langosh, Heidenreich and Fadel',
    'XFF AMP Comment': 'Occaecati in ratione modi perferendis accusantium porro suscipit quo doloremque.'
  }
}]

export default {
  title: 'Components/Table/Key Value Table',
  component: EpKeyValueTable,
  decorators: [paddedBg],
  argTypes: {
    data: { table: { disable: true } },
    commonKeyWidth: { name: 'Common Key Width', control: { type: 'boolean' } },
    sectionHeaders: { name: 'Section Headers', control: { type: 'boolean' } },
    striped: { name: 'Striped', control: { type: 'boolean' } },
    alignRight: { name: 'Align Right', control: { type: 'boolean' } },
    showActionsMenu: { name: 'Show Actions Menu', control: { type: 'boolean' } },
  }
}

export const KeyValueTable = (args) => ({
  components: { EpContainer, EpEnrichmentDropdown, EpKeyValueTable },
  setup() {
    const enrichmentSources = {
      'IP Address': [
        {
          id: faker.string.uuid(),
          label: 'VirusTotal Lookup'
        },
        {
          id: faker.string.uuid(),
          label: 'Shodan Search'
        },
        {
          id: faker.string.uuid(),
          label: 'AbuseIPDB Check'
        }
      ],
      'XFF IP Address': [
        {
          id: faker.string.uuid(),
          label: 'VirusTotal Lookup'
        },
        {
          id: faker.string.uuid(),
          label: 'Shodan Search'
        }
      ],
      'DNS Resource Name': [
        {
          id: faker.string.uuid(),
          label: 'WHOIS Lookup'
        },
        {
          id: faker.string.uuid(),
          label: 'PassiveTotal Lookup'
        }
      ],
      'Domain': [
        {
          id: faker.string.uuid(),
          label: 'VirusTotal Lookup'
        },
        {
          id: faker.string.uuid(),
          label: 'Google Safe Browsing'
        }
      ],
      'MAC Address': [
        {
          id: faker.string.uuid(),
          label: 'OUI Lookup'
        }
      ],
      'Port': [
        {
          id: faker.string.uuid(),
          label: 'Shodan Open Ports'
        },
        {
          id: faker.string.uuid(),
          label: 'IANA Port Info'
        }
      ]
    }

    const sourceKeys = Object.keys(enrichmentSources)

    return {
      args,
      enrichmentSources,
      sourceKeys,
      getFakeEnrichmentResponse
    }
  },
  template: `
  <ep-container
    :style="{
      '--ep-container-padding': '0 3rem',
      '--ep-container-content-padding': '3rem 0 10rem 0',
      '--ep-container-bg-color': 'var(--interface-surface)',
      '--ep-container-border-width': '0.1rem',
      '--ep-container-overflow': 'auto',
    }"
  >
    <ep-key-value-table v-bind="args">
      <template #actions-menu="{ key, value }">
        <ep-enrichment-dropdown
          v-if="sourceKeys.includes(key)"
          :enrichment-options="enrichmentSources[key]"
          :enrichment-data="getFakeEnrichmentResponse(key, value)"
        />
      </template>
    </ep-key-value-table>
  </ep-container>
  `
})

KeyValueTable.args = {
  data: primaryData,
  commonKeyWidth: true,
  sectionHeaders: true,
  striped: false,
  alignRight: false,
  showActionsMenu: true
}