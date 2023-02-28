<template>
  <div
    class="ep-action-bar"
    :style="actionBarStyles"
  >
    <template v-for="item in items">
      <ep-button
        v-if="item.type === 'button'"
        :key="`button-${item.id}`"
        v-bind="buttonDefaults"
        :icon-left="item.iconLeft"
        @click="itemClick(item)"
      />
      <ep-dropdown
        v-else-if="item.type === 'dropdown'"
        :key="`dropdown-${item.id}`"
        v-bind="item"
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
      }
    },
    emits: ['action bar click'],
    computed: {
      actionBarStyles() {
        return {
          justifyContent: this.justifyContent
        }
      },
      buttonDefaults() {
        return {
          kind: 'ghost',
          label: ''
        }
      }
    },
    methods: {
      itemClick(item) {
        this.$emit('action bar click', item)
        if (item.command) {
          item.command(item)
        }
      }
    }
  }
</script>
