# EpTimeline



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `items` | The entries to render, in the order they should appear. | `Array` | `-` |
| `semanticDates` | Render each date in a `<time datetime="…">`. Turn off when the date strings are not machine-readable. | `boolean` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `item-click` | Fired when an entry's title link is clicked. | - |

## Slots
| Name | Description |
|------|-------------|
| `marker` | Replaces the dot on the rail. Provides item and index via slot props. |
| `item` | Replaces the whole entry body. Provides item, index, and is-last via slot props. |
| `date` | Replaces the rendered date. Provides item and index via slot props. |
| `tag` | Replaces each tag. Provides tag, item, and index via slot props. |
| `empty` | Shown when items is empty. |

## CSS Custom Properties

Set any of these with a selector that matches `.ep-timeline` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-timeline {
  --ep-timeline-body-gap: /* … */;
}
```

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-timeline-body-gap` | `var(--space--1)` | — |
| `--ep-timeline-item-column-gap` | `var(--space--4)` | — |
| `--ep-timeline-item-gap` | `var(--space--6)` | — |
| `--ep-timeline-tags-gap` | `var(--space--1)` | — |
| `--ep-timeline-tags-margin-block-start` | `var(--space--2)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-timeline-date-font-size` | `var(--font-size--tiny)` | — |
| `--ep-timeline-date-font-variation-settings` | `var(--font-weight--medium)` | — |
| `--ep-timeline-date-letter-spacing` | `0.1rem` | — |
| `--ep-timeline-date-text-color` | `var(--text-color--subtle)` | — |
| `--ep-timeline-date-text-transform` | `uppercase` | — |
| `--ep-timeline-description-font-size` | `var(--font-size--small)` | — |
| `--ep-timeline-description-line-height` | `var(--text-line-height--normal)` | — |
| `--ep-timeline-description-text-color` | `var(--text-color--subtle)` | — |
| `--ep-timeline-tag-font-size` | `var(--font-size--tiny)` | — |
| `--ep-timeline-tag-text-color` | `var(--text-color--subtle)` | — |
| `--ep-timeline-title-font-size` | `var(--font-size--default)` | — |
| `--ep-timeline-title-font-variation-settings` | `var(--font-weight--semi-bold)` | — |
| `--ep-timeline-title-hover-text-color` | `var(--text-color--link)` | hover |
| `--ep-timeline-title-line-height` | `var(--text-line-height--tight)` | — |
| `--ep-timeline-title-text-color` | `var(--text-color--loud)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-timeline-description-max-width` | `68ch` | — |
| `--ep-timeline-marker-size` | `var(--space--3)` | — |
| `--ep-timeline-rail-width` | `var(--border-width--hairline)` | — |

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-timeline-marker-bg-color` | `var(--interface-bg)` | — |
| `--ep-timeline-rail-bg-color` | `var(--border-color--lighter)` | — |
| `--ep-timeline-tag-bg-color` | `var(--interface-surface)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-timeline-marker-border-color` | `var(--border-color)` | — |
| `--ep-timeline-marker-border-radius` | `var(--border-radius--full)` | — |
| `--ep-timeline-marker-border-style` | `solid` | — |
| `--ep-timeline-marker-border-width` | `var(--border-width--thick)` | — |
| `--ep-timeline-tag-border-color` | `var(--border-color--lighter)` | — |

## Component Code

```vue
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

