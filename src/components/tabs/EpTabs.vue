<template>
  <div class="ep-tabs">
    <div
      v-for="(item, index) in items"
      class="ep-tabs__tab-item"
      :class="{ 'ep-tabs__tab-item--active': index === activeTab }"
      @click="setActiveTab(index)"
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
      },
      // initialActiveTab: {
      //   type: Number,
      //   default: 0
      // }
    },
    data() {
      return {
        activeTab: 0
      }
    },
    methods: {
      setActiveTab(index) {
        this.activeTab = index
        console.log('setActiveTab', index)
        this.$emit('tab-click', index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-tabs {
    display: flex;
    height: 100%;
    gap: 0 3rem;
    user-select: none;
    &__tab-item {
      display: inline-flex;
      span {
        position: relative;
        border-bottom: 3px solid transparent;
        top: 1px;
        display: inline-flex;
        align-items: center;
      }
      &:not(.ep-tabs__tab-item--active):hover span {
        border-bottom-color: var(--gray-200);
        cursor: pointer;
      }
      &--active span {
        border-bottom-color: var(--color--primary);
      }
    }
  }
</style>