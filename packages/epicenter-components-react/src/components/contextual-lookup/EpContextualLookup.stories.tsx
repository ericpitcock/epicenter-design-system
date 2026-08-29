import { useState } from 'react'

import { EpContextualLookup } from '@ericpitcock/epicenter-components-react'
import type { EnrichmentOption, EnrichmentResult } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { enrichmentSources, getFakeEnrichmentResponse } from '../../../storybook/data/enrichmentData'
import { paddedBg } from '../../../storybook/helpers/decorators'

type EnrichmentDataMap = Record<string, EnrichmentResult | { error: string }>

// Spread into anonymous object types: the fixture's EnrichmentSource interface
// has no index signature, which EnrichmentOption requires.
const ipSources: EnrichmentOption[] = enrichmentSources['IP Address'].map((source) => ({ ...source }))

const meta: Meta<typeof EpContextualLookup> = {
  title: 'Components/Contextual Lookup',
  component: EpContextualLookup,
  decorators: [paddedBg],
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      },
    },
    value: {
      name: 'Value',
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
type Story = StoryObj<typeof EpContextualLookup>

const LookupDemo = ({ label, value, failingSource }: { label: string, value: string, failingSource?: string }) => {
  const [enrichmentData, setEnrichmentData] = useState<EnrichmentDataMap>({})

  const onLookup = (source: EnrichmentOption, lookupValue: string) => {
    // Simulate an async enrichment fetch
    setTimeout(() => {
      if (source.label === failingSource) {
        setEnrichmentData((previous) => ({
          ...previous,
          [source.label]: { error: 'Service unavailable' },
        }))
        return
      }
      const allResults = getFakeEnrichmentResponse('IP Address', lookupValue)
      if (allResults[source.label]) {
        setEnrichmentData((previous) => ({
          ...previous,
          [source.label]: allResults[source.label] as EnrichmentResult,
        }))
      }
    }, 600)
  }

  return (
    <EpContextualLookup
      label={label}
      value={value}
      enrichmentOptions={ipSources}
      enrichmentData={enrichmentData}
      onLookup={onLookup}
      trigger={<span>{label}</span>}
    />
  )
}

export const ContextualLookup: Story = {
  args: {
    label: '192.1.1.100',
    value: '192.1.1.100',
  },
  render: ({ label = '', value = '' }) => (
    <LookupDemo label={label} value={value} />
  ),
}

export const WithError: Story = {
  args: {
    label: '192.1.1.100',
    value: '192.1.1.100',
  },
  render: ({ label = '', value = '' }) => (
    <LookupDemo label={label} value={value} failingSource="GreyNoise" />
  ),
}
