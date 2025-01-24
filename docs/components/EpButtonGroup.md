# EpButtonGroup



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `items` | - | `array` | `-` |
| `active` | - | `number` | `null` |
| `disabled` | - | `boolean` | `false` |
| `size` | - | `string` | `'default'` |
| `styles` | - | `object` | `{}` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | - | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<template>
  <div class="ep-button-group">
    <ep-button
      v-for="(item, index) in items"
      :key="item.label"
      :label="item.label"
      :size="size"
      :disabled="disabled"
      :class="{ 'ep-button-group--active': index === activeButton && !disabled }"
      :style="styles"
      @click="onClick(item, index)"
    />
  </div>
</template>

<script setup>
  import EpButton from '../button/EpButton.vue'
  import { ref } from 'vue'

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
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  })

  const emit = defineEmits(['click'])

  const activeButton = ref(props.active)

  const onClick = (item, index) => {
    if (props.disabled) {
      return
    }
    activeButton.value = index
    emit('click', item)
  }
</script>
```


## Styles

```scss
.ep-button-group {
  --ep-button-group-active-text-color: var(--text-color--loud);
  --ep-button-group-inactive-text-color: var(--text-color--disabled);
  display: flex;

  .ep-button {

    // border-color: var(--border-color--lighter);
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

    &:not(.ep-button--disabled):not(.ep-button-group--active) {
      color: var(--ep-button-group-inactive-text-color);
    }
  }

  &--active {
    background-color: var(--color-primary);
    color: var(--ep-button-group-active-text-color);

    &:hover {
      background-color: var(--color-primary);
    }
  }
}
```