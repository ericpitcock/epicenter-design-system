# EpContextualLookup



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `label` | Display text for the trigger | `string` | `''` |
| `value` | The string to enrich (e.g., an IP address). Defaults to `label` if not provided. | `string` | `''` |
| `enrichmentOptions` | Array of enrichment sources to display in the dropdown menu | `EnrichmentOption[]` | `-` |
| `enrichmentData` | Reactive object of enrichment results keyed by source label | `Record<string, EnrichmentEntry> \| null` | `null` |

## Events
| Name | Payload | Description |
|------|---------|-------------|
| `lookup` | `(source: EnrichmentOption, value: string)` | Emitted when a source is hovered and data has not yet been fetched. The parent should fetch enrichment data and update the `enrichmentData` prop. |

## Slots
| Name | Description |
|------|-------------|
| `trigger` | Custom trigger element. Receives scoped `{ attrs, on }` for accessibility and interaction. |
| `action` | Custom action button(s) displayed in the enrichment preview footer. |

## Types

```ts
interface EnrichmentOption {
  label: string
  [key: string]: unknown
}

interface EnrichmentResult {
  name: string
  data: Record<string, unknown>
}

interface EnrichmentError {
  error: string
}

type EnrichmentEntry = EnrichmentResult | EnrichmentError
```

## Usage

```vue
<template>
  <ep-contextual-lookup
    label="192.1.1.100"
    value="192.1.1.100"
    :enrichment-options="sources"
    :enrichment-data="enrichmentData"
    @lookup="onLookup"
  >
    <template #trigger="{ attrs, on }">
      <span v-bind="attrs" v-on="on">192.1.1.100</span>
    </template>
  </ep-contextual-lookup>
</template>

<script setup>
  import { ref } from 'vue'

  const sources = [
    { label: 'VirusTotal' },
    { label: 'AbuseIPDB' },
  ]

  const enrichmentData = ref({})

  const onLookup = async (source, value) => {
    try {
      const result = await fetchEnrichment(source.label, value)
      enrichmentData.value = {
        ...enrichmentData.value,
        [source.label]: { name: source.label, data: result }
      }
    } catch (err) {
      enrichmentData.value = {
        ...enrichmentData.value,
        [source.label]: { error: err.message }
      }
    }
  }
</script>
```

## Behavior

- **On hover**: When a user hovers a source in the menu, a `lookup` event is emitted if data hasn't been fetched yet.
- **Caching**: The component tracks which sources have been requested. Re-hovering a source with existing data renders it immediately without re-emitting.
- **Loading state**: A loading indicator is shown until the parent provides data for the hovered source via the `enrichmentData` prop.
- **Error state**: If the parent provides an entry with an `error` property, an inline error message with a retry button is displayed.
- **Retry**: Clicking retry clears the failed source from the cache and re-emits the `lookup` event.
- **Value change**: When `value` changes, the internal cache is cleared so all sources are re-fetched for the new value.