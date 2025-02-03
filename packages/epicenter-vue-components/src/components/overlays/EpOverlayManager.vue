<template>
  <Teleport
    defer
    to="#app"
  >
    <div
      v-for="{ id, component: Component, props } in overlays"
      :key="id"
    >
      <component
        :is="Component"
        v-bind="props"
        @close="removeOverlay(id)"
      />
      <p>This is the overlay manager</p>
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