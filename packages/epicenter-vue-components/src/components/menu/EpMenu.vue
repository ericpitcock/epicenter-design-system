<template>
  <div :class="['ep-menu', `ep-menu--${menuType}`]">
    <slot />
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpMenu'
  })

  const props = defineProps({
    menuType: {
      type: String,
      default: 'default' // default, dropdown, nav
    },
    size: {
      type: String,
      default: 'default'
    },
  })
</script>
