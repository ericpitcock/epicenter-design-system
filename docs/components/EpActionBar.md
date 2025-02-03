# EpActionBar



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `items` | The items to display in the action bar. | `array` | `-` |
| `showDropdownOnHover` | Whether to show the dropdown on hover. | `boolean` | `false` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | Emitted when an item is clicked. | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<template>
  <div class="ep-action-bar">
    <template v-for="(item, index) in items">
      <ep-button
        v-if="item.type === 'button'"
        :key="`button-${index}`"
        v-bind="{ buttonDefaults, ...item.buttonProps }"
        @click="onClick(item, index)"
      />
      <ep-dropdown
        v-else-if="item.type === 'dropdown'"
        :key="`dropdown-${index}`"
        v-bind="item"
        :show-on-hover="showDropdownOnHover"
        @select="onClick"
      />
    </template>
  </div>
</template>

<script setup>
  import EpButton from '../button/EpButton.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'
  import { computed } from 'vue'

  defineOptions({
    name: 'EpActionBar'
  })

  const props = defineProps({
    /**
     * The items to display in the action bar.
     */
    items: {
      type: Array,
      required: true,
    },
    /**
     * Whether to show the dropdown on hover.
     */
    showDropdownOnHover: {
      type: Boolean,
      default: false
    },
  })

  const emit = defineEmits([
    /**
     * Emitted when an item is clicked.
     * @payload {Object} item - The clicked item.
     */
    'click'
  ])

  const buttonDefaults = computed(() => {
    return {
      label: '',
      title: '',
    }
  })

  const onClick = (item) => {
    emit('click', item)
  }
</script>

```


## Styles (SCSS)

```scss
  .ep-action-bar {
    --ep-action-bar-justify-content: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: var(--ep-action-bar-justify-content);
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
```