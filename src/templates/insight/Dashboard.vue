<template>
  <div class="content-container">
    <div class="header header--content-header">
      <div class="content-controls content-controls--left">
        <ep-tabs :items="[{ label: 'Year to Date' }, { label: 'Historical' }]"></ep-tabs>
      </div>
      <div class="content-controls content-controls--right">
        <ep-button kind="secondary" :iconLeft="{ name: 'location' }" label="Alexandrinestad" />
        <ep-button kind="secondary" :iconLeft="{ name: 'calendar' }" label="11/01/2021 – 11/30/2021" />
        <ep-button v-if="!layoutOption" kind="ghost" :iconLeft="{ name: 'full-width' }" @click="toggleContentWidth" />
      </div>
    </div>
    <div class="content-body">
      <p v-for="(n, index) of 20" :key="index" style="padding-right: 25%;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
        porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
        faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
        volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
        sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna,
        et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
        volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
        sed.
      </p>
    </div>
    <div class="footer">Content footer</div>
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpTabs from '@/components/tabs/EpTabs'

  export default {
    name: 'Dashboard',
    components: {
      EpButton,
      EpTabs
    },
    data() {
      return {
        layoutOption: false
      }
    },
    methods: {
      toggleContentWidth() {
        this.layoutOption = !this.layoutOption
      }
    }
  }
</script>