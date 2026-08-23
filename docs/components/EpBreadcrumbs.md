# EpBreadcrumbs



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `items` | An array of breadcrumb items with label, to, and optional customClass properties. | `Array` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `navigate` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `item` | Custom content for each breadcrumb item. Provides crumb, index, and is-last via slot props. |
| `separator` | Custom separator between breadcrumb items. Provides index via slot props. |

## CSS Custom Properties

Set any of these with a selector that matches `.ep-breadcrumbs` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-breadcrumbs {
  --ep-breadcrumbs-gap: /* … */;
}
```

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-breadcrumbs-gap` | `0.5rem` | — |
| `--ep-breadcrumbs-separator-padding-inline` | `0.5em` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-breadcrumbs-item-hover-text-color` | `var(--text-color--loud)` | hover |
| `--ep-breadcrumbs-item-selected-text-color` | `var(--text-color--loud)` | selected |
| `--ep-breadcrumbs-item-text-color` | `var(--text-color--subtle)` | — |
| `--ep-breadcrumbs-separator-text-color` | `var(--text-color--disabled)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-breadcrumbs-separator-size` | `1em` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-breadcrumbs-separator-stroke-width` | `0.3rem` | — |

## Component Code

```vue
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


```

## Styles (SCSS)

```scss
// This file previously targeted `.ep-breadcrumb ol`, but both frameworks render
// `<ol class="ep-breadcrumbs">` — so none of it ever matched. The rules below
// are the ones that were living in the Vue SFC's scoped block, which is where
// they had to be for anything to render at all.
.ep-breadcrumbs {
  --ep-breadcrumbs-gap: 0.5rem;
  --ep-breadcrumbs-item-text-color: var(--text-color--subtle);
  --ep-breadcrumbs-item-hover-text-color: var(--text-color--loud);
  --ep-breadcrumbs-item-selected-text-color: var(--text-color--loud);
  --ep-breadcrumbs-separator-padding-inline: 0.5em;
  --ep-breadcrumbs-separator-size: 1em;
  --ep-breadcrumbs-separator-stroke-width: 0.3rem;
  --ep-breadcrumbs-separator-text-color: var(--text-color--disabled);

  display: flex;
  gap: var(--ep-breadcrumbs-gap);
  list-style: none;
  white-space: nowrap;

  &__item {
    display: flex;
    align-items: center;
    color: var(--ep-breadcrumbs-item-text-color);

    a {
      cursor: pointer;

      &:hover {
        color: var(--ep-breadcrumbs-item-hover-text-color);
      }
    }

    &--current {
      color: var(--ep-breadcrumbs-item-selected-text-color);
      cursor: default;
    }
  }

  &__separator {
    padding-inline: var(--ep-breadcrumbs-separator-padding-inline);

    .ep-icon {
      --ep-icon-width: var(--ep-breadcrumbs-separator-size);
      --ep-icon-height: var(--ep-breadcrumbs-separator-size);
      --ep-icon-stroke-width: var(--ep-breadcrumbs-separator-stroke-width);
      --ep-icon-text-color: var(--ep-breadcrumbs-separator-text-color);
    }
  }
}

```