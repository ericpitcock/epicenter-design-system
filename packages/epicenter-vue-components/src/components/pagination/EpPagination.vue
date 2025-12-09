<template>
  <div class="ep-pagination">
    <ep-flex
      class="justify-between align-center gap-30"
      :class="customClass"
    >
      <!-- @slot Content displayed on the left side of the pagination controls -->
      <slot name="left" />
      <ep-flex
        class="align-center gap-10"
        :class="controlsClass"
      >
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
          <span class="pagination-info">
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

<script setup>
  import { ArrowLeft01, ArrowRight01 } from '@ericpitcock/epicenter-icons'
  import { computed } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpFlex from '../flexbox/EpFlex.vue'

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
     * Custom CSS class to apply to the pagination container.
     */
    customClass: {
      type: String,
      default: ''
    },
    controlsClass: {
      type: String,
      default: ''
    }
  })

  const emit = defineEmits(['pageChange'])

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

<style lang="scss" scoped>
  .ep-pagination {
    width: 100%;
  }

  .pagination-info {
    color: var(--text-color--subtle);
    font-size: 14px;
    margin: 0 8px;
  }
</style>
