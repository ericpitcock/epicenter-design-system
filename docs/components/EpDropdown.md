# EpDropdown



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | - | `boolean` | `false` |
| `buttonProps` | - | `object` | `{}` |
| `containerProps` | - | `object` | `{}` |
| `menuClass` | - | `string` | `''` |
| `menuItems` | - | `array` | `[]` |
| `alignRight` | - | `boolean` | `false` |
| `showOnHover` | - | `boolean` | `false` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `select` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `trigger` | No description available. |
| `content` | No description available. |

## Component Code

```vue
<template>
  <div
    ref="dropdown"
    class="ep-dropdown"
    @mouseleave="onMouseleave"
  >
    <div
      @click.stop="toggleDropdown"
      @mouseover="onMouseover"
    >
      <slot
        v-if="$slots.trigger"
        name="trigger"
      />
      <ep-button
        v-else
        v-bind="computedButtonProps"
      />
    </div>
    <div
      v-show="dropdownVisible"
      :class="classes"
    >
      <div class="ep-dropdown__content">
        <slot
          v-if="$slots.content"
          name="content"
        />
        <ep-menu
          v-else
          :class="props.menuClass"
          :menu-items="menuItems"
          menu-type="dropdown"
          @click="onClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onClickOutside } from '@vueuse/core'
  import EpButton from '../button/EpButton.vue'
  import EpMenu from '../menu/EpMenu.vue'
  import { computed, ref, useTemplateRef } from 'vue'

  defineOptions({
    name: 'EpDropdown',
  })

  const props = defineProps({
    disabled: {
      type: Boolean,
      default: false
    },
    buttonProps: {
      type: Object,
      default: () => ({})
    },
    containerProps: {
      type: Object,
      default: () => ({}),
      validator: (value) => {
        if (Object.keys(value).length !== 0) {
          console.warn('containerProps is not allowed. Use menuClass instead.', value)
        }
        return true
      }
    },
    menuClass: {
      type: String,
      default: ''
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    alignRight: {
      type: Boolean,
      default: false
    },
    showOnHover: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['select'])

  const dropdownVisible = ref(false)

  const buttonDefaults = {
    size: 'default',
    title: '',
    label: 'Default Dropdown',
    iconRight: { name: 'chevron-down' },
    iconLeft: undefined
  }

  const computedButtonProps = computed(() => ({
    ...(props.disabled && { disabled: true }),
    ...buttonDefaults,
    ...props.buttonProps,
  }))

  const classes = computed(() => [
    'ep-dropdown__container',
    { 'ep-dropdown__container--align-right': props.alignRight }
  ])

  const toggleDropdown = () => {
    if (props.disabled || props.showOnHover) return
    dropdownVisible.value = !dropdownVisible.value
  }

  const closeDropdown = () => {
    if (props.disabled) return
    dropdownVisible.value = false
  }

  defineExpose({
    closeDropdown
  })

  const dropdownRef = useTemplateRef('dropdown')

  onClickOutside(dropdownRef, closeDropdown)

  const onClick = (payload) => {
    emit('select', payload)
    closeDropdown()
  }

  const onMouseover = () => {
    if (props.disabled) return
    if (props.showOnHover) dropdownVisible.value = true
  }

  const onMouseleave = () => {
    if (props.disabled) return
    if (props.showOnHover) dropdownVisible.value = false
  }
</script>

```


## Styles (SCSS)

```scss
.ep-dropdown {
  --ep-dropdown-padding-top: 4px;
  position: relative;
  width: fit-content;

  &__container {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    padding-top: var(--ep-dropdown-padding-top);
    box-shadow: var(--box-shadow--dropdown);
    z-index: var(--z-index--dropdown);

    &--align-right {
      right: 0;
      left: auto;
    }
  }

  &__content {
    // width: max-content;
    position: relative;
    z-index: var(--z-index--dropdown);
  }
}
```