<template>
  <div class="ep-menu-item">
    <slot />
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .ep-menu-item {
    padding: 0.8rem 2rem;
    &:hover {
      background: var(--menu-item-hover-color);
      color: var(--text-color-inverse);
      cursor: pointer;
    }
  }
</style>