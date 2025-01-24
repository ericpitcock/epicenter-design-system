# EpTableCheckboxFilters



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `filters` | - | `object` | `-` |
| `sectionLabels` | - | `boolean` | `true` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:filters` | - | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
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

<script>
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpCheckbox from '../checkbox/EpCheckbox.vue'

  export default {
    name: 'EpTableCheckboxFilters',
    components: {
      EpFlex,
      EpCheckbox
    },
    props: {
      filters: {
        type: Object,
        required: true
      },
      sectionLabels: {
        type: Boolean,
        default: true
      }
    },
    emits: ['update:filters'],
    methods: {
      updateCheckbox(category, label, checked) {
        this.$emit('update:filters', { category, label, checked })
      }
    }
  }
</script>

```


## Styles

```scss
.ep-table-checkbox-filters {
  --ep-table-checkbox-filters-gap: 1rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  &__container {
    gap: var(--ep-table-checkbox-filters-gap);
  }
}
```