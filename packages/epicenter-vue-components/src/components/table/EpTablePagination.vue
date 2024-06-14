<template>
  <div class="ep-table-pagination">
    <ep-footer center-gap="1rem">
      <template #left>
        {{ currentPage }} of {{ totalPages }}
      </template>
      <template #center>
        <ep-button
          :disabled="currentPage === 1"
          :icon-left="{ name: 'chevron-left' }"
          @click="prevPage"
        />
        <template v-if="showPages">
          <ep-button
            v-for="(page, index) in totalPages"
            :key="index"
            :label="page.toString()"
            :classes="{ 'active': currentPage === page }"
            @click="emit('pageChange', page)"
          />
        </template>
        <ep-button
          :disabled="currentPage === totalPages"
          :icon-left="{ name: 'chevron-right' }"
          @click="nextPage"
        />
      </template>
      <template #right>
        Results per page
        <ep-select
          v-model="resultsPerPage"
          select-id="resultsPerPage"
          :options="resultsPerPageOptions"
          @update:model-value="onResultsPerPageChange"
        />
      </template>
    </ep-footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import EpButton from '../button/EpButton.vue'
  import EpSelect from '../select/EpSelect.vue'
  import EpFooter from '../footer/EpFooter.vue'

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

  const resultsPerPage = ref(props.resultsPerPage.toString())

  const resultsPerPageOptions = [
    {
      label: '10',
      value: 10
    },
    {
      label: '20',
      value: 20
    },
    {
      label: '50',
      value: 50
    },
    {
      label: '100',
      value: 100
    }
  ]

  const onResultsPerPageChange = (value) => {
    value = parseInt(value)
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
</script>
