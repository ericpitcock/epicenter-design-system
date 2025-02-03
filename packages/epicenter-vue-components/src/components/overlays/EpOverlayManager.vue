<template>
  <Teleport
    defer
    to="#app"
  >
    <div class="ep-overlay-manager">
      <div
        v-for="{ id, component: Component, props } in overlays"
        :key="id"
        class="ep-overlay"
      >
        <component
          :is="Component"
          v-bind="props"
          @close="removeOverlay(id)"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
  import { inject, computed } from 'vue'

  defineOptions({
    name: 'EpOverlayManager',
  })

  const overlay = inject('epOverlay')
  const overlays = computed(() => overlay.overlays)
  const removeOverlay = overlay.removeOverlay
</script>

<style lang="scss" scoped>
  .ep-overlay-manager {
    position: absolute;
    top: 3rem;
    right: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>