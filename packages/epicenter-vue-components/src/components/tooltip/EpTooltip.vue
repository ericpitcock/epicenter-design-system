<template>
  <div class="ep-tooltip-wrapper">
    <div class="ep-tooltip">
      <slot name="tooltip" />
    </div>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'EpTooltip',
  }
</script>