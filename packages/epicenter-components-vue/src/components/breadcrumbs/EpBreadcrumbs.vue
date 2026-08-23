<script setup lang="ts">
  import ArrowRight01 from '@ericpitcock/epicenter-icons-vue/ArrowRight01'

  interface BreadcrumbItem {
    customClass?: string
    label: string
    to?: string
  }

  interface Props {
    /** An array of breadcrumb items with label, to, and optional customClass properties. */
    items?: BreadcrumbItem[]
  }

  const { items = [] } = defineProps<Props>()

  const emit = defineEmits<{
    navigate: [payload: { event: MouseEvent; crumb: BreadcrumbItem }]
  }>()

  defineOptions({ name: 'EpBreadcrumbs' })

  const onBreadcrumbClick = (event: MouseEvent, crumb: BreadcrumbItem): void => {
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
            @click="onBreadcrumbClick($event, crumb)"
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

