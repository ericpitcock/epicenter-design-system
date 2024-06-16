<template>
  <div class="ep-table-pagination">
    <ep-footer
      left-gap="1rem"
      right-flex="0 0 40rem"
    >
      <template #left>
        <ep-button
          :disabled="currentPage === 1"
          :icon-left="{ name: 'chevron-left' }"
          @click="prevPage"
        />
        <template v-if="showPages">
          <ep-button
            label="1"
            :classes="{ 'active': currentPage === 1 }"
            @click="emit('pageChange', 1)"
          />
          <span v-if="shouldShowStartEllipsis">...</span>
          <ep-button
            v-for="page in pageRange"
            :key="page"
            :label="page.toString()"
            :classes="{ 'active': currentPage === page }"
            @click="emit('pageChange', page)"
          />
          <span v-if="shouldShowEndEllipsis">...</span>
          <ep-button
            v-if="totalPages > 1"
            :label="totalPages.toString()"
            :classes="{ 'active': currentPage === totalPages }"
            @click="emit('pageChange', totalPages)"
          />
        </template>
        <ep-button
          :disabled="currentPage === totalPages"
          :icon-left="{ name: 'chevron-right' }"
          @click="nextPage"
        />
      </template>
      <template #right>
        <ep-flex flex-props=",,,,flex-end,center,,1rem,">
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
  import { ref, computed } from 'vue'
  import EpButton from '../button/EpButton.vue'
  import EpSelect from '../select/EpSelect.vue'
  import EpFooter from '../footer/EpFooter.vue'
  import EpFlex from '../flexbox/EpFlex.vue'

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
