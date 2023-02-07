<template>
  <div class="ep-breadcrumbs">
    <nav>
      <ol>
        <li>
          <router-link :to="initialRoute.to">{{ initialRoute.text }}</router-link>
        </li>
        <li v-for="(item, index) in breadcrumbs" :key="index">
          <span class="divider">/</span>
          <router-link :to="item.to" v-if="item.to">{{ item.text }}</router-link>
          <span v-else>{{ item.text }}</span>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'EpBreadcrumbTwo',
    props: {
      initialRoute: {
        type: Object,
        default: () => ({ to: '/', text: 'Home' })
      }
    },
    computed: {
      breadcrumbs() {
        // return breadcrumbs from $route.fullPath
        const breadcrumbs = []
        const path = this.$route.fullPath
        const pathArray = path.split('/')
        pathArray.forEach((item, index) => {
          if (index > 0) {
            const to = pathArray.slice(0, index + 1).join('/')
            const text = item
            breadcrumbs.push({ to, text })
          }
        })
        return breadcrumbs
      }
    }
  }
</script>

<style lang="scss" scoped>
.ep-breadcrumbs {
  display: flex;
  a {
    &:hover {
    }
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