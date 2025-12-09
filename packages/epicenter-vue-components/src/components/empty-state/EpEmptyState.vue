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

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    /**
     * Layout direction of the empty state content.
     * @values 'column', 'row'
     */
    direction: {
      type: String,
      default: 'column'
    },
    /**
     * Horizontal alignment of the content.
     * @values 'left', 'center', 'right'
     */
    justify: {
      type: String,
      default: 'center'
    },
  })

  const classes = computed(() => {
    return {
      'ep-empty-state--column': props.direction === 'column',
      'ep-empty-state--row': props.direction === 'row',
      'ep-empty-state--justify-left': props.justify === 'left',
      'ep-empty-state--justify-right': props.justify === 'right',
    }
  })
</script>
