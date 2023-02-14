<template>
  <div class="ep-breadcrumbs">
    <nav>
      <ol>
        <li
          v-for="(item, index) in crumbs"
          :key="index"
        >
          <span
            v-if="index > 0"
            class="divider"
          >/</span>
          <span
            class="text--link"
            @click="itemClick(item)"
          >{{ item.text }}</span>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'EpBreadcrumbStatic',
    props: {
      crumbs: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      itemClick(item) {
        this.$emit('crumb-click', item)
        // if (item.command) {
        //   item.command(item)
        // }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-breadcrumbs {
    ol, li {
      display: flex;
      gap: 0.5rem;
      white-space: nowrap;
    }
  }
</style>