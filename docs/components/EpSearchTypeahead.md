# EpSearchTypeahead



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `inputProps` | - | `Record` | `-` |
| `resultsKey` | - | `string` | `-` |
| `returnedSearchResults` | - | `Array` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `clear` | - | - |
| `search` | - | - |
| `selection` | - | - |


::: info
This component does not use slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-search-typeahead` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-search-typeahead {
  --ep-search-typeahead-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-search-typeahead-bg-color` | `var(--interface-overlay)` | — |
| `--ep-search-typeahead-item-selected-bg-color` | `var(--primary-color-base)` | selected |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-search-typeahead-border-color` | `var(--border-color--lighter)` | — |
| `--ep-search-typeahead-border-radius` | `var(--border-radius--default)` | — |
| `--ep-search-typeahead-border-style` | `solid` | — |
| `--ep-search-typeahead-border-width` | `var(--border-width--hairline)` | — |
| `--ep-search-typeahead-item-border-radius` | `var(--border-radius--default)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-search-typeahead-item-font-size` | `var(--font-size--small)` | — |
| `--ep-search-typeahead-item-line-height` | `1` | — |
| `--ep-search-typeahead-item-selected-text-color` | `var(--text-color--loud)` | selected |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-search-typeahead-item-padding` | `0.9rem 1.4rem` | — |
| `--ep-search-typeahead-padding` | `1rem` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-search-typeahead-max-height` | `50vh` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-search-typeahead-offset` | `0.4rem` | — |
| `--ep-search-typeahead-z-index` | `var(--z-index--dropdown)` | — |

## Component Code

