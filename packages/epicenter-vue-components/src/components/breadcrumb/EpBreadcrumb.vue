<template>
  <nav
    class="ep-breadcrumb"
    aria-label="breadcrumb"
  >
    <ol>
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="ep-breadcrumb__item"
      >
        <router-link :to="crumb.to">
          {{ crumb.label }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  // eslint-disable-next-line no-unused-vars
  const router = useRouter()

  const breadcrumbs = computed(() => {
    const matchedRoutes = route.matched.filter(record => record.meta && record.meta.breadcrumb)
    return matchedRoutes.map(record => ({
      to: record.path,
      label: record.meta.breadcrumb
    }))
  })
</script>
