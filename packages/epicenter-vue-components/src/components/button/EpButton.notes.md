`EpButton` is a button. It's very exciting. It's used in many places throughout Epicenter Design System. Okay, just a couple places. But it could be used in many places.

## Usage

### Basic Button
```vue
<template>
  <ep-button @click="handleClick">
    Click me
  </ep-button>
</template>

<script setup>
  import { EpButton } from '@epicenter/vue-components'

  const handleClick = () => {
    console.log('Button clicked!')
  }
</script>
```

### With Icons
```vue
<template>
  <ep-button>
    <template #icon-left>
      <icon-plus />
    </template>
    Add Item
    <template #icon-right>
      <icon-arrow-right />
    </template>
  </ep-button>
</template>

<script setup>
  import { EpButton } from '@epicenter/vue-components'
  import { IconPlus, IconArrowRight } from '@epicenter/icons'
</script>
```

### Sizes and States
```vue
<template>
  <ep-button size="small">Small</ep-button>
  <ep-button size="default">Default</ep-button>
  <ep-button size="large">Large</ep-button>
  <ep-button size="xlarge">X-Large</ep-button>
  <ep-button disabled>Disabled</ep-button>
</template>

<script setup>
  import { EpButton } from '@epicenter/vue-components'
</script>
```