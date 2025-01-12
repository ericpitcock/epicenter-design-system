<template>
  <nav
    class="ep-breadcrumb"
    aria-label="breadcrumb"
  >
    <!-- <ol>
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="ep-breadcrumb__item"
      >
        <router-link :to="crumb.to">
          {{ crumb.label }}
        </router-link>
      </li>
    </ol> -->
  </nav>
</template>

<script setup>
  defineOptions({
    name: 'EpBreadcrumb'
  })

  // use fullPath to generate breadcrumbs
  // if route is / then breadcrumbs should display initial page
  // if route is /about then breadcrumbs should display Home > About
  // if route is /about/team then breadcrumbs should display Home > About > Team
  // if route is /about/team/1 then breadcrumbs should display Home > About > Team > 1
  // const breadcrumbs = computed(() => {
  //   const paths = fullPath.value.split('/').filter((path) => path)
  //   return paths.map((path, index) => {
  //     return {
  //       to: `/${path}`,
  //       label: path
  //     }
  //   })
  // })
</script>
