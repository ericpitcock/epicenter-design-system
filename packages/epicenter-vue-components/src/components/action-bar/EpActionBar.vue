<template>
  <div
    class="ep-action-bar"
    :style="actionBarStyles"
  >
    <template v-for="(item, index) in items">
      <ep-button
        v-if="item.type === 'button'"
        :key="`button-${item.id}`"
        v-bind="buttonDefaults"
        :icon-left="item.iconLeft"
        @click="onClick(item, index)"
      />
      <ep-dropdown
        v-else-if="item.type === 'dropdown'"
        :key="`dropdown-${item.id}`"
        v-bind="item"
        :show-on-hover="showDropdownOnHover"
        @select="onClick"
      />
    </template>
  </div>
</template>

<script>
  import EpButton from '../button/EpButton.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'

  export default {
    name: 'EpActionBar',
    components: {
      EpButton,
      EpDropdown
    },
    props: {
      items: {
        type: Array,
        required: true,
      },
      justifyContent: {
        type: String,
        default: 'flex-end'
      },
      showDropdownOnHover: {
        type: Boolean,
        default: false
      }
    },
    emits: ['click'],
    computed: {
      actionBarStyles() {
        return {
          justifyContent: this.justifyContent
        }
      },
      buttonDefaults() {
        return {
          kind: 'ghost',
          label: '',
          title: '',
        }
      }
    },
    methods: {
      onClick(item) {
        this.$emit('click', item)
      },
      // onMouseover(item, index) {
      //   if (this.showDropdownOnHover) {
      //     this.$emit('click', { item, index })
      //   }
      // }
    }
  }
</script>
