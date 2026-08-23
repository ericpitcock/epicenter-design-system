# EpEmptyState



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `direction` | Layout direction of the empty state content. | `string` | `-` |
| `justify` | Horizontal alignment of the content. | `string` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `img` | Image or icon to display in the empty state |
| `default` | Main content/message of the empty state |
| `subtext` | Additional descriptive text or instructions |
| `cta` | Call-to-action button or link |


::: info
This component does not use events.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-empty-state` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-empty-state {
  --ep-empty-state-body-gap: /* … */;
}
```

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-empty-state-body-gap` | `0.5rem` | — |
| `--ep-empty-state-column-gap` | `var(--space--5)` | — |
| `--ep-empty-state-cta-margin-block-start` | `var(--space--5)` | — |
| `--ep-empty-state-row-gap` | `3rem` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-empty-state-body-text-color` | `var(--text-color--loud)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-empty-state-height` | `100%` | — |
| `--ep-empty-state-image-max-width` | `10rem` | — |
| `--ep-empty-state-width` | `100%` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    /**
     * Layout direction of the empty state content.
     * @values 'column', 'row'
     */
    direction?: string
    /**
     * Horizontal alignment of the content.
     * @values 'left', 'center', 'right'
     */
    justify?: string
  }

  const {
    direction = 'column',
    justify = 'center',
  } = defineProps<Props>()

  defineOptions({ name: 'EpEmptyState' })

  const classes = computed(() => {
    return {
      'ep-empty-state--column': direction === 'column',
      'ep-empty-state--row': direction === 'row',
      'ep-empty-state--justify-left': justify === 'left',
      'ep-empty-state--justify-right': justify === 'right',
    }
  })
</script>

<template>
  <div :class="['ep-empty-state', classes]">
    <div
      v-if="$slots.img"
      class="ep-empty-state__img"
    >
      <!-- @slot Image or icon to display in the empty state -->
      <slot name="img" />
    </div>
    <div class="ep-empty-state__body">
      <!-- @slot Main content/message of the empty state -->
      <slot />
      <div
        v-if="$slots.subtext"
        class="text--subtle font-size--small"
      >
        <!-- @slot Additional descriptive text or instructions -->
        <slot name="subtext" />
      </div>
      <div
        v-if="$slots.cta"
        class="ep-empty-state__body__cta"
      >
        <!-- @slot Call-to-action button or link -->
        <slot name="cta" />
      </div>
    </div>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-empty-state {
  --ep-empty-state-width: 100%;
  --ep-empty-state-height: 100%;
  --ep-empty-state-column-gap: var(--space--5);
  --ep-empty-state-row-gap: 3rem;
  --ep-empty-state-image-max-width: 10rem;
  --ep-empty-state-body-gap: 0.5rem;
  --ep-empty-state-body-text-color: var(--text-color--loud);
  --ep-empty-state-cta-margin-block-start: var(--space--5);

  display: flex;
  width: var(--ep-empty-state-width);
  height: var(--ep-empty-state-height);

  img {
    max-width: var(--ep-empty-state-image-max-width);
  }

  &--column {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--ep-empty-state-column-gap);

    .ep-empty-state__body {
      text-align: center;
    }

    &.ep-empty-state--justify-left {
      align-items: flex-start;

      .ep-empty-state__body {
        text-align: left;
      }
    }

    &.ep-empty-state--justify-right {
      align-items: flex-end;

      .ep-empty-state__body {
        text-align: right;
      }
    }
  }

  &--row {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--ep-empty-state-row-gap);

    &.ep-empty-state--justify-left {
      justify-content: flex-start;
    }

    &.ep-empty-state--justify-right {
      justify-content: flex-end;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    color: var(--ep-empty-state-body-text-color);
    gap: var(--ep-empty-state-body-gap);

    &__cta {
      margin-block-start: var(--ep-empty-state-cta-margin-block-start);
    }
  }
}

```