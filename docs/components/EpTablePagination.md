# EpTablePagination



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `currentPage` | - | `number` | `-` |
| `resultsPerPage` | - | `number` | `-` |
| `showPages` | - | `boolean` | `-` |
| `totalPages` | - | `number` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `pageChange` | - | - |
| `update:resultsPerPage` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<script setup lang="ts">
  import ArrowLeft01 from '@ericpitcock/epicenter-icons-vue/ArrowLeft01'
  import ArrowRight01 from '@ericpitcock/epicenter-icons-vue/ArrowRight01'
  import { computed } from 'vue'

  import type { SelectOption } from '../../types'
  import EpButton from '../button/EpButton.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpFooter from '../footer/EpFooter.vue'
  import EpSelect from '../select/EpSelect.vue'

  interface EpTablePaginationProps {
    currentPage: number
    resultsPerPage: number
    showPages?: boolean
    totalPages: number
  }

  const {
    resultsPerPage,
    currentPage,
    totalPages,
    showPages = false,
  } = defineProps<EpTablePaginationProps>()

  const emit = defineEmits<{
    pageChange: [page: number]
    'update:resultsPerPage': [value: number]
  }>()

  const resultsPerPageOptions: SelectOption[] = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
    { label: '100', value: 100 }
  ]

  const onResultsPerPageChange = (value: unknown): void => {
    emit('update:resultsPerPage', Number(value))
  }

  const prevPage = (): void => {
    if (currentPage > 1) {
      emit('pageChange', currentPage - 1)
    }
  }

  const nextPage = (): void => {
    if (currentPage < totalPages) {
      emit('pageChange', currentPage + 1)
    }
  }

  const truncationThreshold = 9

  const shouldShowStartEllipsis = computed(() => {
    return totalPages > truncationThreshold && currentPage > 3
  })

  const shouldShowEndEllipsis = computed(() => {
    return totalPages > truncationThreshold && currentPage < totalPages - 2
  })

  const pageRange = computed((): number[] => {
    const range: number[] = []
    if (totalPages <= truncationThreshold) {
      for (let i = 2; i < totalPages; i++) {
        range.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 2; i <= 4; i++) {
          range.push(i)
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 3; i < totalPages; i++) {
          range.push(i)
        }
      } else {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          range.push(i)
        }
      }
    }
    return range
  })
</script>

<template>
  <div class="ep-table-pagination">
    <ep-footer
      right-gap="1rem"
      left-flex="0 1 40rem"
    >
      <template #right>
        <ep-button
          :disabled="currentPage === 1"
          aria-label="Previous page"
          @click="prevPage"
        >
          <template #icon-left>
            <arrow-left01 />
          </template>
        </ep-button>
        <template v-if="showPages">
          <ep-button
            aria-label="First page"
            :class="{ 'ep-button--selected': currentPage === 1 }"
            @click="emit('pageChange', 1)"
          >
            1
          </ep-button>
          <span v-if="shouldShowStartEllipsis">...</span>
          <ep-button
            v-for="page in pageRange"
            :key="page"
            aria-label="Page {{ page }}"
            :class="{ 'ep-button--selected': currentPage === page }"
            @click="emit('pageChange', page)"
          >
            {{ page.toString() }}
          </ep-button>
          <span v-if="shouldShowEndEllipsis">...</span>
          <ep-button
            v-if="totalPages > 1"
            aria-label="Last page"
            :class="{ 'ep-button--selected': currentPage === totalPages }"
            @click="emit('pageChange', totalPages)"
          >
            {{ totalPages.toString() }}
          </ep-button>
        </template>
        <ep-button
          aria-label="Next page"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          <template #icon-right>
            <arrow-right01 />
          </template>
        </ep-button>
      </template>
      <template #left>
        <ep-flex class="justify-end align-center gap-10 text--overflow-hidden">
          Results per page
          <ep-select
            :model-value="resultsPerPage"
            select-id="resultsPerPage"
            :options="resultsPerPageOptions"
            width="7.5rem"
            @update:model-value="onResultsPerPageChange"
          />
        </ep-flex>
      </template>
    </ep-footer>
  </div>
</template>

```

## Styles (SCSS)

```scss
  .ep-table-pagination {
    --ep-table-pagination-padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--ep-table-pagination-padding);
    user-select: none;
  }
```