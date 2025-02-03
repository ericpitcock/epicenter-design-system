<template>
  <div class="ep-tab-content">
    <div
      v-for="(item, index) in items"
      :id="`tabpanel-${index}`"
      :key="index"
      class="ep-tab-content__tab-item"
      :class="{ 'ep-tab-content__tab-item--active': index === activeTabIndex }"
      role="tabpanel"
      :aria-labelledby="`tab-${index}`"
      :aria-hidden="index !== activeTabIndex"
    >
      <slot :name="`tab-${index}`" />
    </div>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpTabContent',
  })

  const props = defineProps({
    activeTabIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => []
    }
  })
</script>