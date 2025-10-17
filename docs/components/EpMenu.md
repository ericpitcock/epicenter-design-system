# EpMenu



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `menuType` | - | `string` | `'default'` |
| `menuItems` | - | `array` | `[]` |
| `size` | - | `string` | `'default'` |
| `activeItem` | - | `string` | `''` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | - | - |
| `mouseover` | - | - |
| `mouseleave` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<template>
  <div :class="['ep-menu', `ep-menu--${menuType}`]">
    <template
      v-for="(item, index) of menuItems"
      :key="item.id"
    >
      <ep-divider v-if="item.divider" />
      <div
        v-else-if="item.section"
        class="ep-menu__section text-style--section"
      >
        {{ item.label }}
      </div>
      <div
        v-else
        class="ep-menu__item"
        :data-item="index"
        @mouseover="onMouseover(item, index)"
        @mouseleave="onMouseleave(item)"
      >
        <ep-button
          :class="buttonClasses(item)"
          v-bind="buttonProps(item)"
          @click.stop="onClick(item)"
        >
          <template
            v-if="item.iconLeft"
            #icon-left
          >
            <ep-icon v-bind="item.iconLeft" />
          </template>
          {{ item.label }}
          <template #icon-right>
            <ep-icon
              v-if="item.children"
              name="chevron-right"
            />
          </template>
        </ep-button>
        <div
          v-if="item.children"
          v-show="activeItemIndex === index"
          class="ep-menu__item__sub-menu"
        >
          <ep-menu
            :size="size"
            :class="$attrs.class"
            :menu-items="item.children"
            @click="onClick($event)"
            @mouseover="onChildMouseover($event)"
            @mouseleave="onChildMouseleave($event)"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpDivider from '../divider/EpDivider.vue'
  import EpIcon from '../icon/EpIcon.vue'

  defineOptions({
    name: 'EpMenu'
  })

  const props = defineProps({
    menuType: {
      type: String,
      default: 'default' // default, dropdown, nav
    },
    menuItems: {
      type: Array,
      default: () => [],
      validator: (value) => {
        value.forEach((item) => {
          if (!item.section && !item.divider && !item.id) {
            console.warn('EpMenu: Each menu item that is not a section or divider must have an id')
          }
        })
        return true
      }
    },
    size: {
      type: String,
      default: 'default'
    },
    activeItem: {
      type: String,
      default: ''
    },
  })

  const emit = defineEmits(['click', 'mouseover', 'mouseleave'])

  const activeItemIndex = ref(null)

  const buttonProps = (item) => {
    // eslint-disable-next-line no-unused-vars
    const { children, ...rest } = item
    rest.size = props.size
    return rest
  }

  const buttonClasses = (item) => {
    return [
      'ep-button--menu-item',
      { 'ep-button--menu-item--selected': props.menuType === 'nav' && item.label === props.activeItem }
    ]
  }

  const onMouseover = (item, index) => {
    if (!item.id || activeItemIndex.value === index) return

    if (item.children) {
      activeItemIndex.value = index
    }
    emit('mouseover', item)
  }

  const onChildMouseover = (item) => {
    emit('mouseover', item)
  }

  const onMouseleave = (item) => {
    if (item.children) {
      activeItemIndex.value = null
    }
    emit('mouseleave', null)
  }

  const onChildMouseleave = (item) => {
    emit('mouseleave', item)
  }

  const onClick = (item) => {
    emit('click', item)
  }
</script>

```

## Styles (SCSS)

```scss
@use '../mixins/_mixins' as *;

.ep-menu {
  --ep-menu-bg-color: var(--interface-surface);
  --ep-menu-padding: 1rem 0.5rem;
  --ep-menu-border-width: 0.1rem;
  --ep-menu-border-style: solid;
  --ep-menu-border-color: var(--border-color);
  --ep-menu-border-radius: var(--border-radius);
  --ep-menu-section-padding: 0.8rem 2.2rem;
  --ep-menu-section-margin-top: 0;
  --ep-menu-divider-border-color: var(--border-color);
  --ep-button-menu-item-hover-bg-color: var(--primary-color-base);
  --ep-button-menu-item-hover-text-color: hsl(0, 0%, 100%);
  --ep-button-menu-item-hover-border-color: var(--primary-color-base);
  --ep-button-menu-item-selected-bg-color: var(--primary-color-base);
  --ep-button-menu-item-selected-text-color: hsl(0, 0%, 100%);
  background: var(--ep-menu-bg-color);
  padding: var(--ep-menu-padding);
  border-width: var(--ep-menu-border-width);
  border-style: var(--ep-menu-border-style);
  border-color: var(--ep-menu-border-color);
  border-radius: var(--ep-menu-border-radius);
  text-align: left;
}

.ep-menu__section {
  padding: var(--ep-menu-section-padding);
  user-select: none;
  white-space: nowrap;

  &:not(:first-of-type) {
    margin-top: var(--ep-menu-section-margin-top);
  }
}

.ep-menu__item {
  position: relative;

  .ep-button--menu-item {
    width: 100%;
    max-width: 100%;
    background: transparent;
    border-color: transparent;
    padding-right: 2rem;
    padding-left: 2rem;

    @include hover {
      &:not(.ep-button--menu-item--selected):hover {
        background: var(--ep-button-menu-item-hover-bg-color);
        color: var(--ep-button-menu-item-hover-text-color);
        border-color: var(--ep-button-menu-item-hover-border-color);
      }
    }

    &--selected {
      background: var(--ep-button-menu-item-selected-bg-color);
      color: var(--ep-button-menu-item-selected-text-color);
      cursor: default;
    }
  }

  &__sub-menu {
    position: absolute;
    top: -1rem;
    left: calc(100% - 1rem);
  }
}

.ep-menu > .ep-divider {
  --ep-divider-border-color: var(--ep-menu-divider-border-color);
  --ep-divider-margin: 1rem 0;
}
```