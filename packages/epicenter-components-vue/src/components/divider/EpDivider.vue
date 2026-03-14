<script setup lang="ts">
  import type { Direction } from '../../types'

  interface EpDividerProps {
    /**
     * The direction of the divider.
     * @values horizontal, vertical
     */
    direction?: Direction
  }

  const {
    direction = 'horizontal',
  } = defineProps<EpDividerProps>()
</script>

<template>
  <div :class="['ep-divider', `ep-divider--${direction}`]" />
</template>
