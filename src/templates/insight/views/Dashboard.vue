<template>
  <div class="dashboard">
    <div class="header header--content-header">
      <div class="content-controls content-controls--left">
        <ep-tabs :items="[{ label: 'Year to Date' }, { label: 'Historical' }]"></ep-tabs>
      </div>
      <div class="content-controls content-controls--right">
        <ep-button kind="secondary" :iconLeft="{ name: 'location' }" label="Alexandrinestad" />
        <ep-button kind="secondary" :iconLeft="{ name: 'calendar' }" label="11/01/2021 – 11/30/2021" />
      </div>
    </div>
    <div class="content-body">
      <p v-for="(n, index) of 60" :key="index" style="opacity: 0;">
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
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    // height: fit-content;
    padding: 4rem;
    // background: var(--background-2);
    // border-left: 1px solid var(--border-color);
  }
</style>