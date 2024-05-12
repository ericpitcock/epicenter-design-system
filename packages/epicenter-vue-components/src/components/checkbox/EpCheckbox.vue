<template>
  <label
    :for="id"
    :class="['ep-checkbox', classes]"
  >
    <input
      :id="id"
      ref="inputRef"
      v-model="modelValue"
      type="checkbox"
      :name="name"
      :value="value"
      :checked="checked"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :tabindex="tabindex"
    >
    {{ label }}
  </label>
</template>

<script setup>
  import { computed, watch, ref } from 'vue'

  const modelValue = defineModel({
    type: Boolean,
    default: false,
  })

  const props = defineProps({
    id: {
      type: String,
      default: 'default'
    },
    name: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Checkbox'
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      default: null
    },
    command: {
      type: Function,
      default: null
    },
    value: {
      type: String,
      required: true
    }
  })

  const inputRef = ref(null)

  const classes = computed(() => {
    return {
      'ep-checkbox--checked': modelValue.value,
      'ep-checkbox--disabled': props.disabled,
      'ep-checkbox--indeterminate': props.indeterminate,
    }
  })

  watch(() => props.checked, (newValue) => {
    console.log('checked watcher', newValue)
    // if it's not indeterminate, then set the checked property
    inputRef.value.checked = newValue

    // if it's indeterminate, then set the indeterminate property
    // if (props.indeterminate) {
    //   props.indeterminate = false
    // }
  })

  // watch(() => props.indeterminate, (newValue) => {
  //   if (newValue) {
  //     console.log('indeterminate watcher', newValue)
  //     inputRef.value.indeterminate = newValue
  //   }
  // })

  // const onChange = (command, event) => {
  //   modelValue.value = event.target.checked
  //   if (command) {
  //     command(event.target.checked)
  //   }
  // }
</script>
