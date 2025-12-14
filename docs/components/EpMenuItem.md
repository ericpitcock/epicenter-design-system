# EpMenuItem



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `type` | The type of menu item to render. | `string` | `'item'` |

## Slots
| Name | Description |
|------|-------------|
| `default` | Default slot for section label text. |
| `submenu` | Content for a submenu that appears on hover. |


::: info
This component does not use events.
:::

## Component Code

```vue
<template>
  <div
    v-if="type === 'divider'"
    class="ep-divider ep-divider--horizontal"
  />
  <div
    v-else-if="type === 'section'"
    class="ep-menu__section text-style--section"
  >
    <!-- @slot Default slot for section label text. -->
    <slot />
  </div>
  <div
    v-else
    class="ep-menu__item"
    @mouseover="onMouseover"
    @mouseleave="onMouseleave"
  >
    <!-- @slot Default slot for menu item content. -->
    <slot />
    <div
      v-if="$slots.submenu"
      v-show="showSubmenu"
      class="ep-menu__item__sub-menu"
    >
      <!-- @slot submenu - Content for a submenu that appears on hover. -->
      <slot name="submenu" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    /**
     * The type of menu item to render.
     * @values item, divider, section
     */
    type: {
      type: String,
      default: 'item',
      validator: (value) => ['item', 'divider', 'section'].includes(value)
    }
  })

  const showSubmenu = ref(false)

  const onMouseover = () => {
    showSubmenu.value = true
  }

  const onMouseleave = () => {
    showSubmenu.value = false
  }
</script>

```