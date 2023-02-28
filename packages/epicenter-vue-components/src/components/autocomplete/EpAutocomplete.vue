<template>
  <div class="ep-autocomplete">
    <input
      v-model="search"
      class="ep-autocomplete__input"
      :style="inputStyle"
      type="text"
      :placeholder="placeholder"
      @input="onInput"
      @keydown.down="onKeyDown"
      @keydown.up="onKeyUp"
      @keydown.enter="onEnter"
      @keydown.esc="onEsc"
      @focus="onFocus"
      @blur="onBlur"
    >
    <div
      v-show="showDropdown"
      class="ep-autocomplete__dropdown"
    >
      <div
        v-for="(item, index) in filteredItems"
        :key="item.id"
        class="ep-autocomplete__dropdown__item"
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
    emits: ['selected'],
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
        // if currentIndex is -1, the user has not selected an item from the dropdown
        if (this.currentIndex === -1) {
          return
        }
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
