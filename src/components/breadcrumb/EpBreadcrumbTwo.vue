<template>
  <div class="ep-breadcrumbs">
    <nav>
      <ol>
        <li>
          <router-link :to="{ name: 'Years' }">Home</router-link>
        </li>
        <li v-for="(item, index) in breadcrumbs" :key="index">
          <span class="divider">/</span>
          <router-link :to="item.to" v-if="item.to">{{ item.text }}</router-link>
          <span v-else>{{ item.text }}</span>
        </li>
      </ol>
      <!-- {{ $route.fullPath }} -->
    </nav>
  </div>
</template>

<script>
// import { useRoute } from 'vue-router'

export default {
  name: 'EpBreadcrumbTwo',
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