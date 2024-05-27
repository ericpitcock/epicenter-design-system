<template>
  <div :class="['ep-empty-state', classes]">
    <div
      v-if="$slots.img"
      class="ep-empty-state__img"
    >
      <slot name="img" />
    </div>
    <div class="ep-empty-state__body">
      <h2 class="font-size--body">
        <slot />
      </h2>
      <div
        v-if="$slots.subtext"
        class="text--subtle font-size--small"
      >
        <slot name="subtext" />
      </div>
      <div
        v-if="$slots.cta"
        class="ep-empty-state__body__cta"
      >
        <slot name="cta" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  defineOptions({
    name: 'EpEmptyState',
  })

  const props = defineProps({
    direction: {
      type: String,
      default: 'column'
    },
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
