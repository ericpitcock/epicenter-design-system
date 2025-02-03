# EpSplitButton



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | - | `boolean` | `false` |
| `buttonProps` | - | `object` | `{}` |
| `dropdownProps` | - | `object` | `{}` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `button-click` | - | - |
| `dropdown-select` | - | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<template>
  <div class="ep-split-button">
    <ep-button
      v-bind="computedButtonProps"
      @click="$emit('button-click')"
    />
    <ep-dropdown
      v-bind="computedDropdownProps"
      @select="$emit('dropdown-select', $event)"
    />
  </div>
</template>

<script>
  import EpButton from '../button/EpButton.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'

  export default {
    name: 'EpSplitButton',
    components: {
      EpButton,
      EpDropdown
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      buttonProps: {
        type: Object,
        default: () => ({})
      },
      dropdownProps: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ['button-click', 'dropdown-select'],
    computed: {
      computedButtonProps() {
        return {
          ...this.buttonProps,
          ...this.disabled && { disabled: true }
        }
      },
      computedDropdownProps() {
        return {
          ...this.dropdownProps,
          ...this.disabled && { disabled: true }
        }
      }
    }
  }
</script>

```


## Styles (SCSS)

```scss
.ep-split-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;

  > .ep-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  // target the dropdown button but not the buttons in the menu
  > .ep-dropdown > div > .ep-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
```