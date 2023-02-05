<template>
  <div class="ep-breadcrumb">
    <div
      v-for="(item, index) in items" :key="index"
      class="ep-breadcrumb__item"
    >
      <span
        class="ep-breadcrumb__item__text"
        @click="handleClick(item, index)"
      >
        {{ item.text }}
      </span>
      <span
        v-if="index < items.length - 1"
        class="ep-breadcrumb__item__separator"
      >/</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EpBreadcrumb',
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      handleClick (item, index) {
        this.$emit('crumb-click', item, index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-breadcrumb {
    display: flex;
    align-items: center;
    color: var(--text-color);
    .ep-breadcrumb__item {
      display: flex;
      align-items: center;
      .ep-breadcrumb__item__text {
        cursor: pointer;
        &:hover {
          color: var(--text-color--link);
        }
      }
      .ep-breadcrumb__item__separator {
        margin: 0 8px;
      }
    }
  }
</style>
