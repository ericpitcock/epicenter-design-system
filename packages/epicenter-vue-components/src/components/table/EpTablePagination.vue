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
            <ep-icon name="chevron-left" />
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
            <ep-icon name="chevron-right" />
          </template>
        </ep-button>
      </template>
      <template #left>
        <ep-flex class="justify-end align-center gap-10 text--overflow-hidden">
          Results per page
          <ep-select
            v-model="resultsPerPage"
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

<script setup>
  import { computed, ref } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpFooter from '../footer/EpFooter.vue'
  import EpIcon from '../icon/EpIcon.vue'
  import EpSelect from '../select/EpSelect.vue'

  defineOptions({
    name: 'EpTablePagination'
  })

  const props = defineProps({
    currentPage: {
      type: Number,
      required: true
    },
    showPages: {
      type: Boolean,
      default: false
    },
    resultsPerPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  })

  const resultsPerPage = ref(props.resultsPerPage)

  const resultsPerPageOptions = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
    { label: '100', value: 100 }
  ]

  const onResultsPerPageChange = (value) => {
    emit('update:resultsPerPage', value)
  }

  const showPages = ref(props.showPages)

  const emit = defineEmits(['pageChange', 'update:resultsPerPage'])

  const prevPage = () => {
    if (props.currentPage > 1) {
      emit('pageChange', props.currentPage - 1)
    }
  }

  const nextPage = () => {
    if (props.currentPage < props.totalPages) {
      emit('pageChange', props.currentPage + 1)
    }
  }

  const truncationThreshold = 9

  const shouldShowStartEllipsis = computed(() => {
    return props.totalPages > truncationThreshold && props.currentPage > 3
  })

  const shouldShowEndEllipsis = computed(() => {
    return props.totalPages > truncationThreshold && props.currentPage < props.totalPages - 2
  })

  const pageRange = computed(() => {
    const range = []
    if (props.totalPages <= truncationThreshold) {
      for (let i = 2; i < props.totalPages; i++) {
        range.push(i)
      }
    } else {
      if (props.currentPage <= 3) {
        for (let i = 2; i <= 4; i++) {
          range.push(i)
        }
      } else if (props.currentPage >= props.totalPages - 2) {
        for (let i = props.totalPages - 3; i < props.totalPages; i++) {
          range.push(i)
        }
      } else {
        for (let i = props.currentPage - 1; i <= props.currentPage + 1; i++) {
          range.push(i)
        }
      }
    }
    return range
  })
</script>
