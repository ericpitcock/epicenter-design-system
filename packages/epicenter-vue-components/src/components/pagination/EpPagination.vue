<script setup>
  import ArrowLeft01 from '@ericpitcock/epicenter-icons-vue/ArrowLeft01'
  import ArrowRight01 from '@ericpitcock/epicenter-icons-vue/ArrowRight01'
  import { computed, ref } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpFlex from '../flexbox/EpFlex.vue'
  import EpSelect from '../select/EpSelect.vue'

  const props = defineProps({
    /**
     * The current active page number.
     */
    currentPage: {
      type: Number,
      required: true
    },
    /**
     * Total number of pages available.
     */
    totalPages: {
      type: Number,
      required: true
    },
    /**
     * If true, displays individual page number buttons instead of just prev/next.
     */
    showPages: {
      type: Boolean,
      default: false
    },
    /**
     * Custom CSS class to apply to pagination buttons.
     */
    buttonClass: {
      type: String,
      default: ''
    },
    /**
     * Number of results to display per page. When provided, shows a dropdown to change this value.
     */
    resultsPerPage: {
      type: Number,
      default: null
    },
    /**
     * Options for the results per page dropdown.
     */
    resultsPerPageOptions: {
      type: Array,
      default: () => [
        { label: '10 / page', value: 10 },
        { label: '20 / page', value: 20 },
        { label: '50 / page', value: 50 },
        { label: '100 / page', value: 100 }
      ]
    }
  })

  const emit = defineEmits(['pageChange', 'update:resultsPerPage'])

  const localResultsPerPage = ref(props.resultsPerPage)

  const onResultsPerPageChange = (value) => {
    emit('update:resultsPerPage', value)
  }

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
    const { totalPages, currentPage } = props

    // Show all pages if under threshold
    if (totalPages <= truncationThreshold) {
      for (let i = 2; i < totalPages; i++) {
        range.push(i)
      }
      return range
    }

    // Show first few pages when near start
    if (currentPage <= 3) {
      return [2, 3, 4]
    }

    // Show last few pages when near end
    if (currentPage >= totalPages - 2) {
      return [totalPages - 3, totalPages - 2, totalPages - 1]
    }

    // Show pages around current page when in middle
    return [currentPage - 1, currentPage, currentPage + 1]
  })
</script>

<template>
  <div class="ep-pagination">
    <ep-flex class="justify-between gap-30">
      <!-- @slot Content displayed on the left side of the pagination controls -->
      <slot name="left">
        <ep-flex
          v-if="resultsPerPage !== null"
          class="justify-end align-center gap-10"
        >
          <ep-select
            v-model="localResultsPerPage"
            select-id="resultsPerPage"
            :options="resultsPerPageOptions"
            placeholder=""
            style="--ep-input-width: fit-content;"
            @update:model-value="onResultsPerPageChange"
          />
        </ep-flex>
      </slot>
      <ep-flex class="align-center gap-10">
        <ep-button
          :disabled="currentPage === 1"
          aria-label="Previous page"
          :class="buttonClass"
          @click="prevPage"
        >
          <!-- @slot Custom icon for the previous page button. Defaults to <ArrowLeft01 /> -->
          <template #icon-left>
            <slot name="icon-prev">
              <ArrowLeft01 />
            </slot>
          </template>
        </ep-button>
        <template v-if="showPages">
          <ep-button
            aria-label="First page"
            :class="[buttonClass, { 'ep-button--selected': currentPage === 1 }]"
            @click="emit('pageChange', 1)"
          >
            1
          </ep-button>
          <span v-if="shouldShowStartEllipsis">...</span>
          <ep-button
            v-for="page in pageRange"
            :key="page"
            :aria-label="`Page ${page}`"
            :class="[buttonClass, { 'ep-button--selected': currentPage === page }]"
            @click="emit('pageChange', page)"
          >
            {{ page.toString() }}
          </ep-button>
          <span v-if="shouldShowEndEllipsis">...</span>
          <ep-button
            v-if="totalPages > 1"
            aria-label="Last page"
            :class="[buttonClass, { 'ep-button--selected': currentPage === totalPages }]"
            @click="emit('pageChange', totalPages)"
          >
            {{ totalPages.toString() }}
          </ep-button>
        </template>
        <template v-else>
          <span class="ep-pagination-info">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
        </template>
        <ep-button
          aria-label="Next page"
          :disabled="currentPage === totalPages"
          :class="buttonClass"
          @click="nextPage"
        >
          <template #icon-right>
            <!-- @slot Custom icon for the next page button. Defaults to <ArrowRight01 /> -->
            <slot name="icon-next">
              <ArrowRight01 />
            </slot>
          </template>
        </ep-button>
      </ep-flex>
      <!-- @slot Content displayed on the right side of the pagination controls -->
      <slot name="right" />
    </ep-flex>
  </div>
</template>