<template>
  <div class="ep-tabs">
    <div class="ep-tabs__tab-item ep-tabs__tab-item--active">
      <span>API access</span>
    </div>
    <div class="ep-tabs__tab-item">
      <span>Asset integrations</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpTabs',
    props: {
      vertical: {
        type: Boolean,
        default: false
      },
      activeTab: {
        type: Number,
        default: 0
      }
    },
  }
</script>

<style lang="scss" scoped>
  .ep-tabs {
    display: flex;
    align-self: stretch;
    gap: 0 3rem;
    user-select: none;
    &__tab-item {
      display: inline-flex;
      padding: 0 0.5rem;
      border-bottom: 3px solid transparent;
      
      span {
        align-self: center;
        position: relative;
        top: 2px;
      }
      &:not(.ep-tabs__tab-item--active):hover {
        border-bottom-color: var(--primary-color--hover);
        cursor: pointer;
      }
      &--active {
        border-bottom-color: var(--color--primary);
      }
    }
  }
</style>