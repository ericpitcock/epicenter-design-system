# EpSplitButton



::: warning DEPRECATED
Just wrap a button and a dropdown in an .ep-split-button div and manage state in the consuming component instead.
:::
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | If true, both the button and dropdown are disabled. | `boolean` | `false` |
| `buttonProps` | Props to pass to the internal EpButton component. | `object` | `{}` |
| `dropdownProps` | Props to pass to the internal EpDropdown component. | `object` | `{}` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `button-click` | - | - |
| `dropdown-select` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<template>
  <div class="ep-split-button">
    <ep-button
      v-bind="computedButtonProps"
      @click="$emit('button-click')"
    >
      {{ computedButtonProps.label }}
    </ep-button>
    <ep-dropdown
      v-bind="computedDropdownProps"
      @click="$emit('dropdown-select', $event)"
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
      /**
       * If true, both the button and dropdown are disabled.
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * Props to pass to the internal EpButton component.
       */
      buttonProps: {
        type: Object,
        default: () => ({})
      },
      /**
       * Props to pass to the internal EpDropdown component.
       */
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
  > .ep-dropdown > .ep-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
```