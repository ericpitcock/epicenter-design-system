<script setup lang="ts">
  import ArrowUpRight01 from '@ericpitcock/epicenter-icons-vue/ArrowUpRight01'
  import Asterisk02 from '@ericpitcock/epicenter-icons-vue/Asterisk02'
  import { computed, ref, watch } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpKeyValueTable from '../key-value-table/EpKeyValueTable.vue'
  import EpLoaderSquares from '../loaders/EpLoaderSquares.vue'
  import EpMenu from '../menu/EpMenu.vue'
  import EpMenuItem from '../menu/EpMenuItem.vue'

  export interface EnrichmentOption {
    [key: string]: unknown
    label: string
  }

  export interface EnrichmentResult {
    data: Record<string, unknown>
    name: string
  }

  export interface EnrichmentError {
    error: string
  }

  export type EnrichmentEntry = EnrichmentResult | EnrichmentError

  interface EpContextualLookupProps {
    enrichmentData?: Record<string, EnrichmentEntry> | null
    enrichmentOptions: EnrichmentOption[]
    label?: string
    value?: string
  }

  const props = withDefaults(defineProps<EpContextualLookupProps>(), {
    label: '',
    enrichmentData: null,
    value: '',
  })

  const emit = defineEmits<{
    lookup: [source: EnrichmentOption, value: string]
  }>()

  const hoveredItem = ref<EnrichmentOption | null>(null)
  const showPreview = ref(false)
  const requestedSources = ref(new Set<string>())

  const resolvedValue = computed(() => props.value || props.label)

  const currentSourceData = computed<EnrichmentEntry | undefined>(() => {
    if (!hoveredItem.value || !props.enrichmentData) return undefined
    return props.enrichmentData[hoveredItem.value.label]
  })

  const getSourceStatus = (option: EnrichmentOption): 'default' | 'loading' => {
    const data = props.enrichmentData?.[option.label]
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

    if (props.enrichmentData?.[item.label]) return
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

  // Reset cache when the enriched value changes
  watch(resolvedValue, () => {
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
            {{ props.label }}
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

<style lang="scss" scoped>
  .ep-contextual-lookup {
    position: relative;
    display: inline-block;
  }

  .ep-enrichment-content {
    position: relative;
  }

  .enrichment-preview {
    position: absolute;
    top: 0;
    left: calc(100% + 0.5rem);
    min-width: 40rem;
    padding: 2rem;
    background: var(--interface-foreground);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow--dropdown);
    z-index: var(--z-index--dropdown);
  }

  .lookup-asterisk {
    --ep-icon-width: 1.2rem;
    --ep-icon-height: 1.2rem;
    --ep-icon-stroke-width: 2px;
    color: var(--text-color--primary);
  }

  .source-button-icon {
    --ep-icon-width: 1.4rem;
    --ep-icon-height: 1.4rem;
    --ep-icon-stroke-width: 2px;
  }

  .trigger-wrapper {
    display: inline-flex;
    gap: 0.25rem;
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 2px;
    text-decoration-color: hsl(from var(--text-color) h s l / 0.5);
    cursor: pointer;

    &:hover {
      color: var(--text-color--primary);
    }
  }
</style>
