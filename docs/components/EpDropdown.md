# EpDropdown



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | - | `boolean` | `false` |
| `buttonProps` | - | `object` | `{}` |
| `menuProps` | - | `object` | `{}` |
| `alignRight` | - | `boolean` | `false` |
| `showOnHover` | - | `boolean` | `false` |
| `menuClass` | - | `string` | `''` |
| `menuItems` | - | `array` | `[]` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | - | - |
| `close` | - | - |

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
      <slot name="trigger">
        <ep-button
          v-bind="computedButtonProps"
          aria-haspopup="menu"
          :aria-expanded="dropdownVisible"
        >
          <template
            v-if="computedButtonProps.iconLeft"
            #icon-left
          >
            <ep-icon v-bind="computedButtonProps.iconLeft" />
          </template>
          <template
            v-if="computedButtonProps.label"
            #default
          >
            {{ computedButtonProps.label }}
          </template>
          <template
            v-if="computedButtonProps.iconRight"
            #icon-right
          >
            <ep-icon v-bind="computedButtonProps.iconRight" />
          </template>
        </ep-button>
      </slot>
    </div>
    <div
      v-show="dropdownVisible"
      :class="containerClasses"
    >
      <div class="ep-dropdown__content">
        <slot name="content">
          <ep-menu
            v-bind="computedMenuProps"
            @click="onClick"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onClickOutside } from '@vueuse/core'
  import { computed, ref, useTemplateRef } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpIcon from '../icon/EpIcon.vue'
  import EpMenu from '../menu/EpMenu.vue'

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
    menuProps: {
      type: Object,
      default: () => ({})
    },
    alignRight: {
      type: Boolean,
      default: false
    },
    showOnHover: {
      type: Boolean,
      default: false
    },
    // Deprecated props - should be migrated to menuProps
    menuClass: {
      type: String,
      default: ''
    },
    menuItems: {
      type: Array,
      default: () => []
    }
  })

  const emit = defineEmits(['click', 'close'])

  const dropdownVisible = ref(false)
  const dropdownRef = useTemplateRef('dropdown')

  const buttonDefaults = {
    size: 'default',
    label: 'Default Dropdown',
    iconRight: { name: 'chevron-down' }
  }

  const computedButtonProps = computed(() => ({
    ...buttonDefaults,
    ...props.buttonProps,
    disabled: props.disabled
  }))

  const menuDefaults = {
    menuType: 'dropdown'
  }

  const computedMenuProps = computed(() => {
    if (import.meta.env.NODE_ENV !== 'production') {
      if (props.menuClass) {
        console.warn('menuClass is deprecated. Include in menuProps instead.')
      }
      if (props.menuItems.length) {
        console.warn('menuItems is deprecated. Include in menuProps instead.')
      }
    }

    return {
      ...menuDefaults,
      // deprecated props
      ...(props.menuClass && { menuClass: props.menuClass }),
      ...(props.menuItems.length && { menuItems: props.menuItems }),
      // override with menuProps
      ...props.menuProps
    }
  })

  const containerClasses = computed(() => [
    'ep-dropdown__container',
    { 'ep-dropdown__container--align-right': props.alignRight }
  ])

  const toggleDropdown = () => {
    if (props.disabled || props.showOnHover) return
    dropdownVisible.value = !dropdownVisible.value
  }

  const closeDropdown = () => {
    if (props.disabled || !dropdownVisible.value) return

    dropdownVisible.value = false
    emit('close')
  }

  const onClick = (payload) => {
    emit('click', payload)
    closeDropdown()
  }

  const onMouseover = () => {
    if (!props.disabled && props.showOnHover) {
      dropdownVisible.value = true
    }
  }

  const onMouseleave = () => {
    if (!props.disabled && props.showOnHover) {
      dropdownVisible.value = false
    }
  }

  defineExpose({ closeDropdown })

  onClickOutside(dropdownRef, closeDropdown)
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
    position: relative;
    z-index: var(--z-index--dropdown);
  }
}
```