```

## Styles (SCSS)

```scss
// A vertical rail of dated entries. The rail is drawn per-item rather than as a
// single line on the root: `::before` spans from under each marker to the top of
// the next one, so it terminates at the last marker no matter how tall the last
// entry's body is. A full-height line on the root would overshoot it.
.ep-timeline {
  --ep-timeline-item-gap: var(--space--6);
  --ep-timeline-item-column-gap: var(--space--4);
  --ep-timeline-body-gap: var(--space--1);

  --ep-timeline-rail-width: var(--border-width--hairline);
  --ep-timeline-rail-bg-color: var(--border-color--lighter);

  --ep-timeline-marker-size: var(--space--3);
  --ep-timeline-marker-bg-color: var(--interface-bg);
  --ep-timeline-marker-border-width: var(--border-width--thick);
  --ep-timeline-marker-border-style: solid;
  --ep-timeline-marker-border-color: var(--border-color);
  --ep-timeline-marker-border-radius: var(--border-radius--full);

  --ep-timeline-date-font-size: var(--font-size--tiny);
  --ep-timeline-date-font-variation-settings: var(--font-weight--medium);
  --ep-timeline-date-text-color: var(--text-color--subtle);
  --ep-timeline-date-letter-spacing: 0.1rem;
  --ep-timeline-date-text-transform: uppercase;

  --ep-timeline-title-font-size: var(--font-size--default);
  --ep-timeline-title-font-variation-settings: var(--font-weight--semi-bold);
  --ep-timeline-title-text-color: var(--text-color--loud);
  --ep-timeline-title-hover-text-color: var(--text-color--link);
  --ep-timeline-title-line-height: var(--text-line-height--tight);

  --ep-timeline-description-font-size: var(--font-size--small);
  --ep-timeline-description-text-color: var(--text-color--subtle);
  --ep-timeline-description-line-height: var(--text-line-height--normal);
  --ep-timeline-description-max-width: 68ch;

  --ep-timeline-tags-gap: var(--space--1);
  --ep-timeline-tags-margin-block-start: var(--space--2);
  --ep-timeline-tag-font-size: var(--font-size--tiny);
  --ep-timeline-tag-text-color: var(--text-color--subtle);
  --ep-timeline-tag-bg-color: var(--interface-surface);
  --ep-timeline-tag-border-color: var(--border-color--lighter);

  display: flex;
  flex-direction: column;
  list-style: none;

  &__item {
    position: relative;
    display: grid;
    column-gap: var(--ep-timeline-item-column-gap);
    grid-template-columns: var(--ep-timeline-marker-size) 1fr;
    padding-block-end: var(--ep-timeline-item-gap);

    // The rail segment below this item's marker. Centred on the marker column,
    // stretched to the bottom of the item so it meets the next marker exactly.
    &::before {
      position: absolute;
      width: var(--ep-timeline-rail-width);
      background: var(--ep-timeline-rail-bg-color);
      content: '';
      inset-block-end: 0;
      inset-block-start: var(--ep-timeline-marker-size);
      // Flat arithmetic, not `calc((a - b) / 2)`: the property validator only
      // unwraps one level of nesting inside calc(), and reads deeper parens as
      // uncontrolled literals.
      inset-inline-start: calc(
        var(--ep-timeline-marker-size) / 2 - var(--ep-timeline-rail-width) / 2
      );
    }

    // Nothing to connect to past the final entry.
    &:last-child {
      padding-block-end: 0;

      &::before {
        content: none;
      }
    }
  }

  &__marker {
    width: var(--ep-timeline-marker-size);
    height: var(--ep-timeline-marker-size);
    box-sizing: border-box;
    border-width: var(--ep-timeline-marker-border-width);
    border-style: var(--ep-timeline-marker-border-style);
    border-color: var(--ep-timeline-marker-border-color);
    border-radius: var(--ep-timeline-marker-border-radius);
    background: var(--ep-timeline-marker-bg-color);

    // Variants reassign the marker's colour only — they declare nothing new.
    &--primary {
      --ep-timeline-marker-border-color: var(--primary-color-base);
    }

    &--success {
      --ep-timeline-marker-border-color: var(--status-success-border-color);
    }

    &--warning {
      --ep-timeline-marker-border-color: var(--status-warning-border-color);
    }

    &--danger {
      --ep-timeline-marker-border-color: var(--status-danger-border-color);
    }

    &--info {
      --ep-timeline-marker-border-color: var(--status-info-border-color);
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: var(--ep-timeline-body-gap);
    // The marker is a hair shorter than the date's line box; nudge the body up
    // so the two optically align on their first line.
    margin-block-start: calc(
      var(--ep-timeline-date-font-size) / 2 - var(--ep-timeline-marker-size) / 2
    );
  }

  &__date {
    color: var(--ep-timeline-date-text-color);
    font-size: var(--ep-timeline-date-font-size);
    font-variation-settings: var(--ep-timeline-date-font-variation-settings);
    letter-spacing: var(--ep-timeline-date-letter-spacing);
    text-transform: var(--ep-timeline-date-text-transform);
  }

  &__title {
    color: var(--ep-timeline-title-text-color);
    font-size: var(--ep-timeline-title-font-size);
    font-variation-settings: var(--ep-timeline-title-font-variation-settings);
    line-height: var(--ep-timeline-title-line-height);

    a {
      color: inherit;
      cursor: pointer;

      &:hover {
        color: var(--ep-timeline-title-hover-text-color);
      }
    }
  }

  &__description {
    max-width: var(--ep-timeline-description-max-width);
    color: var(--ep-timeline-description-text-color);
    font-size: var(--ep-timeline-description-font-size);
    line-height: var(--ep-timeline-description-line-height);
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ep-timeline-tags-gap);
    margin-block-start: var(--ep-timeline-tags-margin-block-start);

    // Configure the nested badge through its own properties rather than
    // overriding its rules.
    .ep-badge {
      --ep-badge-font-size: var(--ep-timeline-tag-font-size);
      --ep-badge-text-color: var(--ep-timeline-tag-text-color);
      --ep-badge-bg-color: var(--ep-timeline-tag-bg-color);
      --ep-badge-border-color: var(--ep-timeline-tag-border-color);
    }
  }
}

```