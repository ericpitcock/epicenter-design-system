import { enrichmentSources, getFakeEnrichmentResponse } from '@sb/data/enrichmentData.js'
import { paddedBg } from '@sb/helpers/decorators.js'

import EpContextualLookup from '@/components/contextual-lookup/EpContextualLookup.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'

export default {
  title: 'Components/Contextual Lookup',
  component: EpContextualLookup,
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
  components: { EpContextualLookup, EpFlex },
  setup() {
    const enrichmentData = getFakeEnrichmentResponse('ip-reputation', 'example-value')

    return { args, enrichmentData, enrichmentSources, getFakeEnrichmentResponse }
  },
  template: `
    <ep-contextual-lookup
      v-bind="args"
      :enrichment-options="enrichmentSources['IP Address']"
      :enrichmentData="getFakeEnrichmentResponse('IP Address', '192.1.1.100')"
    >
      <template #trigger="{ attrs, on }">
        <span v-bind="attrs" v-on="on">{{ args.label }}</span>
      </template>
    </ep-contextual-lookup>
  `
})

ContextualLookup.args = {
  label: '192.1.1.100'
}
