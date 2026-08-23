# EpMultiSearch



::: warning
This component needs to be updated to use CSS custom properties instead of props.
:::
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `autofocus` | - | `boolean` | `-` |
| `backgroundColor` | - | `string` | `-` |
| `borderRadius` | - | `string` | `-` |
| `color` | - | `string` | `-` |
| `disabled` | - | `boolean` | `-` |
| `height` | - | `string` | `-` |
| `icon` | - | `Record` | `-` |
| `placeholder` | - | `string` | `-` |
| `width` | - | `string` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `input` | - | - |
| `focus` | - | - |
| `esc` | - | - |
| `blur` | - | - |
| `enter` | - | - |
| `clear` | - | - |
| `query-close` | - | - |
| `delete` | - | - |


::: info
This component does not use slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-multi-search` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-multi-search {
  --ep-multi-search-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-multi-search-bg-color` | `var(--interface-foreground)` | — |
| `--ep-multi-search-operator-bg-color` | `hsl(var(--amber-300))` | — |
| `--ep-multi-search-query-bg-color` | `var(--primary-color-base)` | — |
| `--ep-multi-search-query-hover-bg-color` | `var(--primary-color-600)` | hover |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-multi-search-border-color` | `var(--border-color)` | — |
| `--ep-multi-search-border-radius` | `var(--border-radius--default)` | — |
| `--ep-multi-search-border-style` | `solid` | — |
| `--ep-multi-search-border-width` | `var(--border-width--hairline)` | — |
| `--ep-multi-search-disabled-border-color` | `var(--border-color--disabled)` | disabled |
| `--ep-multi-search-focus-border-color` | `var(--primary-color-base)` | focus |
| `--ep-multi-search-query-border-radius` | `var(--border-radius--default)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-multi-search-caret-color` | `var(--primary-color-base)` | — |
| `--ep-multi-search-disabled-text-color` | `var(--text-color--disabled)` | disabled |
| `--ep-multi-search-operator-text-color` | `hsl(var(--gray-500))` | — |
| `--ep-multi-search-query-line-height` | `2rem` | — |
| `--ep-multi-search-query-text-color` | `hsl(var(--gray-0))` | — |
| `--ep-multi-search-text-color` | `var(--text-color)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-multi-search-height` | `5rem` | — |
| `--ep-multi-search-width` | `100%` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-multi-search-padding-inline` | `var(--space--3)` | — |
| `--ep-multi-search-queries-padding-inline-end` | `0.6rem` | — |
| `--ep-multi-search-query-gap` | `0.3rem` | — |
| `--ep-multi-search-query-padding` | `0 0.6rem 0 1rem` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-multi-search-placeholder-disabled-opacity` | `0.3` | disabled |

## Component Code

```vue
<script setup lang="ts">
  import Cancel01 from '@ericpitcock/epicenter-icons-vue/Cancel01'
  import Search01 from '@ericpitcock/epicenter-icons-vue/Search01'
  import { computed, ref, useTemplateRef } from 'vue'

  interface ParsedQuery {
    and: string[]
    or: string[]
  }

  interface Props {
    autofocus?: boolean
    backgroundColor?: string
    borderRadius?: string
    color?: string
    disabled?: boolean
    height?: string
    icon?: Record<string, unknown>
    placeholder?: string
    width?: string
  }

  const {
    backgroundColor = 'var(--interface-foreground)',
    borderRadius = 'var(--border-radius--default)',
    color = 'var(--text-color)',
    disabled = false,
    height = '5rem',
    icon = {},
    placeholder = '',
    width = '100%',
  } = defineProps<Props>()

  const emit = defineEmits<{
    input: [value: string]
    focus: [query: ParsedQuery]
    esc: [query: ParsedQuery]
    blur: [query: ParsedQuery]
    enter: [query: ParsedQuery]
    clear: [query: ParsedQuery]
    'query-close': [query: ParsedQuery]
    delete: [query: ParsedQuery]
  }>()

  defineOptions({ name: 'EpMultiSearch' })

  const input = useTemplateRef<HTMLInputElement>('input')
  const hasFocus = ref(false)
  const value = ref('')
  const query = ref<string[]>([])

  const classes = computed(() => ({
    'ep-multi-search--has-icon': icon,
    'ep-multi-search--focus': hasFocus.value,
    'ep-multi-search--disabled': disabled,
  }))

  const clearable = computed(() => query.value.length > 0 || value.value.length > 0)

  const rootStyle = computed(() => ({
    '--ep-multi-search-width': width,
    '--ep-multi-search-height': height,
    '--ep-multi-search-border-radius': borderRadius,
    '--ep-multi-search-bg-color': backgroundColor,
    '--ep-multi-search-text-color': color,
  }))

  const placeholderValue = computed(() => {
    return value.value === '' && query.value.length === 0 ? placeholder : '+ Add to your search'
  })

  const isOperator = (term: string): boolean => term === 'AND' || term === 'OR'

  const onQueryClose = (item: string, index: number): void => {
    query.value.splice(index, 1)
    emit('query-close', parseQuery(query.value))
  }

  const onInput = (event: Event): void => {
    emit('input', (event.target as HTMLInputElement).value)
  }

  const onEsc = (): void => {
    input.value?.blur()
    emit('esc', parseQuery(query.value))
  }

  const onFocus = (): void => {
    hasFocus.value = true
    emit('focus', parseQuery(query.value))
  }

  const onBlur = (): void => {
    hasFocus.value = false
    emit('blur', parseQuery(query.value))
  }

  const onEnter = (): void => {
    const trimmedValue = value.value.trim()
    if (!trimmedValue) return

    const lastQueryItem = query.value[query.value.length - 1]

    if (isOperator(trimmedValue)) {
      if (!query.value.length || isOperator(lastQueryItem)) return
    }

    query.value.push(trimmedValue)
    emit('enter', parseQuery(query.value))
    value.value = ''
  }

  const onDelete = (): void => {
    if (value.value === '') {
      query.value.pop()
      emit('delete', parseQuery(query.value))
    }
  }

  const onClear = (): void => {
    query.value = []
    value.value = ''
    input.value?.focus()
    emit('clear', parseQuery(query.value))
  }

  const parseQuery = (queries: string[]): ParsedQuery => {
    const andQueries: string[] = []
    const orQueries: string[] = []
    let currentOperator = 'OR'

    queries.forEach(q => {
      if (isOperator(q)) {
        currentOperator = q
      } else {
        if (currentOperator === 'AND') {
          andQueries.push(q)
        } else {
          orQueries.push(q)
        }
      }
    })

    return { and: andQueries, or: orQueries }
  }
