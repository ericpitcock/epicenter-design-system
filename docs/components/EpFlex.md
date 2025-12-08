# EpFlex



## Slots
| Name | Description |
|------|-------------|
| `default` | Default slot for flex content. |


::: info
This component does not use props, events.
:::

## Component Code

```vue
<template>
  <div class="ep-flex">
    <!-- @slot Default slot for flex content. -->
    <slot />
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpFlex'
  })
</script>

```