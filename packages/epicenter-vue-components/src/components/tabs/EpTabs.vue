<template>
  <div class="ep-tabs">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="ep-tabs__tab-item"
      :class="{ 'ep-tabs__tab-item--active': index === activeTab }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpTabs',
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    emits: ['tab-click'],
    data() {
      return {
        activeTab: 0
      }
    },
    methods: {
      tabClick(index) {
        this.$emit('tab-click', index)
        this.activeTab = index
      }
    }
  }
</script>
