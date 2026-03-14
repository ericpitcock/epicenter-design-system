<script setup lang="ts">
  import { computed } from 'vue'

  interface EpEmptyStateProps {
    /**
     * Layout direction of the empty state content.
     * @values 'column', 'row'
     */
    direction?: string
    /**
     * Horizontal alignment of the content.
     * @values 'left', 'center', 'right'
     */
    justify?: string
  }

  const {
    direction = 'column',
    justify = 'center',
  } = defineProps<EpEmptyStateProps>()

  const classes = computed(() => {
    return {
      'ep-empty-state--column': direction === 'column',
      'ep-empty-state--row': direction === 'row',
      'ep-empty-state--justify-left': justify === 'left',
      'ep-empty-state--justify-right': justify === 'right',
    }
  })
</script>

<template>
  <div :class="['ep-empty-state', classes]">
    <div
      v-if="$slots.img"
      class="ep-empty-state__img"
    >
      <!-- @slot Image or icon to display in the empty state -->
      <slot name="img" />
    </div>
    <div class="ep-empty-state__body">
      <!-- @slot Main content/message of the empty state -->
      <slot />
      <div
        v-if="$slots.subtext"
        class="text--subtle font-size--small"
      >
        <!-- @slot Additional descriptive text or instructions -->
        <slot name="subtext" />
      </div>
      <div
        v-if="$slots.cta"
        class="ep-empty-state__body__cta"
      >
        <!-- @slot Call-to-action button or link -->
        <slot name="cta" />
      </div>
    </div>
  </div>
</template>
