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

## CSS Custom Properties

Set any of these with a selector that matches `.ep-key-value-table` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-key-value-table {
  --ep-key-value-table-border-color: /* … */;
}
```

### Border

| Property | Default | State |
|---|---|---|
| `--ep-key-value-table-border-color` | `var(--border-color)` | — |
| `--ep-key-value-table-border-style` | `solid` | — |
| `--ep-key-value-table-border-width` | `var(--border-width--hairline)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-key-value-table-cell-padding-block` | `0.5rem` | — |
| `--ep-key-value-table-heading-margin-block-start` | `1.5rem` | — |
| `--ep-key-value-table-key-padding-inline-end` | `var(--space--5)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-key-value-table-line-height` | `var(--text-line-height--normal)` | — |

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-key-value-table-row-stripe-bg-color` | `var(--interface-foreground)` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed } from 'vue'

  import EpFlex from '../flexbox/EpFlex.vue'

  interface KeyValueSection {
    data: Record<string, unknown>
    name: string
  }

  interface Props {
    commonKeyWidth?: boolean
    data: KeyValueSection | KeyValueSection[]
    sectionHeaders?: boolean
  }

  const {
    data,
    commonKeyWidth = false,
    sectionHeaders = false,
  } = defineProps<Props>()

  defineOptions({ name: 'EpKeyValueTable' })

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
// @block key-value-table
// @root .ep-key-value-table
.ep-key-value-table {
  --ep-key-value-table-border-width: var(--border-width--hairline);
  --ep-key-value-table-border-style: solid;
  --ep-key-value-table-border-color: var(--border-color);
  --ep-key-value-table-cell-padding-block: 0.5rem;
  --ep-key-value-table-key-padding-inline-end: var(--space--5);
  --ep-key-value-table-line-height: var(--text-line-height--normal);
  --ep-key-value-table-heading-margin-block-start: 1.5rem;
  --ep-key-value-table-row-stripe-bg-color: var(--interface-foreground);

  td {
    border-bottom: var(--ep-key-value-table-border-width) var(--ep-key-value-table-border-style) var(--ep-key-value-table-border-color);
    line-height: var(--ep-key-value-table-line-height);
    padding-block: var(--ep-key-value-table-cell-padding-block);
  }

  tr:first-child td {
    border-top: var(--ep-key-value-table-border-width) var(--ep-key-value-table-border-style) var(--ep-key-value-table-border-color);
  }

  td:first-child {
    padding-inline-end: var(--ep-key-value-table-key-padding-inline-end);
    white-space: nowrap;
  }

  &--striped {
    tr:nth-child(even) {
      background-color: var(--ep-key-value-table-row-stripe-bg-color);
    }
  }

  &--align-right {
    td:first-child {
      text-align: right;
    }
  }

  table + h3 {
    margin-block-start: var(--ep-key-value-table-heading-margin-block-start);
  }
}

```