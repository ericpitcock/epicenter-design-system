<template>
  <nav aria-label="Breadcrumb">
    <ol class="ep-breadcrumbs">
      <li
        v-for="(crumb, index) in breadcrumbItems"
        :key="index"
        class="ep-breadcrumbs__item"
        :class="crumb.customClass"
      >
        <template v-if="$slots.item">
          <slot
            name="item"
            :crumb="crumb"
            :index="index"
            :is-last="index === breadcrumbItems.length - 1"
          />
        </template>
        <template v-else>
          <router-link
            v-if="index !== breadcrumbItems.length - 1"
            :to="crumb.to"
          >
            {{ crumb.label }}
          </router-link>
          <span
            v-else
            aria-current="page"
            class="ep-breadcrumbs__item--current"
          >{{ crumb.label }}</span>
        </template>
        <span
          v-if="index !== breadcrumbItems.length - 1"
          class="ep-breadcrumbs__separator"
          aria-hidden="true"
        >
          <template v-if="$slots.separator">
            <slot
              name="separator"
              :index="index"
            />
          </template>
          <template v-else>
            <span class="ep-breadcrumbs__separator--default">
              <ep-icon name="chevron-right" />
            </span>
          </template>
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  import EpIcon from '../icon/EpIcon.vue'

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

<style lang="scss" scoped>
  .ep-breadcrumbs {
    list-style: none;
    display: flex;

    &__item {
      display: flex;
      align-items: center;
      color: var(--text-color--subtle);
      cursor: pointer;

      &:hover {
        color: var(--text-color--loud);
      }

      &--current {
        color: var(--text-color--loud);
        cursor: default;
      }
    }

    &__separator {
      padding-inline: 0.5em;

      .ep-icon {
        --ep-icon-width: 1.4em;
        position: relative;
        top: 0.1rem;
        left: 0.1rem;
      }
    }
  }
</style>