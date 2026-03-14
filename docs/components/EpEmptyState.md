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

## Component Code

```vue
<script setup lang="ts">
  import { computed } from 'vue'

  interface EpEmptyStateProps {
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
  } = defineProps<EpEmptyStateProps>()

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
  display: flex;
  width: 100%;
  height: 100%;

  img {
    max-width: 10rem;
  }

  &--column {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

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
    gap: 3rem;

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
    color: var(--text-color--loud);
    gap: 0.5rem;

    &__cta {
      margin-top: 2rem;
    }
  }
}
```