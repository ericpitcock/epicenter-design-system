<template>
  <div class="ep-tabs">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="ep-tabs__tab-item"
      :class="{ 'ep-tabs__tab-item--active': index === activeTabIndex }"
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
      externalActiveTab: {
        type: Number,
        default: null
      },
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
    computed: {
      activeTabIndex() {
        // if this.externalActiveTab is null, return this.activeTab else return this.externalActiveTab
        return this.externalActiveTab === null ? this.activeTab : this.externalActiveTab
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
