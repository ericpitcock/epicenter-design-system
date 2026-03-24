<script setup lang="ts">
  import type { Direction } from '../../types'

  interface Props {
    /**
     * The direction of the divider.
     * @values horizontal, vertical
     */
    direction?: Direction
  }

  const {
    direction = 'horizontal',
  } = defineProps<Props>()

  defineOptions({ name: 'EpDivider' })
</script>

<template>
  <div :class="['ep-divider', `ep-divider--${direction}`]" />
</template>
