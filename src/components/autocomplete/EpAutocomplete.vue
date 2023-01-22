<template>
  <div class="ep-autocomplete">
    <input
      type="text"
      :placeholder="placeholder"
      v-model="search"
      @input="onInput"
      @keydown.down="onKeyDown"
      @keydown.up="onKeyUp"
      @keydown.enter="onEnter"
      @keydown.esc="onEsc"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div class="ep-autocomplete__dropdown" v-show="showDropdown">
      <div
        class="ep-autocomplete__dropdown__item"
        v-for="(item, index) in filteredItems"
        :key="item.id"
        :class="{ 'ep-autocomplete__dropdown__item--active': index === currentIndex }"
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
    placeholder: {
      type: String,
      default: 'Search',
    },
    queryType: {
      type: String,
      default: 'startsWith', // contains, startsWith
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
      // if (this.queryType === 'startsWith') {
      //   // filter the items by those that begin with the search string
      //   return this.items.filter((item) => {
      //     const itemName = item.name.toLowerCase()
      //     const search = this.search.toLowerCase()
      //     return itemName.startsWith(search)
      //   })
      // } else if (this.queryType === 'contains') {
      //   // general filter
        
      // }
      return this.items.filter((item) => {
        const itemName = item.name.toLowerCase()
        const search = this.search.toLowerCase()
        return (this.queryType === 'contains')
          ? itemName.includes(search)
          : itemName.startsWith(search)
      })
    }
  },
  methods: {
    onInput() {
      this.showDropdown = true;
    },
    onKeyDown() {
      if (this.currentIndex < this.filteredItems.length - 1) {
        this.currentIndex += 1;
      }
      // scroll container if needed
      // first check if there is an active item
      if (!document.querySelector('.ep-autocomplete-dropdown-item-active')) {
        return;
      }
      const container = document.querySelector('.ep-autocomplete-dropdown');
      const activeItem = document.querySelector('.ep-autocomplete-dropdown-item-active');
      if (activeItem.offsetTop + activeItem.clientHeight > container.scrollTop + container.clientHeight) {
        container.scrollTop = activeItem.offsetTop + activeItem.clientHeight - container.clientHeight;
      }

      if (activeItem.offsetTop < container.scrollTop) {
        container.scrollTop = activeItem.offsetTop;
      }

      // scroll window if needed
      // const rect = activeItem.getBoundingClientRect();
      // if (rect.bottom > window.innerHeight) {
      //   window.scrollBy(0, rect.bottom - window.innerHeight);
      // }
      // if (rect.top < 0) {
      //   window.scrollBy(0, rect.top);
      // }
    },
    onKeyUp() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
      // keep the active item in the middle of the container
      const container = document.querySelector('.ep-autocomplete-dropdown');
      const activeItem = document.querySelector('.ep-autocomplete-dropdown-item-active');
      if (activeItem.offsetTop + activeItem.clientHeight > container.scrollTop + container.clientHeight) {
        container.scrollTop = activeItem.offsetTop + activeItem.clientHeight - container.clientHeight;
      }

      if (activeItem.offsetTop < container.scrollTop) {
        container.scrollTop = activeItem.offsetTop;
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
      // this.showDropdown = true;
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
    }
  }
}
</script>

<style lang="scss" scoped>
.ep-autocomplete {
  position: relative;
  width: 300px;
  margin: 0 auto;
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    outline: none;
  }
  &__dropdown {
    position: absolute;
    top: calc(100% + 0.4rem);
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: var(--background-4);
    border: 1px solid var(--border-color--lighter);
    border-radius: var(--border-radius);
    z-index: 1;
    &__item {
      padding: 10px;
      cursor: pointer;
      &--active {
        background-color: var(--color--primary);
      }
    }
  }
}
</style>