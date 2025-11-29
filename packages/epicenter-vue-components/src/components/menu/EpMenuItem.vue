<template>
  <div
    v-if="type === 'divider'"
    class="ep-divider ep-divider--horizontal"
  />
  <div
    v-else-if="type === 'section'"
    class="ep-menu__section text-style--section"
  >
    <slot />
  </div>
  <div
    v-else
    class="ep-menu__item"
    @mouseover="onMouseover"
    @mouseleave="onMouseleave"
  >
    <slot />
    <div
      v-if="$slots.submenu"
      v-show="showSubmenu"
      class="ep-menu__item__sub-menu"
    >
      <slot name="submenu" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  defineOptions({
    name: 'EpMenuItem'
  })

  const props = defineProps({
    type: {
      type: String,
      default: 'item',
      validator: (value) => ['item', 'divider', 'section'].includes(value)
    }
  })

  const showSubmenu = ref(false)

  const onMouseover = () => {
    showSubmenu.value = true
  }

  const onMouseleave = () => {
    showSubmenu.value = false
  }
</script>
