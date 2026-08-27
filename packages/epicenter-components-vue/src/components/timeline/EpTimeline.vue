<script setup lang="ts">
  import EpBadge from '../badge/EpBadge.vue'

  interface TimelineItem {
    /** Extra class applied to the list item. */
    customClass?: string
    /** Date for the entry. Rendered as-is, so pre-format it however you like. */
    date: string
    /** Optional supporting prose. */
    description?: string
    /** Optional short labels rendered after the description. */
    tags?: string[]
    /** Headline for the entry. */
    title: string
    /** Optional href. When set, the title renders as a link. */
    to?: string
    /** Optional accent for the entry's marker. */
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  }

  interface Props {
    /** The entries to render, in the order they should appear. */
    items?: TimelineItem[]
    /** Render each date in a `<time datetime="…">`. Turn off when the date strings are not machine-readable. */
    semanticDates?: boolean
  }

  const { items = [], semanticDates = true } = defineProps<Props>()

  const emit = defineEmits<{
    /** Fired when an entry's title link is clicked. */
    'item-click': [payload: { event: MouseEvent; item: TimelineItem; index: number }]
  }>()

  defineOptions({ name: 'EpTimeline' })

  const onItemClick = (event: MouseEvent, item: TimelineItem, index: number): void => {
    emit('item-click', { event, item, index })
  }
</script>

<template>
  <ol
    v-if="items.length"
    class="ep-timeline"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
      class="ep-timeline__item"
      :class="item.customClass"
    >
      <!-- @slot marker - Replaces the dot on the rail. Provides item and index via slot props. -->
      <slot
        name="marker"
        :item="item"
        :index="index"
      >
        <span
          class="ep-timeline__marker"
          :class="item.variant && item.variant !== 'default' ? `ep-timeline__marker--${item.variant}` : null"
          aria-hidden="true"
        />
      </slot>
      <div class="ep-timeline__body">
        <!-- @slot item - Replaces the whole entry body. Provides item, index, and is-last via slot props. -->
        <slot
          name="item"
          :item="item"
          :index="index"
          :is-last="index === items.length - 1"
        >
          <!-- @slot date - Replaces the rendered date. Provides item and index via slot props. -->
          <slot
            name="date"
            :item="item"
            :index="index"
          >
            <component
              :is="semanticDates ? 'time' : 'span'"
              class="ep-timeline__date"
              :datetime="semanticDates ? item.date : null"
            >
              {{ item.date }}
            </component>
          </slot>
          <h3 class="ep-timeline__title">
            <a
              v-if="item.to"
              :href="item.to"
              @click="onItemClick($event, item, index)"
            >{{ item.title }}</a>
            <template v-else>
              {{ item.title }}
            </template>
          </h3>
          <p
            v-if="item.description"
            class="ep-timeline__description"
          >
            {{ item.description }}
          </p>
          <div
            v-if="item.tags?.length"
            class="ep-timeline__tags"
          >
            <!-- @slot tag - Replaces each tag. Provides tag, item, and index via slot props. -->
            <slot
              v-for="tag in item.tags"
              :key="tag"
              name="tag"
              :tag="tag"
              :item="item"
              :index="index"
            >
              <ep-badge :label="tag" />
            </slot>
          </div>
        </slot>
      </div>
    </li>
  </ol>
  <!-- @slot empty - Shown when items is empty. -->
  <slot
    v-else
    name="empty"
  />
</template>
