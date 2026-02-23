<script setup>
  import ArrowUpRight01 from '@ericpitcock/epicenter-icons-vue/ArrowUpRight01'
  import Asterisk02 from '@ericpitcock/epicenter-icons-vue/Asterisk02'
  import { ref } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpKeyValueTable from '../key-value-table/EpKeyValueTable.vue'
  import EpLoadingState from '../loading-state/EpLoadingState.vue'
  import EpMenu from '../menu/EpMenu.vue'
  import EpMenuItem from '../menu/EpMenuItem.vue'

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

<template>
  <div class="ep-enrichment-dropdown">
    <ep-dropdown
      v-bind="$attrs"
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
                {{ option.label }}
              </ep-button>
            </ep-menu-item>
          </ep-menu>
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
