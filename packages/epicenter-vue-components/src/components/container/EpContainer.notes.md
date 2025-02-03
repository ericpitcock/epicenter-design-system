`EpContainer` is a funny little component. Its mystery is only exceeded by its power. And it gives you the tools to be your own boss.

But seriously, I find myself creating the same component layouts often, so I created this component to help me out. It’s a container with header, body, and footer slots. The header and footer can stick while the body scrolls, or you can use it in a more static way. Use `EpHeader` and `EpFooter` components to define the header and footer content for maximum power.

Use `calculateHeight: true` to dynamically assign a height to the container. This is useful when you want the container to exist solely within the viewport and also have a sticky header, which needs an explicit height value to work.

## Usage
```vue
<template>
  <ep-container
    :sticky-header="true"
  >
    <template #header>
      <ep-header padding="0">
        <template #left>
          Header
        </template>
        <template #center>
          <!-- stuff in the center -->
        </template>
        <template #right>
          <!-- stuff to the right -->
        </template>
      </ep-header>
    </template>
    
    <p>Body</p>
    
    <template #footer>
      <ep-footer padding="0">
        <template #left>
          Footer
        </template>
        <template #center>
          <!-- stuff in the center -->
        </template>
        <template #right>
          <!-- stuff to the right -->
        </template>
      </ep-footer>
    </template>
  </ep-container>
</template>

<script setup>
  import { EpContainer, EpHeader, EpFooter } from '@epicenter/vue-components'
</script>
```