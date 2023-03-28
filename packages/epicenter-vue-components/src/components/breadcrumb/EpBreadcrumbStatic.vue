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
            :class="crumbClasses(index)"
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
    emits: ['crumb-click'],
    methods: {
      crumbClasses(index) {
        return {
          'text--link': index < this.crumbs.length - 1,
          // this.crumbs.className if set
          [this.crumbs[index].className]: this.crumbs[index].className
        }
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