```vue
<script setup lang="ts">
  import { onClickOutside, useDebounceFn } from '@vueuse/core'
  import { computed, ref, useTemplateRef } from 'vue'

  import type { Size } from '../../types'
  import EpInput from '../input/EpInput.vue'

  interface Props {
    inputProps?: Record<string, unknown>
    resultsKey?: string
    returnedSearchResults: Record<string, unknown>[]
  }

  const {
    returnedSearchResults,
    inputProps = {},
    resultsKey = '',
  } = defineProps<Props>()

  const emit = defineEmits<{
    clear: []
    search: [query: string]
    selection: [result: Record<string, unknown>]
  }>()

  defineOptions({ name: 'EpSearchTypeahead' })

  const searchQuery = ref('')
  const activeItemIndex = ref(-1)

  const activeItem = computed(() => {
    return returnedSearchResults[activeItemIndex.value]
  })

  const computedInputProps = computed(() => {
    return {
      size: 'default' as Size,
      placeholder: 'Search…',
      clearable: true,
      ...inputProps,
    }
  })

  const resetSearch = (): void => {
    searchQuery.value = ''
    activeItemIndex.value = -1
    emit('clear')
  }

  const resultsListRef = useTemplateRef<HTMLDivElement>('resultsListRef')

  onClickOutside(resultsListRef, resetSearch)

  const syncSearchQueryToActiveItem = (): void => {
    const selectedResult = activeItem.value
    if (selectedResult) {
      searchQuery.value = selectedResult[resultsKey] as string
    }
  }

  const onActiveItemIndexUpdate = (delta: number): void => {
    const newIndex = activeItemIndex.value + delta

    if (returnedSearchResults.length === 0 || newIndex < 0 || newIndex >= returnedSearchResults.length) {
      return
    }

    activeItemIndex.value = newIndex
    syncSearchQueryToActiveItem()

    scrollToSelectedItem()
  }

  const scrollToSelectedItem = (): void => {
    if (!resultsListRef.value) return
    const list = resultsListRef.value.children[0] as HTMLElement
    const selectedItem = list.children[activeItemIndex.value] as HTMLElement

    if (!selectedItem) return

    const dropdownHeight = resultsListRef.value.offsetHeight
    const itemTop = selectedItem.offsetTop
    const itemBottom = itemTop + selectedItem.offsetHeight

    if (itemBottom > dropdownHeight + resultsListRef.value.scrollTop) {
      resultsListRef.value.scrollTop = itemBottom - dropdownHeight
    } else if (itemTop < resultsListRef.value.scrollTop) {
      resultsListRef.value.scrollTop = itemTop
    }
  }

  const debouncedSearch = useDebounceFn((value: string) => emit('search', value), 200)

  const onInput = (): void => {
    activeItemIndex.value = -1
    debouncedSearch(searchQuery.value)
  }

  const onEnter = (): void => {
    if (returnedSearchResults.length === 0) {
      return
    }
    onSelection(returnedSearchResults[activeItemIndex.value])
  }

  const onMouseEnter = (index: number): void => {
    activeItemIndex.value = index
    syncSearchQueryToActiveItem()
  }

  const onSelection = (result: Record<string, unknown>): void => {
    emit('selection', result)
  }
</script>

<template>
  <div class="ep-search-typeahead">
    <ep-input
      v-model="searchQuery"
      v-bind="computedInputProps"
      spellcheck="false"
      @update:model-value="onInput"
      @clear="resetSearch"
      @keydown.prevent.down="onActiveItemIndexUpdate(1)"
      @keydown.prevent.up="onActiveItemIndexUpdate(-1)"
      @keydown.enter="onEnter"
      @keydown.esc="resetSearch"
    />
    <div
      v-if="returnedSearchResults.length"
      ref="resultsListRef"
      class="ep-search-typeahead-dropdown"
    >
      <ul>
        <li
          v-for="(result, index) in returnedSearchResults"
          :key="index"
          :class="[
            'ep-search-typeahead-dropdown__item',
            { 'ep-search-typeahead-dropdown__item--active': index === activeItemIndex, }
          ]"
          @click="onSelection(result)"
          @mouseenter="onMouseEnter(index)"
        >
          {{ result[resultsKey] }}
        </li>
      </ul>
    </div>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-search-typeahead {
  --ep-search-typeahead-offset: 0.4rem;
  --ep-search-typeahead-max-height: 50vh;
  --ep-search-typeahead-padding: 1rem;
  --ep-search-typeahead-bg-color: var(--interface-overlay);
  --ep-search-typeahead-border-width: var(--border-width--hairline);
  --ep-search-typeahead-border-style: solid;
  --ep-search-typeahead-border-color: var(--border-color--lighter);
  --ep-search-typeahead-border-radius: var(--border-radius--default);
  --ep-search-typeahead-z-index: var(--z-index--dropdown);

  --ep-search-typeahead-item-padding: 0.9rem 1.4rem;
  --ep-search-typeahead-item-border-radius: var(--border-radius--default);
  --ep-search-typeahead-item-font-size: var(--font-size--small);
  --ep-search-typeahead-item-line-height: 1;
  --ep-search-typeahead-item-selected-bg-color: var(--primary-color-base);
  --ep-search-typeahead-item-selected-text-color: var(--text-color--loud);

  position: relative;
}

// The dropdown carries its own block-level class but is rendered inside
// .ep-search-typeahead, so it inherits the properties declared above.
.ep-search-typeahead-dropdown {
  position: absolute;
  z-index: var(--ep-search-typeahead-z-index);
  top: calc(100% + var(--ep-search-typeahead-offset));
  left: 0;
  width: 100%;
  max-height: var(--ep-search-typeahead-max-height);
  padding: var(--ep-search-typeahead-padding);
  border-width: var(--ep-search-typeahead-border-width);
  border-style: var(--ep-search-typeahead-border-style);
  border-color: var(--ep-search-typeahead-border-color);
  border-radius: var(--ep-search-typeahead-border-radius);
  background-color: var(--ep-search-typeahead-bg-color);
  overflow-y: auto;

  &__item {
    padding: var(--ep-search-typeahead-item-padding);
    border-radius: var(--ep-search-typeahead-item-border-radius);
    cursor: pointer;
    font-size: var(--ep-search-typeahead-item-font-size);
    line-height: var(--ep-search-typeahead-item-line-height);

    &--active {
      background-color: var(--ep-search-typeahead-item-selected-bg-color);
      color: var(--ep-search-typeahead-item-selected-text-color);
    }
  }
}

```