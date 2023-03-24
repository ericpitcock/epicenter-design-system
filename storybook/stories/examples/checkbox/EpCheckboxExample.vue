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
          <ep-input
            v-model="typeSample"
            height="3.8rem"
            background-color="var(--background-1)"
            placeholder="Enter your sample text here"
          />
          {{ filteredFonts.length }} fonts
        </template>
      </ep-header>
    </template>
    <template #default>
      <div class="container">
        <div class="filters">
          <ep-checkbox
            v-model="recommendedOnly"
            :checked="recommendedOnly"
            label="Top Picks"
          />
          <p>Styles</p>
          <ep-checkbox
            v-for="(checkbox, index) in checkboxes"
            :key="checkbox.label"
            v-bind="checkbox"
            @checkchange="checkChange(index)"
          />
        </div>
        <div class="google-fonts">
          <div
            v-if="filteredFonts.length === 0"
            class="empty-state"
          >
            <p>No fonts found.</p>
            <p v-if="recommendedOnly">
              Try <span @click="recommendedOnly = !recommendedOnly">turning off
                Top Picks</span>
            </p>
          </div>
          <div
            v-for="font in filteredFonts"
            :key="font.family"
            class="font"
          >
            <font-container
              :font="font"
              :sample="typeSample"
            />
            <div class="font__meta">
              <p>{{ font.family }}</p>
              <p class="capitalize">{{ font.category }}</p>
              <p>{{ fontInfo(font) }}</p>
            </div>
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
  import EpInput from '@/components/input/EpInput.vue'
  import FontContainer from './FontContainer.vue'

  export default {
    name: 'GoogleFonts',
    components: {
      EpCheckbox,
      EpContainer,
      EpHeader,
      EpInput,
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
        recommendedOnly: true,
        recommendedFonts: [
          // sans-serif 39
          'Archivo',
          'Archivo Narrow',
          'Asap',
          'Asap Condensed',
          'Bai Jamjuree',
          'Barlow',
          'Barlow Condensed',
          'Barlow Semi Condensed',
          'Be Vietnam',
          'Chivo',
          'DM Sans',
          'Exo 2',
          'Fira Sans',
          'Fira Sans Condensed',
          'Fira Sans Extra Condensed',
          'Gudea',
          'IBM Plex Sans',
          'IBM Plex Sans Condensed',
          'Karla',
          'Lato',
          'Lekton',
          'Libre Franklin',
          'M PLUS 1p',
          'M PLUS Rounded 1c',
          'Mada',
          'News Cycle',
          'Nunito',
          'Nunito Sans',
          'Open Sans',
          'Open Sans Condensed',
          'Oswald',
          'Pragati Narrow',
          'Public Sans',
          'Quattrocento Sans',
          'Quicksand',
          'Roboto',
          'Roboto Condensed',
          'Sarabun',
          'Source Sans Pro',
          'Work Sans',
          'Yantramanav',
          // serif 28
          'Abhaya Libre',
          'Adamina',
          'Aleo',
          'Alice',
          'Alike',
          'Alike Angular',
          'Amethysta',
          'Amiri',
          'Andada',
          'Arbutus Slab',
          'Asar',
          'Brawler',
          'Buenard',
          'Cambo',
          'Copse',
          'Crimson Pro',
          'Crimson Text',
          'Domine',
          'Donegal One',
          'Esteban',
          'Fjord One',
          'Gelasio',
          'IBM Plex Serif',
          'Petrona',
          'Solway',
          'Source Serif Pro',
          'Spectral',
          'Trocchi',
          'Zilla Slab'
        ],
        selectedStyles: [],
        typeSample: 'The quick brown fox jumps over the lazy dog',
      }
    },
    computed: {
      filteredFonts() {
        // filter this.fonts by selectedStyles array
        // then if recommendedOnly is true fitler again using recommendedFonts array
        if (this.selectedStyles.length > 0) {
          return this.fonts.filter(font => {
            if (this.recommendedOnly) {
              return this.recommendedFonts.includes(font.family) && this.selectedStyles.includes(font.category)
            } else {
              return this.selectedStyles.includes(font.category)
            }
          })
        } else {
          return this.fonts.filter(font => {
            if (this.recommendedOnly) {
              return this.recommendedFonts.includes(font.family) && this.selectedStyles.includes(font.category)
            } else {
              return this.fonts
              // return this.selectedStyles.includes(font.category)
            }
          })
        }
      },
    },
    watch: {
      recommendedOnly() {
        console.log(this.recommendedOnly)
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
      fontInfo(font) {
        let label = font.variants.length > 1 ? 'weights' : 'weight'
        // if it doesn't have italics
        if (!font.variants.includes('italic')) {
          return `${font.variants.length} ${label}`
        } else {
          let italicCount = 0
          font.variants.forEach(variant => {
            if (variant.includes('italic')) { italicCount++ }
          })
          return `${font.variants.length - italicCount} ${label} w/ italics`
        }
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

  // this is the container
  .google-fonts {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 3rem 0 10rem 0;
    overflow: auto;
    -ms-overflow-style: none; // Internet Explorer, Edge
    scrollbar-width: none; // Firefox

    &::-webkit-scrollbar {
      display: none; // Chrome, Safari, Opera
    }

    .font {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3rem 1rem;

      &:first-child {
        padding-top: 0;
      }

      &:not(:first-child) {
        border-top: 1px solid var(--border-color);
      }

      &__meta {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: right;
        color: var(--text-color--subtle);
      }
    }
  }
</style>