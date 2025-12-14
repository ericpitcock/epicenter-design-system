# EpButtonGroup



::: warning DEPRECATED
Just wrap buttons in an .ep-button-group div and manage state in the consuming component instead.
:::

`EpButtonGroup` is special like `EpButton` — but even more so. It's a group of icon buttons that can trigger an action or display a dropdown of more exciting actions. Useful in applications where you want to give users a set of actions to choose from.
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `items` | An array of button items with label and optional disabled properties. | `array` | `-` |
| `active` | The index of the initially active button. | `number` | `null` |
| `activeClass` | The CSS class to apply to the active button. | `string` | `''` |
| `size` | The size of the buttons in the group. | `string` | `'default'` |

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

  const props = defineProps({
    /**
     * An array of button items with label and optional disabled properties.
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * The index of the initially active button.
     */
    active: {
      type: Number,
      default: null
    },
    /**
     * The CSS class to apply to the active button.
     */
    activeClass: {
      type: String,
      default: ''
    },
    /**
     * The size of the buttons in the group.
     */
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
    &:not(:first-child) {
      margin-left: -0.1rem;
    }

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }

    &:not(.ep-button--disabled):not(.ep-button-group--selected) {
      color: var(--ep-button-group-inactive-text-color);
    }

    &.ep-button-group--selected {
      cursor: default;
      position: relative;
      z-index: var(--z-index--overlap);
    }
  }
}
```