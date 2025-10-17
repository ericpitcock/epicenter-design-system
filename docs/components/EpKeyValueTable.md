# EpKeyValueTable



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `data` | - | `array|object` | `-` |
| `commonKeyWidth` | - | `boolean` | `false` |
| `sectionHeaders` | - | `boolean` | `false` |
| `showActionsMenu` | - | `boolean` | `false` |

## Slots
| Name | Description |
|------|-------------|
| `actions-menu` | No description available. |


::: info
This component does not use events.
:::

## Component Code

```vue
<template>
  <ep-flex class="ep-key-value-table flex-col gap-10">
    <template
      v-for="section in processedData"
      :key="section.name"
    >
      <h3
        v-if="sectionHeaders"
        class="text-style--section"
      >
        {{ section.name }}
      </h3>
      <table>
        <tr
          v-for="(value, key) in section.data"
          :key="key"
        >
          <td
            class="text--subtle"
            :style="{ width: keyColumnWidth }"
          >
            {{ key }}
          </td>
          <td :class="{ 'ep-flex gap-5': showActionsMenu }">
            {{ value }}
            <template v-if="$slots['actions-menu']">
              <slot
                name="actions-menu"
                v-bind="{ key, value }"
              />
            </template>
          </td>
        </tr>
      </table>
    </template>
  </ep-flex>
</template>

<script setup>
  import { computed } from 'vue'

  import EpFlex from '../flexbox/EpFlex.vue'

  defineOptions({
    name: 'EpKeyValueTable'
  })

  const props = defineProps({
    data: {
      type: [Array, Object],
      required: true
    },
    commonKeyWidth: {
      type: Boolean,
      default: false
    },
    sectionHeaders: {
      type: Boolean,
      default: false
    },
    showActionsMenu: {
      type: Boolean,
      default: false
    }
  })

  const processedData = computed(() => {
    if (Array.isArray(props.data)) {
      return props.data
    }

    return [props.data]
  })

  const keyColumnWidth = computed(() => {
    if (!props.commonKeyWidth) {
      return 'auto'
    }

    let maxKeyLength = 0

    for (const section of processedData.value) {
      for (const key in section.data) {
        maxKeyLength = Math.max(maxKeyLength, key.length)
      }
    }

    return `${maxKeyLength}ch`
  })
</script>

```

## Styles (SCSS)

```scss
.ep-key-value-table {
  --ep-table-row-stripe-color: var(--interface-foreground);

  td {
    padding-block: 0.5rem;
    border-bottom: 1px solid var(--border-color);
    line-height: 1.5;
  }

  // first tr td border top
  tr:first-child td {
    border-top: 1px solid var(--border-color);
  }

  td:first-child {
    padding-inline-end: 2rem;
    white-space: nowrap;
  }

  &--striped {
    tr:nth-child(even) {
      background-color: var(--ep-table-row-stripe-color);
    }
  }

  &--align-right {
    td:first-child {
      text-align: right;
    }
  }

  table + h3 {
    margin-top: 1.5rem;
  }
}
```