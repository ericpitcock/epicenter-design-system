<template>
  <div class="ep-checkbox">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      :indeterminate="indeterminate"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <label :for="id">
      <span class="ep-checkbox__inner"></span>
      <span class="ep-checkbox__label"><slot></slot></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'EpCheckbox',
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.checked)
    },
    handleFocus(e) {
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.$emit('blur', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.ep-checkbox {
  display: inline-block;
  vertical-align: middle;
  line-height: 1.5;
  cursor: pointer;
  user-select: none;
  // transition: all 0.3s;
  // -webkit-tap-highlight-color: transparent;
  // -webkit-touch-callout: none;
  // -webkit-user-select: none;
  // -moz-user-select: none;
  // -ms-user-select: none;
  input {
    position: absolute;
    left: -9999px;
    &:checked + label .ep-checkbox__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        display: block;
      }
    }
    &:disabled + label {
      color: #c0c4cc;
      cursor: not-allowed;
      .ep-checkbox__inner {
        border-color: #c0c4cc;
        background-color: #fff;
        &:after {
          border-color: #fff;
        }
      }
    }
    &:indeterminate + label .ep-checkbox__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 0;
        background-color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  label {
    position: relative;
    display: inline-block;
    padding-left: 20px;
    .ep-checkbox__inner {
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 14px;
      height: 14px;
      margin-top: -7px;
      border: 1px solid #c0c4cc;
      border-radius: 2px;
      background-color: #fff;
      transition: all 0.3s;
      &:after {
        position: absolute;
        display: none;
        content: '';
        width: 6px;
        height: 12px;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .ep-checkbox__label {
      padding-left: 5px;
    }
  }
}
</style>
