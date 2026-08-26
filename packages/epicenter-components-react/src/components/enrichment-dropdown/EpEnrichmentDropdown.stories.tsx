import { EpEnrichmentDropdown } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { centeredBg } from '../../../storybook/helpers/decorators'

const meta: Meta<typeof EpEnrichmentDropdown> = {
  title: 'Components/Enrichment Dropdown',
  component: EpEnrichmentDropdown,
  decorators: [centeredBg],
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      },
    },
    enrichmentOptions: {
      table: {
        disable: true,
      },
    },
    enrichmentData: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof EpEnrichmentDropdown>

const enrichmentOptions = [
  { label: 'WHOIS' },
  { label: 'GeoIP' },
  { label: 'Threat Intel' },
]

const enrichmentData = {
  WHOIS: {
    Registrar: 'Example Registrar, Inc.',
    'Registered On': '2014-03-02',
    'Expires On': '2027-03-02',
    Organization: 'Example Org LLC',
  },
  GeoIP: {
    Country: 'United States',
    Region: 'Oregon',
    City: 'Portland',
    ASN: 'AS64496',
  },
  'Threat Intel': {
    Verdict: 'Clean',
    'Last Seen': '2026-08-20',
    Sightings: '0',
  },
}

export const EnrichmentDropdown: Story = {
  args: {
    label: '192.1.1.100',
  },
  render: ({ label }) => (
    <EpEnrichmentDropdown
      label={label}
      enrichmentOptions={enrichmentOptions}
      enrichmentData={enrichmentData}
    />
  ),
}
