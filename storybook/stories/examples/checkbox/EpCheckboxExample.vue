<template>
  <ep-container
    max-width="120rem"
    height="100%"
    container-padding="0 3rem"
    overflow="auto"
  >
    <template #header>
      <ep-header>
        <template #left>
          Font sample editor
        </template>
      </ep-header>
    </template>
    <template #default>
      <div class="container">
        <div class="filters">
          <ep-checkbox
            v-for="(checkbox, index) in checkboxes"
            :key="checkbox.label"
            v-bind="checkbox"
            @checkchange="checkChange(index)"
          />
        </div>
        <div class="google-fonts">
          <div
            v-for="font in filteredFonts"
            :key="font.family"
            class="font"
          >
            <div class="font__name text--subtle">
              {{ font.family }}
            </div>
            <font-container :font="font" />
          </div>
        </div>
      </div>
    </template>
  </ep-container>
</template>

<script>
  import faker from 'faker'
  import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
  import EpContainer from '@/components/container/EpContainer.vue'
  import EpHeader from '@/components/header/EpHeader.vue'
  import FontContainer from './FontContainer.vue'

  export default {
    name: 'GoogleFonts',
    components: {
      EpCheckbox,
      EpContainer,
      EpHeader,
      FontContainer,
    },
    data() {
      return {
        checkboxes: [
          {
            id: faker.datatype.uuid(),
            name: 'font-style',
            value: 'all',
            checked: true,
            label: 'All',
            indeterminate: false,
            // command: () => toggleAll(),
          },
          {
            id: faker.datatype.uuid(),
            name: 'font-style',
            value: 'sans-serif',
            checked: true,
            label: 'Sans Serif',
            // command: () => console.log('check change')
          },
          {
            id: faker.datatype.uuid(),
            name: 'font-style',
            value: 'serif',
            checked: true,
            label: 'Serif',
            // command: () => console.log('check change')
          },
          {
            id: faker.datatype.uuid(),
            name: 'font-style',
            value: 'display',
            checked: true,
            label: 'Display',
            // command: () => console.log('check change')
          },
          {
            id: faker.datatype.uuid(),
            name: 'font-style',
            value: 'handwriting',
            checked: true,
            label: 'Handwritng',
            // command: () => console.log('check change')
          },
          {
            id: faker.datatype.uuid(),
            name: 'font-style',
            value: 'monospace',
            checked: true,
            label: 'Monospace',
            // command: () => console.log('check change')
          }
        ],
        fonts: [],
        selectedStyles: [],
      }
    },
    computed: {
      filteredFonts() {
        return this.fonts.filter(font => this.selectedStyles.includes(font.category))
        // return this.fonts
      }
    },
    mounted() {
      this.getFonts()
      console.log(this.fonts)
      // add all checked values to selectedStyles
      this.checkboxes.forEach(checkbox => {
        if (checkbox.checked && checkbox.value !== 'all') {
          this.selectedStyles.push(checkbox.value)
        }
      })
      console.log(this.selectedStyles)
    },
    methods: {
      checkChange(index) {
        // toggle the clicked checkbox
        this.checkboxes[index].checked = !this.checkboxes[index].checked

        // if index is 0 (that is "All" ) toggle all checkboxes to the same state
        if (index === 0) {
          this.checkboxes.forEach(checkbox => checkbox.checked = this.checkboxes[0].checked)
          // if a different checkbox is clicked
        } else {
          // if all checkboxes, except "All" are checked
          if (this.checkboxes.slice(1).every(checkbox => checkbox.checked)) {
            this.checkboxes[0].checked = true
            this.checkboxes[0].indeterminate = false
          }
          // if some checkboxes are checked and some are not
          if (this.checkboxes.some(checkbox => checkbox.checked) &&
            this.checkboxes.some(checkbox => !checkbox.checked)) {
            this.checkboxes[0].indeterminate = true
            this.checkboxes[0].checked = false
            // all other cases
          } else {
            this.checkboxes[0].indeterminate = false
          }
        }

        // update selectedStyles based on checkbox states
        this.selectedStyles = this.checkboxes[0].checked ?
          ['sans-serif', 'serif', 'display', 'handwriting', 'monospace'] :
          this.checkboxes
            .filter(checkbox => checkbox.checked && checkbox.value !== 'all')
            .map(checkbox => checkbox.value)
      },
      async getFonts() {
        const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC4LPtjlhXImnuIBnGbYCgwRLYoXDZ2i8c')
          .then(response => response.json())
          .then(data => this.fonts = data.items)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    height: 100%;
  }

  .filters {
    flex: 0 0 20rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 3rem;
  }

  .google-fonts {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 3rem;
    overflow: auto;
    -ms-overflow-style: none; // Internet Explorer, Edge
    scrollbar-width: none; // Firefox

    &::-webkit-scrollbar {
      display: none; // Chrome, Safari, Opera
    }
  }
</style>