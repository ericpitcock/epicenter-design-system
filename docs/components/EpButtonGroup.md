# EpButtonGroup



`EpButtonGroup` is special like `EpButton` — but even more so. It’s a group of icon buttons that can trigger an action or display a dropdown of more exciting actions. Useful in applications where you want to give users a set of actions to choose from.
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `items` | - | `array` | `-` |
| `active` | - | `number` | `null` |
| `activeClass` | - | `string` | `''` |
| `size` | - | `string` | `'default'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<template>
  <div class="ep-button-group">
    <ep-button
      v-for="(item, index) in items"
      :key="item.label"
      :size="size"
      :disabled="item.disabled"
      :class="{ [`${activeClass} ep-button-group--selected`]: index === activeButton && !item.disabled }"
      @click="onClick(item, index)"
    >
      {{ item.label }}
    </ep-button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import EpButton from '../button/EpButton.vue'

  defineOptions({
    name: 'EpButtonGroup'
  })

  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      default: null
    },
    activeClass: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
  })

  const emit = defineEmits(['click'])

  const activeButton = ref(props.active)

  const onClick = (item, index) => {
    if (item.disabled) return

    activeButton.value = index
    emit('click', { item, index })
  }
</script>
```

## Styles (SCSS)

```scss
.ep-button-group {
  --ep-button-group-active-text-color: var(--text-color--loud);
  --ep-button-group-inactive-text-color: var(--text-color);
  display: flex;

  .ep-button {
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-right: -0.1rem;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-left: -0.1rem;
    }

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }

    &:not(.ep-button--disabled):not(.ep-button-group--selected) {
      color: var(--ep-button-group-inactive-text-color);
    }

    &.ep-button-group--selected {
      cursor: default;
    }
  }
}
```