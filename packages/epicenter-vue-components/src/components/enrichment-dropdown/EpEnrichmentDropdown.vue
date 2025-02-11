<template>
  <div class="ep-enrichment-dropdown">
    <ep-dropdown
      :button-props="buttonProps"
      @close="showPreview = false"
    >
      <template #content>
        <div class="ep-enrichment-content">
          <ep-menu
            :menu-items="enrichmentOptions"
            @mouseover="handleHover"
          />
          <div
            v-if="showPreview"
            class="enrichment-preview"
          >
            <ep-loading-state
              v-if="loading"
              :message="{ icon: 'oval', message: 'Fetching enrichment data…' }"
            />
            <ep-flex
              v-if="enrichmentData"
              class="flex-col gap-10"
            >
              <ep-key-value-table
                :data="enrichmentData[hoveredItem.label]"
                section-headers
              />
              <ep-button
                label="Pin in dock"
                @click="handleDock"
              />
            </ep-flex>
          </div>
        </div>
      </template>
    </ep-dropdown>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import EpButton from '@/components/button/EpButton.vue'
  import EpDropdown from '@/components/dropdown/EpDropdown.vue'
  import EpFlex from '@/components/flexbox/EpFlex.vue'
  import EpKeyValueTable from '@/components/key-value-table/EpKeyValueTable.vue'
  import EpLoadingState from '@/components/loading-state/EpLoadingState.vue'
  import EpMenu from '@/components/menu/EpMenu.vue'

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
      name: 'search',
      style: {
        '--ep-icon-color': 'var(--primary-color-base)'
      }
    },
    iconRight: undefined,
    class: 'ep-button-var--ghost'
  }

  const handleHover = (item) => {
    console.log(item)
    hoveredItem.value = item
    showPreview.value = true
    loading.value = true

    setTimeout(() => {
      loading.value = false
    }, 800)
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
    background: var(--interface-surface);
    padding: 2rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow--dropdown);
    z-index: var(--z-index--dropdown);
  }
</style>
