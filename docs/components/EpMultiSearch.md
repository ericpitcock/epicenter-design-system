# EpMultiSearch



::: warning
This component needs to be updated to use CSS custom properties instead of props.
:::
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `placeholder` | - | `string` | `''` |
| `icon` | - | `object` | `{}` |
| `disabled` | - | `boolean` | `false` |
| `autofocus` | - | `boolean` | `false` |
| `width` | - | `string` | `'100%'` |
| `height` | - | `string` | `'5rem'` |
| `borderWidth` | - | `string` | `'0.1rem'` |
| `borderStyle` | - | `string` | `'solid'` |
| `borderColor` | - | `string` | `'var(--border-color)'` |
| `borderRadius` | - | `string` | `'var(--border-radius)'` |
| `backgroundColor` | - | `string` | `'var(--interface-foreground)'` |
| `color` | - | `string` | `'var(--text-color)'` |

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

## Component Code

```vue
<template>
  <div
    :class="['ep-multi-search', classes]"
    :style="inputStyles"
  >
    <div
      v-if="icon"
      class="ep-multi-search__icon"
      :style="iconStyles"
    >
      <ep-icon v-bind="icon" />
    </div>
    <div class="queries">
      <div
        v-for="(item, index) in query"
        :key="index"
        :class="['query', { 'query--operator': isOperator(item) }]"
        @click="onQueryClose(item, index)"
      >
        <span class="query__text font-size--small">{{ item }}</span>
        <ep-icon
          name="close"
          :style="{ '--ep-icon-width': '16px', '--ep-icon-stroke-width': 2 }"
          class="query__close"
        />
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
      :style="iconStyles"
      @click="onClear"
    >
      <ep-icon
        name="close"
        :style="{ '--ep-icon-width': '24px' }"
      />
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, watch } from 'vue'

  import EpIcon from '../icon/EpIcon.vue'

  defineOptions({
    name: 'EpMultiSearch',
  })

  const props = defineProps({
    placeholder: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '5rem'
    },
    borderWidth: {
      type: String,
      default: '0.1rem'
    },
    borderStyle: {
      type: String,
      default: 'solid'
    },
    borderColor: {
      type: String,
      default: 'var(--border-color)'
    },
    borderRadius: {
      type: String,
      default: 'var(--border-radius)'
    },
    backgroundColor: {
      type: String,
      default: 'var(--interface-foreground)'
    },
    color: {
      type: String,
      default: 'var(--text-color)'
    }
  })

  const emit = defineEmits(['input', 'focus', 'esc', 'blur', 'enter', 'clear', 'query-close', 'delete'])

  const input = ref(null)
  const hasFocus = ref(false)
  const value = ref('')
  const query = ref([])

  const classes = computed(() => ({
    'ep-multi-search--has-icon': props.icon,
    'ep-multi-search--focus': hasFocus.value,
    'ep-multi-search--disabled': props.disabled,
  }))

  const clearable = computed(() => query.value.length > 0 || value.value.length > 0)

  const iconStyles = computed(() => ({
    flex: `0 0 ${props.height}`,
    height: props.height,
  }))

  const inputStyles = computed(() => ({
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    backgroundColor: props.backgroundColor,
    color: props.color
  }))

  const placeholderValue = computed(() => {
    return value.value === '' && query.value.length === 0 ? props.placeholder : '+ Add to your search'
  })

  watch(query, () => {
    console.log('query', query.value)
  })

  const isOperator = (term) => term === 'AND' || term === 'OR'

  const onQueryClose = (item, index) => {
    query.value.splice(index, 1)
    emit('query-close', parseQuery(query.value))
  }

  const onInput = (event) => {
    emit('input', event.target.value)
  }

  const onEsc = () => {
    input.value.blur()
    emit('esc', parseQuery(query.value))
  }

  const onFocus = () => {
    hasFocus.value = true
    emit('focus', parseQuery(query.value))
  }

  const onBlur = () => {
    hasFocus.value = false
    emit('blur', parseQuery(query.value))
  }

  const onEnter = () => {
    const trimmedValue = value.value.trim()
    if (!trimmedValue) return

    const lastQueryItem = query.value[query.value.length - 1]

    if (isOperator(trimmedValue)) {
      // Prevent consecutive operators (e.g., "AND AND")
      if (!query.value.length || isOperator(lastQueryItem)) return
    }

    query.value.push(trimmedValue)
    emit('enter', parseQuery(query.value))
    value.value = ''
  }

  const onDelete = () => {
    if (value.value === '') {
      query.value.pop()
      emit('delete', parseQuery(query.value))
    }
  }

  const onClear = () => {
    query.value = []
    value.value = ''
    input.value.focus()
    emit('clear', parseQuery(query.value))
  }

  /**
   * Parses the query, ensuring AND/OR logic is correctly handled
   */
  const parseQuery = (queries) => {
    const andQueries = []
    const orQueries = []
    let currentOperator = 'OR' // Default behavior is OR unless AND is explicitly added

    queries.forEach(q => {
      if (isOperator(q)) {
        currentOperator = q
      } else {
        if (currentOperator === 'AND') {
          andQueries.push(q)
        } else {
          orQueries.push(q) // Default is OR
        }
      }
    })

    return { and: andQueries, or: orQueries }
  }
</script>

<style lang="scss" scoped>
  .ep-multi-search {
    display: flex;
    align-items: center;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .queries {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .query {
    display: flex;
    align-items: center;
    background-color: var(--interface-surface);
    border: 1px solid var(--border-color);
    padding: 0.3rem 0.6rem;
    border-radius: var(--border-radius);
    font-size: 0.9rem;
  }

  .query--operator {
    background-color: var(--highlight-color, #ffcc00);
    color: black;
    font-weight: bold;
  }
</style>
```

## Styles (SCSS)

```scss
@use '../mixins/_mixins' as *;

.ep-multi-search {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: var(--border-color);

  &:focus-within {
    outline: var(--ep-default-focus-outline);
    outline-offset: var(--ep-focus-outline-offset);
  }

  .queries {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 0.3rem;
    padding-right: 0.6rem;

    .query {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 0.3rem;
      height: 100%;
      padding: 0 0.6rem 0 1rem;
      background-color: var(--primary-color-base);
      border-radius: var(--border-radius);
      color: hsl(var(--gray-0));

      @include hover {
        &:hover {
          background-color: var(--primary-color-600);
          cursor: pointer;
        }
      }

      .query__text {
        line-height: 2rem;
      }

      .query__close {
        // background-color: red;
        // margin-left: 0.8rem;
        cursor: pointer;
      }
    }
  }

  input {
    flex: 1;
    height: 100%;
    padding: 0 1.2rem;
    caret-color: var(--primary-color-base);

    &::placeholder {
      color: var(--text-color);
    }

    &:focus-visible {
      outline: none;

      &::placeholder {
        color: transparent;
      }
    }
  }

  &--has-icon input {
    padding-left: 0;
  }

  &--focus {
    border-color: var(--primary-color-base);
  }

  &--disabled {
    color: var(--text-color--disabled);
    border-color: var(--border-color--disabled);

    input::placeholder {
      opacity: 0.3;
    }
  }

  &__icon,
  &__clear {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__clear {
    cursor: pointer;
  }
}
```