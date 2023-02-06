<template>
  <div class="breadcrumb">
    <ul>
      <li v-for="(item, index) in breadcrumbs" :key="item.path">
        <a v-if="index !== breadcrumbs.length - 1" @click="$router.push(item.path)">{{ item.name }}</a>
        <span v-else>{{ item.name }}</span>
        <span v-if="index !== breadcrumbs.length - 1"> / </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      // Return an array of breadcrumb items, each with a name and a path
      // You can define your own logic to generate the breadcrumbs based on the current route or other data
      const route = this.$route
      const breadcrumbs = []
      while (route) {
        breadcrumbs.unshift({ name: route.meta.breadcrumb || route.name, path: route.path })
        route = route.matched[0].parent
      }
      return breadcrumbs
    },
  },
}
</script>

<style>
.breadcrumb {
  display: flex;
  align-items: center;
  padding: 8px;
}

.breadcrumb ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.breadcrumb li {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
