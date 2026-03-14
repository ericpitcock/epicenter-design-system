<script setup lang="ts">
  import ArrowRight01 from '@ericpitcock/epicenter-icons-vue/ArrowRight01'

  interface BreadcrumbItem {
    customClass?: string
    label: string
    to?: string
  }

  interface EpBreadcrumbsProps {
    /** An array of breadcrumb items with label, to, and optional customClass properties. */
    items?: BreadcrumbItem[]
  }

  const { items = [] } = defineProps<EpBreadcrumbsProps>()

  const emit = defineEmits<{
    navigate: [payload: { event: MouseEvent; crumb: BreadcrumbItem }]
  }>()

  const handleClick = (event: MouseEvent, crumb: BreadcrumbItem): void => {
    emit('navigate', { event, crumb })
  }
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="ep-breadcrumbs">
      <li
        v-for="(crumb, index) in items"
        :key="index"
        class="ep-breadcrumbs__item"
        :class="crumb.customClass"
      >
        <template v-if="$slots.item">
          <!-- @slot item - Custom content for each breadcrumb item. Provides crumb, index, and is-last via slot props. -->
          <slot
            name="item"
            :crumb="crumb"
            :index="index"
            :is-last="index === items.length - 1"
          />
        </template>
        <template v-else>
          <a
            v-if="index !== items.length - 1"
            :href="crumb.to"
            @click="handleClick($event, crumb)"
          >
            {{ crumb.label }}
          </a>
          <span
            v-else
            aria-current="page"
            class="ep-breadcrumbs__item--current"
          >{{ crumb.label }}</span>
        </template>
        <span
          v-if="index !== items.length - 1"
          class="ep-breadcrumbs__separator"
          aria-hidden="true"
        >
          <!-- @slot separator - Custom separator between breadcrumb items. Provides index via slot props. -->
          <slot
            name="separator"
            :index="index"
          >
            <ArrowRight01 />
          </slot>
        </span>
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
  .ep-breadcrumbs {
    list-style: none;
    display: flex;

    &__item {
      display: flex;
      align-items: center;
      color: var(--text-color--subtle);

      a {
        cursor: pointer;

        &:hover {
          color: var(--text-color--loud);
        }
      }

      &--current {
        color: var(--text-color--loud);
        cursor: default;
      }
    }

    &__separator {
      padding-inline: 0.5em;

      .ep-icon {
        --ep-icon-width: 1em;
        --ep-icon-height: 1em;
        --ep-icon-stroke-width: 3px;
        --ep-icon-color: var(--text-color--disabled);
      }
    }
  }
</style>