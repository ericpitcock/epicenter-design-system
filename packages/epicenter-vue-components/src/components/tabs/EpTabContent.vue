<template>
  <div class="ep-tab-content">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="ep-tab-content__tab-item"
      :class="{ 'ep-tab-content__tab-item--active': index === activeTabIndex }"
    >
      <slot :name="`tab-${index}`" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpTabContent',
    props: {
      activeTabIndex: {
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
