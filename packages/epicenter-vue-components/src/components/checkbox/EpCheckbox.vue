<template>
  <div :class="['ep-checkbox', classes]">
    <input
      :id="id"
      ref="input"
      type="checkbox"
      :name="name"
      :value="modelValue"
      :checked="checked"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :tabindex="tabindex"
      @change="onChange(command, $event)"
    >
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script setup>
  import { computed, watch } from 'vue'

  const modelValue = defineModel({
    type: Boolean,
    default: false
  })

  // eslint-disable-next-line no-unused-vars
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
    }
  })

  const classes = computed(() => ({ 'ep-checkbox--disabled': this.disabled }))

  watch(() => this.indeterminate, () => {
    this.set_indeterminate()
  })
  // indeterminate() {
  //   this.$refs.input.indeterminate = this.indeterminate
  // }
  const onChange = (command, event) => {
    // console.log('onChange', event.target.checked)
    this.$emit('update:modelValue', event.target.checked)
    this.$emit('checkchange', event)
    if (command) {
      command(event.target.checked)
    }
  }
</script>
