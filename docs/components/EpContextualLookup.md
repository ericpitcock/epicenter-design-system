# EpContextualLookup



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `enrichmentData` | - | `union` | `-` |
| `enrichmentOptions` | - | `Array` | `-` |
| `label` | - | `string` | `-` |
| `value` | - | `string` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `lookup` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `trigger` | No description available. |
| `action` | No description available. |

## CSS Custom Properties

Set any of these with a selector that matches `.ep-contextual-lookup` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-contextual-lookup {
  --ep-contextual-lookup-asterisk-size: /* … */;
}
```

### Box

| Property | Default | State |
|---|---|---|
| `--ep-contextual-lookup-asterisk-size` | `1.2rem` | — |
| `--ep-contextual-lookup-icon-size` | `1.4rem` | — |
| `--ep-contextual-lookup-preview-min-width` | `40rem` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-contextual-lookup-asterisk-text-color` | `var(--text-color--primary)` | — |
| `--ep-contextual-lookup-trigger-hover-text-color` | `var(--text-color--primary)` | hover |
| `--ep-contextual-lookup-trigger-text-decoration-color` | `hsl(from var(--text-color) h s l / 0.5)` | — |
| `--ep-contextual-lookup-trigger-text-underline-offset` | `0.2rem` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-contextual-lookup-icon-stroke-width` | `0.2rem` | — |
| `--ep-contextual-lookup-preview-offset` | `0.5rem` | — |
| `--ep-contextual-lookup-preview-z-index` | `var(--z-index--dropdown)` | — |

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-contextual-lookup-preview-bg-color` | `var(--interface-foreground)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-contextual-lookup-preview-border-color` | `var(--border-color)` | — |
| `--ep-contextual-lookup-preview-border-radius` | `var(--border-radius--default)` | — |
| `--ep-contextual-lookup-preview-border-style` | `solid` | — |
| `--ep-contextual-lookup-preview-border-width` | `var(--border-width--hairline)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-contextual-lookup-preview-padding` | `var(--space--5)` | — |
| `--ep-contextual-lookup-trigger-gap` | `0.25rem` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-contextual-lookup-preview-shadow` | `var(--shadow--dropdown)` | — |

## Component Code

```vue
<script setup lang="ts">
  import ArrowUpRight01 from '@ericpitcock/epicenter-icons-vue/ArrowUpRight01'
  import Asterisk02 from '@ericpitcock/epicenter-icons-vue/Asterisk02'
  import { computed, onUpdated, ref } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpKeyValueTable from '../key-value-table/EpKeyValueTable.vue'
  import EpLoaderSquares from '../loaders/EpLoaderSquares.vue'
  import EpMenu from '../menu/EpMenu.vue'
  import EpMenuItem from '../menu/EpMenuItem.vue'

  interface EnrichmentOption {
    [key: string]: unknown
    label: string
  }

  interface EnrichmentResult {
    data: Record<string, unknown>
    name: string
  }

  interface Props {
    enrichmentData?: Record<string, EnrichmentResult | { error: string }> | null
    enrichmentOptions: EnrichmentOption[]
    label?: string
    value?: string
  }

  const {
    label = '',
    enrichmentData = null,
    value = '',
  } = defineProps<Props>()

  const emit = defineEmits<{
    lookup: [source: EnrichmentOption, value: string]
  }>()

  defineOptions({ name: 'EpContextualLookup' })

  const hoveredItem = ref<EnrichmentOption | null>(null)
  const showPreview = ref(false)
  const requestedSources = ref(new Set<string>())

  const resolvedValue = computed(() => value || label)
  const previousResolvedValue = ref(resolvedValue.value)

  const currentSourceData = computed<EnrichmentResult | { error: string } | undefined>(() => {
    if (!hoveredItem.value || !enrichmentData) return undefined
    return enrichmentData[hoveredItem.value.label]
  })

  const getSourceStatus = (option: EnrichmentOption): 'default' | 'loading' => {
    const data = enrichmentData?.[option.label]
    if (requestedSources.value.has(option.label) && !data) return 'loading'
    return 'default'
  }

  const hasError = computed(() => {
    return currentSourceData.value != null && 'error' in currentSourceData.value
  })

  const displayData = computed<EnrichmentResult | undefined>(() => {
    if (!currentSourceData.value || hasError.value) return undefined
    return currentSourceData.value as EnrichmentResult
  })

  const onHover = (item: EnrichmentOption): void => {
    hoveredItem.value = item
    showPreview.value = true

    if (enrichmentData?.[item.label]) return
    if (requestedSources.value.has(item.label)) return

    requestedSources.value.add(item.label)
    emit('lookup', item, resolvedValue.value)
  }

  const onRetry = (): void => {
    if (!hoveredItem.value) return
    const label = hoveredItem.value.label
    requestedSources.value.delete(label)
    requestedSources.value.add(label)
    emit('lookup', hoveredItem.value, resolvedValue.value)
  }

  onUpdated(() => {
    if (previousResolvedValue.value === resolvedValue.value) return

    previousResolvedValue.value = resolvedValue.value
    requestedSources.value.clear()
    hoveredItem.value = null
    showPreview.value = false
  })
</script>

