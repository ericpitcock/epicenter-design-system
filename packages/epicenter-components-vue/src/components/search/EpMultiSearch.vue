<script setup lang="ts">
  import Cancel01 from '@ericpitcock/epicenter-icons-vue/Cancel01'
  import Search01 from '@ericpitcock/epicenter-icons-vue/Search01'
  import { computed, ref, watch } from 'vue'

  interface ParsedQuery {
    and: string[]
    or: string[]
  }

  interface EpMultiSearchProps {
    autofocus?: boolean
    backgroundColor?: string
    borderColor?: string
    borderRadius?: string
    borderStyle?: string
    borderWidth?: string
    color?: string
    disabled?: boolean
    height?: string
    icon?: Record<string, unknown>
    placeholder?: string
    width?: string
  }

  const {
    autofocus = false,
    backgroundColor = 'var(--interface-foreground)',
    borderColor = 'var(--border-color)',
    borderRadius = 'var(--border-radius)',
    borderStyle = 'solid',
    borderWidth = '0.1rem',
    color = 'var(--text-color)',
    disabled = false,
    height = '5rem',
    icon = {},
    placeholder = '',
    width = '100%',
  } = defineProps<EpMultiSearchProps>()

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

  const input = ref<HTMLInputElement | null>(null)
  const hasFocus = ref(false)
  const value = ref('')
  const query = ref<string[]>([])

  const classes = computed(() => ({
    'ep-multi-search--has-icon': icon,
    'ep-multi-search--focus': hasFocus.value,
    'ep-multi-search--disabled': disabled,
  }))

  const clearable = computed(() => query.value.length > 0 || value.value.length > 0)

  const iconStyles = computed(() => ({
    flex: `0 0 ${height}`,
    height: height,
  }))

  const inputStyles = computed(() => ({
    width: width,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    color: color
  }))

  const placeholderValue = computed(() => {
    return value.value === '' && query.value.length === 0 ? placeholder : '+ Add to your search'
  })

  watch(query, () => {
    console.log('query', query.value)
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
    :style="inputStyles"
  >
    <div
      v-if="icon"
      class="ep-multi-search__icon"
      :style="iconStyles"
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
      :style="iconStyles"
      @click="onClear"
    >
      <Cancel01 />
    </div>
  </div>
</template>

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