</script>

<template>
  <div
    :class="['ep-multi-search', classes]"
    :style="rootStyle"
  >
    <div
      v-if="icon"
      class="ep-multi-search__icon"
    >
      <Search01 />
    </div>
    <div class="queries">
      <div
        v-for="(item, index) in query"
        :key="index"
        :class="['query', { 'query--operator': isOperator(item) }]"
        @click="onQueryClose(item, index)"
      >
        <span class="query__text font-size--small">{{ item }}</span>
        <Cancel01 />
      </div>
    </div>
    <input
      ref="input"
      v-model="value"
      type="text"
      :placeholder="placeholderValue"
      :disabled="disabled"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown.enter="onEnter"
      @keydown.delete="onDelete"
      @keydown.esc="onEsc"
    >
    <div
      v-if="clearable"
      class="ep-multi-search__clear"
      @click="onClear"
    >
      <Cancel01 />
    </div>
  </div>
</template>


```

## Styles (SCSS)

```scss
@use '../mixins/mixins' as *;

.ep-multi-search {
  // Box
  --ep-multi-search-width: 100%;
  --ep-multi-search-height: 5rem;
  --ep-multi-search-padding-inline: var(--space--3);

  // Surface
  --ep-multi-search-bg-color: var(--interface-foreground);

  // Border
  --ep-multi-search-border-width: var(--border-width--hairline);
  --ep-multi-search-border-style: solid;
  --ep-multi-search-border-color: var(--border-color);
  --ep-multi-search-border-radius: var(--border-radius--default);
  --ep-multi-search-focus-border-color: var(--primary-color-base);
  --ep-multi-search-disabled-border-color: var(--border-color--disabled);

  // Text
  --ep-multi-search-text-color: var(--text-color);
  --ep-multi-search-caret-color: var(--primary-color-base);
  --ep-multi-search-disabled-text-color: var(--text-color--disabled);
  --ep-multi-search-placeholder-disabled-opacity: 0.3;

  // The pills representing committed queries.
  --ep-multi-search-query-gap: 0.3rem;
  --ep-multi-search-query-padding: 0 0.6rem 0 1rem;
  --ep-multi-search-query-border-radius: var(--border-radius--default);
  --ep-multi-search-query-bg-color: var(--primary-color-base);
  --ep-multi-search-query-text-color: hsl(var(--gray-0));
  --ep-multi-search-query-hover-bg-color: var(--primary-color-600);
  --ep-multi-search-query-line-height: 2rem;
  --ep-multi-search-operator-bg-color: hsl(var(--amber-300));
  --ep-multi-search-operator-text-color: hsl(var(--gray-500));
  --ep-multi-search-queries-padding-inline-end: 0.6rem;

  display: flex;
  overflow: hidden;
  width: var(--ep-multi-search-width);
  height: var(--ep-multi-search-height);
  flex-flow: row nowrap;
  align-items: center;
  border-width: var(--ep-multi-search-border-width);
  border-style: var(--ep-multi-search-border-style);
  border-color: var(--ep-multi-search-border-color);
  border-radius: var(--ep-multi-search-border-radius);
  background: var(--ep-multi-search-bg-color);
  color: var(--ep-multi-search-text-color);

  &:focus-within {
    outline: var(--focus-outline);
    outline-offset: var(--focus-outline-offset);
  }

  .queries {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: var(--ep-multi-search-query-gap);
    padding-inline-end: var(--ep-multi-search-queries-padding-inline-end);

    .query {
      display: flex;
      height: 100%;
      flex-flow: row nowrap;
      align-items: center;
      padding: var(--ep-multi-search-query-padding);
      border-radius: var(--ep-multi-search-query-border-radius);
      background-color: var(--ep-multi-search-query-bg-color);
      color: var(--ep-multi-search-query-text-color);
      gap: var(--ep-multi-search-query-gap);

      @include hover {
        &:hover {
          background-color: var(--ep-multi-search-query-hover-bg-color);
          cursor: pointer;
        }
      }

      .query__text {
        line-height: var(--ep-multi-search-query-line-height);
      }

      .query__close {
        cursor: pointer;
      }
    }

    // Operator pills (AND / OR) read differently from term pills.
    .query--operator {
      background-color: var(--ep-multi-search-operator-bg-color);
      color: var(--ep-multi-search-operator-text-color);
    }
  }

  input {
    height: 100%;
    flex: 1;
    background: none;
    caret-color: var(--ep-multi-search-caret-color);
    color: inherit;
    padding-inline: var(--ep-multi-search-padding-inline);

    &::placeholder {
      color: var(--ep-multi-search-text-color);
    }

    &:focus-visible {
      outline: none;

      &::placeholder {
        color: transparent;
      }
    }
  }

  &--has-icon input {
    padding-inline-start: 0;
  }

  &--focus {
    border-color: var(--ep-multi-search-focus-border-color);
  }

  &--disabled {
    border-color: var(--ep-multi-search-disabled-border-color);
    color: var(--ep-multi-search-disabled-text-color);

    input::placeholder {
      opacity: var(--ep-multi-search-placeholder-disabled-opacity);
    }
  }

  &__icon,
  &__clear {
    display: flex;
    height: 100%;
    flex: 0 0 var(--ep-multi-search-height);
    align-items: center;
    justify-content: center;
  }

  &__clear {
    cursor: pointer;
  }
}

```