<template>
  <div class="ep-contextual-lookup">
    <ep-dropdown
      v-bind="$attrs"
      :auto-focus="false"
      @close="showPreview = false"
    >
      <template #trigger="{ attrs, on }">
        <div class="trigger-wrapper">
          <slot
            name="trigger"
            v-bind="{ attrs, on }"
          >
            {{ label }}
          </slot>
          <Asterisk02 class="lookup-asterisk" />
        </div>
      </template>
      <template #content>
        <div class="ep-enrichment-content">
          <ep-menu class="ep-menu-subtle">
            <ep-menu-item
              v-for="(option, index) in enrichmentOptions"
              :key="index"
              type="item"
              @mouseover="onHover(option)"
              @focus="onHover(option)"
            >
              <ep-button class="ep-button--menu-item">
                <span
                  :class="['ep-button__async-label', { 'ep-button__async-label--loading': getSourceStatus(option) === 'loading' }]"
                >
                  <span class="ep-button__async-text">{{ option.label }}</span>
                  <span
                    v-if="getSourceStatus(option) === 'loading'"
                    class="ep-button__async-loader"
                  >
                    <EpLoaderSquares />
                  </span>
                </span>
              </ep-button>
            </ep-menu-item>
          </ep-menu>
          <div
            v-if="showPreview && (hasError || displayData)"
            class="enrichment-preview"
          >
            <ep-flex
              v-if="hasError"
              class="flex-col gap-10 enrichment-error"
            >
              <span>Failed to load enrichment data.</span>
              <ep-button @click="onRetry">
                Retry
              </ep-button>
            </ep-flex>
            <ep-flex
              v-else-if="displayData"
              class="flex-col gap-10"
            >
              <ep-key-value-table
                :data="displayData"
                section-headers
              />
              <ep-flex class="gap-10">
                <!-- slot for "action" button -->
                <slot name="action" />
                <ep-button>
                  Source
                  <template #icon-right>
                    <ArrowUpRight01 class="source-button-icon" />
                  </template>
                </ep-button>
              </ep-flex>
            </ep-flex>
          </div>
        </div>
      </template>
    </ep-dropdown>
  </div>
</template>


```

## Styles (SCSS)

```scss
.ep-contextual-lookup {
  --ep-contextual-lookup-preview-offset: 0.5rem;
  --ep-contextual-lookup-preview-min-width: 40rem;
  --ep-contextual-lookup-preview-padding: var(--space--5);
  --ep-contextual-lookup-preview-bg-color: var(--interface-foreground);
  --ep-contextual-lookup-preview-border-width: var(--border-width--hairline);
  --ep-contextual-lookup-preview-border-style: solid;
  --ep-contextual-lookup-preview-border-color: var(--border-color);
  --ep-contextual-lookup-preview-border-radius: var(--border-radius--default);
  --ep-contextual-lookup-preview-shadow: var(--shadow--dropdown);
  --ep-contextual-lookup-preview-z-index: var(--z-index--dropdown);

  --ep-contextual-lookup-asterisk-size: 1.2rem;
  --ep-contextual-lookup-asterisk-text-color: var(--text-color--primary);
  --ep-contextual-lookup-icon-size: 1.4rem;
  --ep-contextual-lookup-icon-stroke-width: 0.2rem;

  --ep-contextual-lookup-trigger-gap: 0.25rem;
  --ep-contextual-lookup-trigger-text-decoration-color: hsl(from var(--text-color) h s l / 0.5);
  --ep-contextual-lookup-trigger-text-underline-offset: 0.2rem;
  --ep-contextual-lookup-trigger-hover-text-color: var(--text-color--primary);

  position: relative;
  display: inline-block;

  .ep-enrichment-content {
    position: relative;
  }

  .enrichment-preview {
    position: absolute;
    z-index: var(--ep-contextual-lookup-preview-z-index);
    top: 0;
    left: calc(100% + var(--ep-contextual-lookup-preview-offset));
    min-width: var(--ep-contextual-lookup-preview-min-width);
    padding: var(--ep-contextual-lookup-preview-padding);
    border-width: var(--ep-contextual-lookup-preview-border-width);
    border-style: var(--ep-contextual-lookup-preview-border-style);
    border-color: var(--ep-contextual-lookup-preview-border-color);
    border-radius: var(--ep-contextual-lookup-preview-border-radius);
    background: var(--ep-contextual-lookup-preview-bg-color);
    box-shadow: var(--ep-contextual-lookup-preview-shadow);
  }

  .lookup-asterisk {
    --ep-icon-width: var(--ep-contextual-lookup-asterisk-size);
    --ep-icon-height: var(--ep-contextual-lookup-asterisk-size);
    --ep-icon-stroke-width: var(--ep-contextual-lookup-icon-stroke-width);
    color: var(--ep-contextual-lookup-asterisk-text-color);
  }

  .source-button-icon {
    --ep-icon-width: var(--ep-contextual-lookup-icon-size);
    --ep-icon-height: var(--ep-contextual-lookup-icon-size);
    --ep-icon-stroke-width: var(--ep-contextual-lookup-icon-stroke-width);
  }

  .trigger-wrapper {
    display: inline-flex;
    cursor: pointer;
    gap: var(--ep-contextual-lookup-trigger-gap);
    text-decoration: underline;
    text-decoration-color: var(--ep-contextual-lookup-trigger-text-decoration-color);
    text-decoration-style: dotted;
    text-underline-offset: var(--ep-contextual-lookup-trigger-text-underline-offset);

    &:hover {
      color: var(--ep-contextual-lookup-trigger-hover-text-color);
    }
  }
}

```