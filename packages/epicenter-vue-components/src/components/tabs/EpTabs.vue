<template>
  <div :class="['ep-tabs', { 'ep-tabs--classic': variant === 'classic' }]">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="ep-tabs__tab-item"
      :class="{ 'ep-tabs__tab-item--active': index === activeTabIndex }"
      @click="onClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpTabs',
    props: {
      activeTabIndex: {
        type: Number,
        default: null
      },
      items: {
        type: Array,
        default: () => []
      },
      variant: {
        type: String,
        default: 'default' // default, classic
      }
    },
    emits: ['tab-click'],
    // data() {
    //   return {
    //     activeTab: undefined
    //   }
    // },
    // computed: {
    //   activeTabIndex() {
    //     if (this.activeTab) {
    //       return this.activeTab
    //     }
    //     // if this.externalActiveTab is null, return this.activeTab
    //     // if this.externalActiveTab is undefined, return undefined
    //     // if this.externalActiveTab is a number, return this.externalActiveTab
    //     return this.externalActiveTab ?? this.activeTab
    //   }
    // },
    // watch: {
    //   externalActiveTab: {
    //     handler(newValue) {
    //       this.activeTab = undefined
    //     },
    //     immediate: true
    //   }
    // },
    methods: {
      onClick(index) {
        this.$emit('tab-click', index)
        // this.activeTab = index
      }
    },
  }
</script>
