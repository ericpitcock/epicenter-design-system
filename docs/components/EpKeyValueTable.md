# EpKeyValueTable



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `commonKeyWidth` | - | `boolean` | `-` |
| `data` | - | `union` | `-` |
| `sectionHeaders` | - | `boolean` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `value` | No description available. |


::: info
This component does not use events.
:::

## Component Code

```vue
<script setup lang="ts">
  import { computed } from 'vue'

  import EpFlex from '../flexbox/EpFlex.vue'

  interface KeyValueSection {
    data: Record<string, unknown>
    name: string
  }

  interface EpKeyValueTableProps {
    commonKeyWidth?: boolean
    data: KeyValueSection | KeyValueSection[]
    sectionHeaders?: boolean
  }

  const {
    data,
    commonKeyWidth = false,
    sectionHeaders = false,
  } = defineProps<EpKeyValueTableProps>()

  const processedData = computed<KeyValueSection[]>(() => {
    if (Array.isArray(data)) {
      return data
    }

    return [data]
  })

  const keyColumnWidth = computed<string>(() => {
    if (!commonKeyWidth) {
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
          <td class="ep-flex gap-5">
            <slot
              name="value"
              v-bind="{ key, value }"
            >
              {{ value }}
            </slot>
          </td>
        </tr>
      </table>
    </template>
  </ep-flex>
</template>

```

## Styles (SCSS)

```scss
.ep-key-value-table {
  --ep-table-row-stripe-color: var(--interface-foreground);

  td {
    border-bottom: 1px solid var(--border-color);
    line-height: 1.5;
    padding-block: 0.5rem;
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