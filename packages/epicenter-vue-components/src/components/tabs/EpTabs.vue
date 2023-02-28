<template>
  <div class="ep-tabs">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="ep-tabs__tab-item"
      :class="{ 'ep-tabs__tab-item--active': index === activeTab }"
      @click="tabClick(item, index)"
    >
      <span>{{ item.label }}</span>
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
    emits: ['tabClick'],
    data() {
      return {
        activeTab: 0
      }
    },
    methods: {
      tabClick(item, index) {
        this.$emit('tabClick', index)
        this.activeTab = index
        console.log('tabClick', index)
      }
    }
  }
</script>
