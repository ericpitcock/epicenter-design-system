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
          <p>Recommendations</p>
          <ep-checkbox
            v-model="recommendedOnly"
            :checked="recommendedOnly"
            label="Top Picks"
          />
          <template
            v-for="(filterSet, category) in checkboxes"
            :key="category"
          >
            <p class="capitalize">
              {{ category }}
            </p>
            <ep-checkbox
              v-for="(checkbox, index) in filterSet"
              :key="checkbox.label"
              v-bind="checkbox"
              @checkchange="checkChange(index, category)"
            />
          </template>
        </div>
        <div class="google-fonts">
          <div
            v-if="fontsLoaded && filteredFonts.length === 0"
            class="empty-state"
          >
            <p>No fonts found.</p>
            <p>
              Try adding a category or turning off Top Picks
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
        checkboxes: {
          // recommendations: [
          //   {
          //     id: faker.datatype.uuid(),
          //     name: 'top-picks',
          //     value: 'top-picks',
          //     checked: true,
          //     label: 'Top Picks',
          //   }
          // ],
          category: [
            // {
            //   id: faker.datatype.uuid(),
            //   name: 'category',
            //   value: 'all',
            //   checked: true,
            //   label: 'All',
            //   indeterminate: false,
            // },
            {
              id: faker.datatype.uuid(),
              name: 'category',
              value: 'sans-serif',
              checked: true,
              label: 'Sans Serif',
            },
            {
              id: faker.datatype.uuid(),
              name: 'category',
              value: 'serif',
              checked: true,
              label: 'Serif',
            },
            {
              id: faker.datatype.uuid(),
              name: 'category',
              value: 'display',
              checked: true,
              label: 'Display',
            },
            {
              id: faker.datatype.uuid(),
              name: 'category',
              value: 'handwriting',
              checked: true,
              label: 'Handwritng',
            },
            {
              id: faker.datatype.uuid(),
              name: 'category',
              value: 'monospace',
              checked: true,
              label: 'Monospace',
            }
          ],
        },
        filters: {
          category: [],
          // characterSets: [],
        },
        fonts: [],
        fontsLoaded: false,
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
        // if there are no filters, return nothing
        if (this.filters.category.length === 0) {
          return []
        }

        let filtered = this.fonts
        if (this.filters.category.length > 0) {
          filtered = filtered.filter(font => this.filters.category.includes(font.category))
        }
        if (this.recommendedOnly) {
          filtered = filtered.filter(font => this.recommendedFonts.includes(font.family))
        }
        // if (this.filters.width.length > 0) {
        //   filtered = filtered.filter(font => this.filters.width.includes(font.width))
        // }
        // if (this.filters.variants.length > 0) {
        //   filtered = filtered.filter(font => this.filters.variants.includes(font.variants))
        // }
        // if (this.filters.characters.length > 0) {
        //   filtered = filtered.filter(font => {
        //     const characters = font.characters.split(",")
        //     return this.filters.characters.every(filter => characters.includes(filter))
        //   })
        // }
        return filtered
      },
      // filteredFonts() {
      //   // filter this.fonts by selectedStyles array
      //   // then if recommendedOnly is true fitler again using recommendedFonts array
      //   if (this.selectedStyles.length > 0) {
      //     return this.fonts.filter(font => {
      //       if (this.recommendedOnly) {
      //         return this.recommendedFonts.includes(font.family) && this.selectedStyles.includes(font.category)
      //       } else {
      //         return this.selectedStyles.includes(font.category)
      //       }
      //     })
      //   } else {
      //     return this.fonts.filter(font => {
      //       if (this.recommendedOnly) {
      //         return this.recommendedFonts.includes(font.family) && this.selectedStyles.includes(font.category)
      //       } else {
      //         return this.fonts
      //         // return this.selectedStyles.includes(font.category)
      //       }
      //     })
      //   }
      // },
    },
    watch: {
      // recommendedOnly() {
      //   console.log(this.recommendedOnly)
      // }
    },
    mounted() {
      this.getFonts()
      console.log(this.fonts)
      // add all checked values to selectedStyles
      this.checkboxes.category.forEach(checkbox => {
        if (checkbox.checked && checkbox.value !== 'all') {
          this.filters.category.push(checkbox.value)
        }
      })
      console.log(this.selectedStyles)
    },
    methods: {
      checkChange(index, category) {
        // toggle the clicked checkbox
        this.checkboxes[category][index].checked = !this.checkboxes[category][index].checked

        // add to filters if checked
        if (this.checkboxes[category][index].checked) {
          this.filters.category.push(this.checkboxes[category][index].value)
        } else {
          // remove from filters if unchecked
          this.filters.category = this.filters.category.filter(filter => filter !== this.checkboxes[category][index].value)
        }

        // if index is 0 (that is "All" ) toggle all checkboxes to the same state
        // if (index === 0) {
        //   this.checkboxes[category].forEach(checkbox => checkbox.checked = this.checkboxes[category][0].checked)
        //   // if a different checkbox is clicked
        // } else {
        // if all checkboxes, except "All" are checked
        //   if (this.checkboxes.slice(1).every(checkbox => checkbox.checked)) {
        //     this.checkboxes[0].checked = true
        //     this.checkboxes[0].indeterminate = false
        //   }
        //   // if some checkboxes are checked and some are not
        //   if (this.checkboxes.some(checkbox => checkbox.checked) &&
        //     this.checkboxes.some(checkbox => !checkbox.checked)) {
        //     this.checkboxes[0].indeterminate = true
        //     this.checkboxes[0].checked = false
        //     // all other cases
        //   } else {
        //     this.checkboxes[0].indeterminate = false
        //   }
        // // }

        // // update selectedStyles based on checkbox states
        // this.selectedStyles = this.checkboxes[0].checked ?
        //   ['sans-serif', 'serif', 'display', 'handwriting', 'monospace'] :
        //   this.checkboxes
        //     .filter(checkbox => checkbox.checked && checkbox.value !== 'all')
        //     .map(checkbox => checkbox.value)
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
          .then(this.fontsLoaded = true)
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