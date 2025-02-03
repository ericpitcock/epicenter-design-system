# EpKeyValueTable



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `data` | - | `object` | `-` |
| `width` | - | `string` | `'100%'` |
| `commonKeyWidth` | - | `boolean` | `false` |
| `sectionHeaders` | - | `boolean` | `false` |
| `sectionHeaderClass` | - | `string` | `''` |
| `striped` | - | `boolean` | `false` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="ep-key-value-table-container">
    <template
      v-for="(rows, section) in formattedData"
      :key="section"
    >
      <h3
        v-if="sectionHeaders"
        :class="['section-headers', sectionHeaderClass]"
      >
        {{ section }}
      </h3>
      <table
        :class="['ep-key-value-table', classes]"
        :style="{ width: width }"
      >
        <tr
          v-for="(value, key) in rows"
          :key="key"
        >
          <td
            class="text--subtle text-align--right"
            :style="{ width: keyColumnWidth }"
          >
            {{ key }}
          </td>
          <td v-html="value" />
        </tr>
      </table>
    </template>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  defineOptions({
    name: 'EpKeyValueTable'
  })

  const props = defineProps({
    data: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    commonKeyWidth: {
      type: Boolean,
      default: false
    },
    sectionHeaders: {
      type: Boolean,
      default: false
    },
    sectionHeaderClass: {
      type: String,
      default: ''
    },
    striped: {
      type: Boolean,
      default: false
    }
  })

  const classes = computed(() => ({
    'ep-key-value-table--striped': props.striped
  }))

  const formattedData = computed(() => {
    if (!props.data.formatter) {
      return props.data.data
    }
    const formatted = {}
    for (const [key, value] of Object.entries(props.data.data)) {
      formatted[key] = {}
      for (const [prop, val] of Object.entries(value)) {
        if (props.data.formatter[prop]) {
          formatted[key][prop] = props.data.formatter[prop](val)
        } else {
          formatted[key][prop] = val
        }
      }
    }
    return formatted
  })

  const keyColumnWidth = computed(() => {
    if (!props.commonKeyWidth) {
      return 'auto'
    }

    const data = formattedData.value
    let maxKeyLength = 0

    for (let key of Object.keys(data)) {
      for (let subKey in data[key]) {
        if (subKey.length > maxKeyLength) {
          maxKeyLength = subKey.length
        }
      }
    }

    return `${maxKeyLength}ch`
  })
</script>

```


## Styles (SCSS)

```scss
@use '../mixins/_mixins' as mixins;

.ep-key-value-table-container {
  overflow: auto;
  @include mixins.no-scrollbar;
}

.ep-key-value-table {
  td {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--border-color);
  }

  &--striped {
    tr:nth-child(even) {
      background-color: var(--table-stripe-color);
    }
  }
}
```