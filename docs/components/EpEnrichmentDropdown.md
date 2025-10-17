# EpEnrichmentDropdown



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `label` | - | `string` | `''` |
| `enrichmentOptions` | - | `array` | `-` |
| `enrichmentData` | - | `object` | `null` |

## Slots
| Name | Description |
|------|-------------|
| `action` | No description available. |


::: info
This component does not use events.
:::

## Component Code

```vue
<template>
  <div class="ep-enrichment-dropdown">
    <ep-dropdown
      :button-props="buttonProps"
      v-bind="$attrs"
      @close="showPreview = false"
    >
      <template #content>
        <div class="ep-enrichment-content">
          <ep-menu
            class="ep-menu-subtle"
            :menu-items="enrichmentOptions"
            @mouseover="onHover"
          />
          <div
            v-if="showPreview"
            class="enrichment-preview"
          >
            <ep-loading-state
              v-if="loading"
              :message="{ icon: 'oval', message: 'Fetching data…' }"
            />
            <ep-flex
              v-if="enrichmentData"
              class="flex-col gap-10"
            >
              <ep-key-value-table
                :data="enrichmentData[hoveredItem.label]"
                section-headers
              />
              <ep-flex class="gap-10">
                <!-- slot for "action" button -->
                <slot name="action" />
                <ep-button>
                  Source
                  <template #icon-right>
                    <ep-icon
                      name="f-arrow-up-right"
                      style="
                        --ep-icon-width: 1.4rem;
                        --ep-icon-height: 1.4rem;
                        --ep-icon-stroke-width: 2;
                      "
                    />
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

<script setup>
  import { computed, ref } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpIcon from '../icon/EpIcon.vue'
  import EpKeyValueTable from '../key-value-table/EpKeyValueTable.vue'
  import EpLoadingState from '../loading-state/EpLoadingState.vue'
  import EpMenu from '../menu/EpMenu.vue'

  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    enrichmentOptions: {
      type: Array,
      required: true
    },
    enrichmentData: {
      type: Object,
      default: null
    }
  })

  const hoveredItem = ref(null)
  const loading = ref(false)
  const showPreview = ref(false)

  const buttonProps = computed(() => {
    return {
      label: props.label,
      size: 'large',
      iconLeft: {
        name: 'f-download-cloud',
        style: {
          '--ep-icon-color': 'var(--primary-color-base)'
        }
      },
      iconRight: undefined,
      class: 'ep-button-var--ghost'
    }
  })

  const hasBeenHovered = []

  const onHover = (item) => {
    if (hasBeenHovered.includes(item.label)) {
      hoveredItem.value = item
      showPreview.value = true
      return
    }

    hasBeenHovered.push(item.label)
    hoveredItem.value = item
    showPreview.value = true
    loading.value = true

    setTimeout(() => {
      loading.value = false
    }, 400)
  }
</script>

<style scoped>
  .ep-enrichment-dropdown {
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
</style>

```