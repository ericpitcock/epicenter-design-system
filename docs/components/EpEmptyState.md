# EpEmptyState



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `direction` | - | `string` | `'column'` |
| `justify` | - | `string` | `'center'` |

## Slots
| Name | Description |
|------|-------------|
| `img` | No description available. |
| `default` | No description available. |
| `subtext` | No description available. |
| `cta` | No description available. |


::: info
This component does not use events.
:::

## Component Code

```vue
<template>
  <div :class="['ep-empty-state', classes]">
    <div
      v-if="$slots.img"
      class="ep-empty-state__img"
    >
      <slot name="img" />
    </div>
    <div class="ep-empty-state__body">
      <slot />
      <div
        v-if="$slots.subtext"
        class="text--subtle font-size--small"
      >
        <slot name="subtext" />
      </div>
      <div
        v-if="$slots.cta"
        class="ep-empty-state__body__cta"
      >
        <slot name="cta" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  defineOptions({
    name: 'EpEmptyState',
  })

  const props = defineProps({
    direction: {
      type: String,
      default: 'column'
    },
    justify: {
      type: String,
      default: 'center'
    },
  })

  const classes = computed(() => {
    return {
      'ep-empty-state--column': props.direction === 'column',
      'ep-empty-state--row': props.direction === 'row',
      'ep-empty-state--justify-left': props.justify === 'left',
      'ep-empty-state--justify-right': props.justify === 'right',
    }
  })
</script>

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
    gap: 0.5rem;
    color: var(--text-color--loud);
  }
}
```