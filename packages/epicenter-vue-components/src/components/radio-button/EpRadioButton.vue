<template>
  <label class="radio-button">
    <input
      type="radio"
      :name="name"
      :value="value"
      v-model="internalValue"
      class="radio-input"
      @change="$emit('input', internalValue)"
    >
    <span
      class="radio-custom"
      v-if="$slots.default"
      @click="handleClick"
    >
      <slot></slot>
    </span>
    <span
      class="radio-default"
      v-else
      @click="handleClick"
    ></span>
    <span class="radio-label">{{ label }}</span>
  </label>
</template>

<script>
  export default {
    name: 'RadioButton',
    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      modelValue: {
        type: String,
        required: true
      }
    },
    computed: {
      internalValue: {
        get() {
          return this.modelValue
        },
        set(newValue) {
          this.$emit('input', newValue)
        }
      }
    },
    methods: {
      handleClick() {
        this.internalValue = this.value
      }
    }
  }
</script>

<style scoped>
  .radio-button {
    display: flex;
    align-items: center;
  }

  .radio-input {
    display: none;
  }

  .radio-custom {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border: 1px solid gray;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 8px;
  }

  .radio-default {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border: 1px solid gray;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 8px;
  }

  .radio-default::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: gray;
    border-radius: 50%;
  }

  .radio-custom::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
  }

  .radio-input:checked ~ .radio-custom::before {
    background-color: blue;
  }

  .radio-label {
    font-size: 14px;
  }
</style>
