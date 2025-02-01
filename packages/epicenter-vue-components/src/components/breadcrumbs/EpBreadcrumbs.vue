<template>
  <nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(crumb, index) in breadcrumbItems"
        :key="index"
        class="breadcrumb-item"
        :class="crumb.customClass"
      >
        <!-- Use the custom "item" slot if provided -->
        <template v-if="$slots.item">
          <slot
            name="item"
            :crumb="crumb"
            :index="index"
            :is-last="index === breadcrumbItems.length - 1"
          />
        </template>
        <!-- Default rendering -->
        <template v-else>
          <!-- Render a router-link for all but the last breadcrumb -->
          <router-link
            v-if="index !== breadcrumbItems.length - 1"
            :to="crumb.to"
          >
            {{ crumb.label }}
          </router-link>
          <!-- Last breadcrumb is non-clickable with aria-current -->
          <span
            v-else
            aria-current="page"
          >{{ crumb.label }}</span>
        </template>

        <!-- Separator (only shown if not the last item) -->
        <span
          v-if="index !== breadcrumbItems.length - 1"
          class="breadcrumb-separator"
          aria-hidden="true"
        >
          <template v-if="$slots.separator">
            <slot
              name="separator"
              :index="index"
            />
          </template>
          <template v-else>
            <!-- Default separator -->
            &gt;
          </template>
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  /**
   * Props:
   * - items: An array of breadcrumb objects.
   *   Each object should have:
   *     - label: String (the text to display)
   *     - to: String or Object (the route target; note we use "to" for router-link)
   *     - customClass: Optional string for additional CSS classes.
   *
   * - auto: Boolean - when true, the component will auto-generate breadcrumbs
   *   based on the current Vue Router route.
   */
  const props = defineProps({
    items: {
      type: Array,
      default: () => []
    },
    auto: {
      type: Boolean,
      default: false
    }
  })

  const route = useRoute()

  /**
   * The computed breadcrumb list is determined by:
   * - If auto mode is enabled, deriving breadcrumbs from route.matched.
   *   In auto mode, you can add a `meta` field to your route definitions.
   *   For example:
   *     meta: { breadcrumb: 'My Page', customClass: 'my-class' }
   *   Records with meta.breadcrumb explicitly set to false will be skipped.
   * - Otherwise, it uses the provided items prop.
   */
  const breadcrumbItems = computed(() => {
    if (props.auto) {
      return route.matched
        .filter(record => record.meta && record.meta.breadcrumb !== false)
        .map(record => ({
          label: record.meta.breadcrumb || record.name || '',
          to: record.path,
          customClass: record.meta.customClass || ''
        }))
    } else {
      return props.items
    }
  })
</script>

<!-- You can add your own styling or import styles from your design system -->
<style scoped>
  .breadcrumb {
    /* Your custom breadcrumb styles */
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  .breadcrumb-item {
    display: flex;
    align-items: center;
  }

  .breadcrumb-separator {
    margin: 0 0.5em;
  }
</style>