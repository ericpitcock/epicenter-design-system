# EpIcon



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `name` | - | `string` | `-` |
| `type` | - | `string` | `'span'` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <component
    :is="type"
    class="ep-icon"
    v-html="svgContent"
  />
</template>

<script setup>
  import { loadIcon } from '@ericpitcock/epicenter-icons'
  import { ref, watch } from 'vue'

  defineOptions({
    name: 'EpIcon'
  })

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'span'
    }
  })

  const svgContent = ref('')

  watch(
    () => props.name,
    async (name) => svgContent.value = await loadIcon(name),
    { immediate: true }
  )
</script>

```

## Styles (SCSS)

```scss
.ep-icon {
  --ep-icon-width: 2rem;
  --ep-icon-height: 100%;
  --ep-icon-color: inherit;
  --ep-icon-stroke-width: 1.5;
  display: inline-flex;
  width: var(--ep-icon-width);
  height: var(--ep-icon-height);
  color: var(--ep-icon-color);

  > svg > * {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    stroke-width: var(--ep-icon-stroke-width);
  }
}
```