<template>
  <div :class="['ep-menu', `ep-menu--${menuType}`]">
    <!-- @slot Default slot for menu items (EpMenuItem components). -->
    <slot />
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpMenu'
  })

  const props = defineProps({
    /**
     * The type/style of menu to display.
     * @values default, dropdown, nav
     */
    menuType: {
      type: String,
      default: 'default' // default, dropdown, nav
    },
    /**
     * The size of the menu items.
     */
    size: {
      type: String,
      default: 'default'
    },
  })
</script>
