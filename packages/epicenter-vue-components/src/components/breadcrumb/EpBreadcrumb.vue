<template>
  <div class="ep-breadcrumbs">
    <nav>
      <ol>
        <li
          v-for="(item, index) in items"
          :key="index"
        >
          <span
            v-if="index > 0"
            class="divider"
          >/</span>
          <component
            :is="element"
            :class="crumbClass(index)"
            :to="item.to"
            @click="itemClick(item)"
          >
            {{ item.text }}
          </component>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'EpBreadcrumb',
    props: {
      staticBreadcrumbs: {
        type: Array,
        default: () => []
      },
      type: {
        type: String,
        default: 'static' // static, dynamic
      }
    },
    emits: ['crumb-click'],
    computed: {
      element() {
        return (this.type === 'static') ? 'a' : 'router-link'
      },
      items() {
        if (this.type === 'static') {
          return this.staticBreadcrumbs
        } else {
          let items = []
          // return breadcrumbs from $route.fullPath
          const path = this.$route.fullPath
          const pathArray = path.split('/')
          pathArray.forEach((item, index) => {
            if (index > 0) {
              const to = pathArray.slice(0, index + 1).join('/')
              const text = item
              items.push({ to, text })
            }
          })
          return items
        }
      }
    },
    methods: {
      crumbClass(index) {
        return index < this.items.length - 1 ? 'text--link' : ''
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

<style lang="scss" scoped>
  .ep-breadcrumbs {
    display: flex;

    a {
      &:hover {}
    }

    ol {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      display: inline-block;
      margin: 0;
      padding: 0;

      .divider {
        margin: 0 0.5rem;
      }
    }
  }
</style>