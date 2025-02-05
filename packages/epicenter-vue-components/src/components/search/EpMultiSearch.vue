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
        class="query"
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
  import EpIcon from '../icon/EpIcon.vue'
  import { computed, ref, watch } from 'vue'

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

  // const hasError = ref(false)
  const hasFocus = ref(false)
  // value is the value of the input
  const value = ref('')
  // query is the array of values that have been added to the search
  const query = ref([])


  const classes = computed(() => {
    return {
      'ep-multi-search--has-icon': props.icon,
      'ep-multi-search--focus': hasFocus.value,
      'ep-multi-search--disabled': props.disabled,
    }
  })

  const clearable = computed(() => {
    return (value.value && query.value.length > 0) || (!value.value && query.value.length > 0) || (value.value && query.value.length === 0)
  })

  const iconStyles = computed(() => {
    return {
      flex: `0 0 ${props.height}`,
      height: props.height,
    }
  })

  const inputStyles = computed(() => {
    return {
      width: props.width,
      height: props.height,
      borderRadius: props.borderRadius,
      backgroundColor: props.backgroundColor,
      color: props.color
    }
  })

  const placeholderValue = computed(() => {
    return value.value === '' && query.value.length === 0 ? props.placeholder : '+ Add to your search'
  })

  watch(query, () => {
    console.log('query', query.value)
  })

  const onQueryClose = (item, index) => {
    query.value.splice(index, 1)
    emit('query-close', item)
  }

  const onInput = (event) => {
    emit('input', event.target.value)
  }

  const onEsc = (event) => {
    input.value.blur()
    emit('esc', event.target.value)
  }

  const onFocus = (event) => {
    hasFocus.value = true
    emit('focus', event.target.value)
  }

  const onBlur = (event) => {
    hasFocus.value = false
    emit('blur', event.target.value)
  }

  const onEnter = () => {
    query.value.push(value.value)
    emit('enter', query.value)
    value.value = ''
  }

  const onDelete = () => {
    if (value.value === '') {
      // find the last element in the query array and remove it
      query.value.splice(query.value.length - 1, 1)
      emit('delete', query.value)
    }
  }

  const onClear = () => {
    query.value = []
    value.value = ''
    input.value.focus()
    emit('clear', query.value)
  }
</script>
