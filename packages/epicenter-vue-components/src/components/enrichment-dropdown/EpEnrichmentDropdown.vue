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
            @mouseover="handleHover"
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
                <ep-button
                  label="Add to dock"
                  @click="handleDock"
                />
                <ep-button
                  label="Source"
                  :icon-right="{
                    name: 'f-arrow-up-right',
                    style: {
                      '--ep-icon-width': '1.4rem',
                      '--ep-icon-height': '1.4rem',
                      '--ep-icon-stroke-width': '2',
                    }
                  }"
                />
              </ep-flex>
            </ep-flex>
          </div>
        </div>
      </template>
    </ep-dropdown>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
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

  const emit = defineEmits(['dock'])

  const hoveredItem = ref(null)
  const loading = ref(false)

  const showPreview = ref(false)

  const buttonProps = {
    label: props.label,
    size: 'small',
    iconLeft: {
      name: 'f-download-cloud',
      style: {
        '--ep-icon-color': 'var(--primary-color-base)'
      }
    },
    iconRight: undefined,
    class: 'ep-button-var--ghost'
  }

  const hasBeenHovered = ref([])

  const handleHover = (item) => {
    console.log(props.enrichmentData)
    if (hasBeenHovered.value.includes(item.label)) {
      hoveredItem.value = item
      showPreview.value = true
      return
    }

    hasBeenHovered.value.push(item.label)
    hoveredItem.value = item
    showPreview.value = true
    loading.value = true

    setTimeout(() => {
      loading.value = false
    }, 400)
  }

  const handleDock = () => {
    if (props.enrichmentData) {
      emit('dock', props.enrichmentData)
    }
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
