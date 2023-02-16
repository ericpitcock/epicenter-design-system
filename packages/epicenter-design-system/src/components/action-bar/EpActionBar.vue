<!-- vue action bar component with horizontally aligned EpIcon components -->
<template>
  <div class="ep-action-bar">
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
  import EpButton from '../button/EpButton'
  import EpDropdown from '../dropdown/EpDropdown'

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
    methods: {
      itemClick(item) {
        this.$emit('action bar click', item)
        if (item.command) {
          item.command(item)
        }
      }
    },
    computed: {
      buttonDefaults() {
        return {
          kind: 'ghost',
          label: ''
        }
      },
      // dropdownDefaults() {
      //   return {
      //     button: {
      //       kind: 'ghost',
      //       label: ''
      //     },
      //     items: [],
      //   }
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-action-bar {
    display: flex;
    flex-direction: row;
    justify-content: v-bind(justifyContent);
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
</style>