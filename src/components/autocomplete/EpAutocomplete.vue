<template>
  <div class="ep-autocomplete">
    <input
      class="ep-autocomplete__input"
      :style="inputStyle"
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
    <div
      class="ep-autocomplete__dropdown"
      v-show="showDropdown"
    >
      <div
        class="ep-autocomplete__dropdown__item"
        v-for="(item, index) in filteredItems"
        :key="item.id"
        :class="{
          'ep-autocomplete__dropdown__item--active': index === currentIndex
        }"
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
      inputStyle: {
        type: Object,
        default: () => { }
      },
      items: {
        type: Array,
        required: true
      },
      searchableKeys: {
        type: Array,
        default: () => []
      },
      placeholder: {
        type: String,
        default: 'Search'
      },
      queryType: {
        type: String,
        default: 'startsWith' // contains, startsWith
      }
    },
    data() {
      return {
        search: '',
        currentIndex: -1,
        showDropdown: false
      }
    },
    computed: {
      filteredItems() {
        // filter items by search query using the searchableKeys if they are provided
        return this.searchableKeys.length
          ? this.items.filter(item => {
            const search = this.search.toLowerCase()
            return this.searchableKeys.some(field => {
              const itemField = item[field].toLowerCase()
              return this.queryType === 'contains' ? itemField.includes(search) : itemField.startsWith(search)
            })
          })
          : this.items.filter(item => {
            const itemName = item.name.toLowerCase()
            const search = this.search.toLowerCase()
            return this.queryType === 'contains' ? itemName.includes(search) : itemName.startsWith(search)
          })
      }
    },
    methods: {
      onInput() {
        // if the value is empty, hide the dropdown
        if (this.search === '') {
          this.showDropdown = false
          return
        }
        this.showDropdown = true
      },
      onKeyDown(event) {
        // do not move text cursor in the input if the user is using the arrow keys
        event.preventDefault()

        if (this.currentIndex < this.filteredItems.length - 1) {
          this.currentIndex += 1
        }

        if (!document.querySelector('.ep-autocomplete__dropdown__item--active')) {
          return
        }

        // keep the active item in view
        const container = document.querySelector('.ep-autocomplete__dropdown')
        const activeItem = document.querySelector('.ep-autocomplete__dropdown__item--active')
        const activeItemOffset = activeItem.offsetTop + activeItem.clientHeight - container.scrollTop
        const containerOffset = container.offsetHeight
        console.log(container.scrollTop)
        if (activeItemOffset > containerOffset) {
          container.scrollTop += activeItemOffset - containerOffset
        }
      },
      onKeyUp(event) {
        // do not move text cursor in the input if the user is using the arrow keys
        event.preventDefault()

        if (this.currentIndex > 0) {
          this.currentIndex -= 1
        }
      },
      onEnter() {
        this.selectItem()
      },
      onEsc() {
        this.showDropdown = false
      },
      onFocus() {
        this.currentIndex = -1
      },
      onBlur() {
        this.showDropdown = false
      },
      onMouseEnter(index) {
        this.currentIndex = index
      },
      onMouseDown() {
        this.selectItem()
      },
      selectItem() {
        this.$emit('selected', this.filteredItems[this.currentIndex])
        this.search = this.filteredItems[this.currentIndex].name
        this.showDropdown = false
        this.$el.querySelector('input').blur()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-autocomplete {
    position: relative;
    input {
      width: 100%;
      padding: 10px 10px 10px 80px;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      outline: none;
      font-size: var(--font-size--body);
      background-image: url('../../../static/airplane.svg');
      background-repeat: no-repeat;
      background-position: 14px 50%;
      &:focus {
        border-color: var(--color--primary);
      }
      &::selection {
        background-color: var(--color--primary);
        color: var(--gray-0);
      }
    }
    &__dropdown {
      position: absolute;
      top: calc(100% + 0.4rem);
      left: 0;
      width: 100%;
      max-height: 200px;
      padding: 1rem 0;
      overflow-y: auto;
      background-color: var(--background-4);
      border: 1px solid var(--border-color--lighter);
      border-radius: var(--border-radius);
      z-index: var(--z-index--dropdown);
      &__item {
        font-size: var(--font-size--small);
        line-height: 1;
        // padding: 0.9rem 1.2rem;
        padding: 0.9rem 2.2rem;
        cursor: pointer;
        &--active {
          background-color: var(--color--primary);
        }
      }
    }
  }
</style>
