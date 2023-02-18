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
            :class="crumbClass(index)"
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
      crumbClass(index) {
        return index < this.crumbs.length - 1 ? 'text--link' : ''
      },
      itemClick(item) {
        this.$emit('crumb-click', item)
        // if (item.command) {
        //   item.command(item)
        // }
      }
    }
  }
</script>
