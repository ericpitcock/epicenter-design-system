<template>
  <div class="ep-tab-content">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="ep-tab-content__tab-item"
      :class="{ 'ep-tab-content__tab-item--active': index === activeTab }"
    >
      <slot :name="`tab-${index}`" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpTabContent',
    props: {
      activeTab: {
        type: Number,
        default: 0
      },
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-tab-content {
    &__tab-item {
      display: none;

      &--active {
        display: block;
      }
    }
  }
</style>