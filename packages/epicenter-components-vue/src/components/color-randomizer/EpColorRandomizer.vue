<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  interface EpColorRandomizerProps {
    /**
     * Array of color values to randomly assign.
     * Colors are coordinated across all instances to avoid repeats
     * until all colors have been used (bag randomization).
     */
    colors: string[]
  }

  const props = defineProps<EpColorRandomizerProps>()

  // --- Shared state across all instances (module-level) ---
  // Keyed by serialized colors array so different palettes get separate bags
  const bags = new Map<string, string[]>()
  const instanceColors = new Map<symbol, string>()

  function shuffled(arr: string[]): string[] {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]]
    }

    return copy
  }

  function drawColor(colors: string[]): string {
    const key = JSON.stringify(colors)

    if (!bags.has(key) || bags.get(key)!.length === 0) {
      bags.set(key, shuffled(colors))
    }

    return bags.get(key)!.pop()!
  }
  // --- End shared state ---

  const instanceId = Symbol()
  const assignedColor = ref<string>('')

  onMounted(() => {
    assignedColor.value = drawColor(props.colors)
    instanceColors.set(instanceId, assignedColor.value)
  })

  onBeforeUnmount(() => {
    instanceColors.delete(instanceId)
  })
</script>

<template>
  <span
    class="ep-color-randomizer"
    :style="{ color: assignedColor }"
  >
    <!-- @slot Default slot. Content inherits the randomly assigned color. -->
    <slot />
  </span>
</template>
