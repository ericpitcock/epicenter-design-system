<!-- vue 3 options api autocomplete component -->
<template>
  <div class="ep-autocomplete">
    <input
      type="text"
      v-model="search"
      @input="onInput"
      @keydown.down="onKeyDown"
      @keydown.up="onKeyUp"
      @keydown.enter="onEnter"
      @keydown.esc="onEsc"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div class="ep-autocomplete-dropdown" v-show="showDropdown">
      <div
        class="ep-autocomplete-dropdown-item"
        v-for="(item, index) in filteredItems"
        :key="item.id"
        :class="{ 'ep-autocomplete-dropdown-item-active': index === currentIndex }"
        @mouseenter="onMouseEnter(index)"
        @mousedown="onMouseDown"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpAutocomplete',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      search: '',
      currentIndex: -1,
      showDropdown: false,
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => item.name.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
  methods: {
    onInput() {
      this.showDropdown = true;
    },
    onKeyDown() {
      if (this.currentIndex < this.filteredItems.length - 1) {
        this.currentIndex += 1;
      }
    },
    onKeyUp() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
    onEnter() {
      this.search = this.filteredItems[this.currentIndex].name;
      this.showDropdown = false;
    },
    onEsc() {
      this.showDropdown = false;
    },
    onFocus() {
      this.showDropdown = true;
    },
    onBlur() {
      this.showDropdown = false;
    },
    onMouseEnter(index) {
      this.currentIndex = index;
    },
    onMouseDown() {
      this.search = this.filteredItems[this.currentIndex].name;
      this.showDropdown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.ep-autocomplete {
  position: relative;
  width: 300px;
  margin: 0 auto;
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }
  .ep-autocomplete-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: var(--background-2);
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 1;
    .ep-autocomplete-dropdown-item {
      padding: 10px;
      cursor: pointer;
      &-active {
        background-color: #eee;
      }
    }
  }
}
</style>