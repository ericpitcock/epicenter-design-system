import { enrichmentSources, getFakeEnrichmentResponse } from '@sb/data/enrichmentData.js'
import { paddedBg } from '@sb/helpers/decorators.js'
import { ref } from 'vue'

import EpContextualLookup from '@/components/contextual-lookup/EpContextualLookup.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'

export default {
  title: 'Components/Contextual Lookup',
  component: EpContextualLookup,
  decorators: [paddedBg],
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text'
      }
    },
    value: {
      name: 'Value',
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
  components: { EpContextualLookup, EpFlex },
  setup() {
    const enrichmentData = ref({})

    const onLookup = (source, value) => {
      // Simulate async enrichment fetch
      setTimeout(() => {
        const allResults = getFakeEnrichmentResponse('IP Address', value)
        if (allResults[source.label]) {
          enrichmentData.value = {
            ...enrichmentData.value,
            [source.label]: allResults[source.label]
          }
        }
      }, 600)
    }

    return { args, enrichmentData, enrichmentSources, onLookup }
  },
  template: `
    <ep-contextual-lookup
      v-bind="args"
      :enrichment-options="enrichmentSources['IP Address']"
      :enrichment-data="enrichmentData"
      @lookup="onLookup"
    >
      <template #trigger="{ attrs, on }">
        <span v-bind="attrs" v-on="on">{{ args.label }}</span>
      </template>
    </ep-contextual-lookup>
  `
})

ContextualLookup.args = {
  label: '192.1.1.100',
  value: '192.1.1.100'
}

export const WithError = (args) => ({
  components: { EpContextualLookup, EpFlex },
  setup() {
    const enrichmentData = ref({})

    const onLookup = (source, value) => {
      setTimeout(() => {
        if (source.label === 'GreyNoise') {
          // Simulate an error for one source
          enrichmentData.value = {
            ...enrichmentData.value,
            [source.label]: { error: 'Service unavailable' }
          }
        } else {
          const allResults = getFakeEnrichmentResponse('IP Address', value)
          if (allResults[source.label]) {
            enrichmentData.value = {
              ...enrichmentData.value,
              [source.label]: allResults[source.label]
            }
          }
        }
      }, 600)
    }

    return { args, enrichmentData, enrichmentSources, onLookup }
  },
  template: `
    <ep-contextual-lookup
      v-bind="args"
      :enrichment-options="enrichmentSources['IP Address']"
      :enrichment-data="enrichmentData"
      @lookup="onLookup"
    >
      <template #trigger="{ attrs, on }">
        <span v-bind="attrs" v-on="on">{{ args.label }}</span>
      </template>
    </ep-contextual-lookup>
  `
})

WithError.args = {
  label: '192.1.1.100',
  value: '192.1.1.100'
}
