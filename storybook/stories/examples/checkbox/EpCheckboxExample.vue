<template>
  <div class="google-fonts">
    <div class="font" v-for="font in filteredFonts" :key="font.family">
      <div class="font__name" :style="{ fontFamily: font.family }">{{ font.family }}—{{ font.category }}</div>
      <!-- <div class="font__preview" :style="{ fontFamily: font.family }">The quick brown fox jumps over the lazy dog</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleFonts',
  props: {
    filter: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      fonts: []
    }
  },
  computed: {
    filteredFonts() {
      return this.fonts.filter(font => this.filter.includes(font.category))
    }
  },
  methods: {
    async getFonts() {
      const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC4LPtjlhXImnuIBnGbYCgwRLYoXDZ2i8c')
        .then(response => response.json()).then(data => this.fonts = data.items)
    }
  },
  mounted() {
    this.getFonts()
  }
}
</script>