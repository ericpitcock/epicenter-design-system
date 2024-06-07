<template>
  <div class="pagination">
    <button
      :disabled="currentPage === 1"
      @click="prevPage"
    >
      Previous
    </button>
    <span>{{ currentPage }}</span>
    <button
      :disabled="currentPage === totalPages"
      @click="nextPage"
    >
      Next
    </button>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpTablePagination'
  })

  const props = defineProps({
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
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
</script>

<style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .pagination button {
    margin: 0 5px;
  }
</style>
