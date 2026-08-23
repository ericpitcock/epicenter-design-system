# EpTableCheckboxFilters



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `filters` | - | `Record` | `-` |
| `sectionLabels` | - | `boolean` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:filters` | - | - |


::: info
This component does not use slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-table-checkbox-filters` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-table-checkbox-filters {
  --ep-table-checkbox-filters-gap: /* … */;
}
```

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-table-checkbox-filters-gap` | `1rem` | — |
| `--ep-table-checkbox-filters-heading-margin-block-end` | `0.5rem` | — |

## Component Code

```vue
<script setup lang="ts">
  import type { CheckboxFilter } from '../../types'
  import EpCheckbox from '../checkbox/EpCheckbox.vue'
  import EpFlex from '../flexbox/EpFlex.vue'

  interface Props {
    filters: Record<string, CheckboxFilter[]>
    sectionLabels?: boolean
  }

  const {
    sectionLabels = true,
  } = defineProps<Props>()

  const emit = defineEmits<{
    'update:filters': [payload: { category: string; label: string; checked: boolean }]
  }>()

  defineOptions({ name: 'EpTableCheckboxFilters' })

  const updateCheckbox = (category: string, label: string, checked: boolean): void => {
    emit('update:filters', { category, label, checked })
  }
</script>

<template>
  <div class="ep-table-checkbox-filters">
    <ep-flex class="flex-col gap-30">
      <ep-flex
        v-for="(filterSet, category) in filters"
        :key="category"
        class="ep-table-checkbox-filters__container flex-col"
      >
        <h3
          v-if="sectionLabels"
          class="text-style--section"
        >
          {{ category.replace(/_/g, ' ') }}
        </h3>
        <ep-checkbox
          v-for="checkbox in filterSet"
          :key="checkbox.label"
          v-bind="checkbox"
          v-model="checkbox.checked"
          @update:model-value="updateCheckbox(category, checkbox.label, $event)"
        />
      </ep-flex>
    </ep-flex>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-table-checkbox-filters {
  --ep-table-checkbox-filters-gap: 1rem;
  --ep-table-checkbox-filters-heading-margin-block-end: 0.5rem;

  h3 {
    margin-block-end: var(--ep-table-checkbox-filters-heading-margin-block-end);
  }

  &__container {
    gap: var(--ep-table-checkbox-filters-gap);
  }
}

```