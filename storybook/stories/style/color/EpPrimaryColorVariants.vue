<template>
  <div class="primary-color-variants">
    <color-chips :colors="getPropertyValues('up15')" />
    <color-chips :colors="getPropertyValues('up10')" />
    <color-chips :colors="getPropertyValues('up5')" />
    <color-chips :colors="getPropertyValues('base')" />
    <color-chips :colors="getPropertyValues('down5')" />
    <color-chips :colors="getPropertyValues('down10')" />
    <color-chips :colors="getPropertyValues('down15')" />
  </div>
</template>

<script>
  import ColorChips from './ColorChips.vue'

  export default {
    name: 'EpPrimaryColorVariants',
    components: {
      ColorChips
    },
    data() {
      return {
        variantKeys: {
          up15: [
            '--primary-color-up-15-100',
            '--primary-color-up-15-200',
            '--primary-color-up-15-300',
            '--primary-color-up-15-400',
            '--primary-color-up-15-500',
            '--primary-color-up-15-base',
            '--primary-color-up-15-600',
            '--primary-color-up-15-700',
            '--primary-color-up-15-800',
            '--primary-color-up-15-900',
            '--primary-color-up-15-1000',
          ],
          up10: [
            '--primary-color-up-10-100',
            '--primary-color-up-10-200',
            '--primary-color-up-10-300',
            '--primary-color-up-10-400',
            '--primary-color-up-10-500',
            '--primary-color-up-10-base',
            '--primary-color-up-10-600',
            '--primary-color-up-10-700',
            '--primary-color-up-10-800',
            '--primary-color-up-10-900',
            '--primary-color-up-10-1000',
          ],
          up5: [
            '--primary-color-up-5-100',
            '--primary-color-up-5-200',
            '--primary-color-up-5-300',
            '--primary-color-up-5-400',
            '--primary-color-up-5-500',
            '--primary-color-up-5-base',
            '--primary-color-up-5-600',
            '--primary-color-up-5-700',
            '--primary-color-up-5-800',
            '--primary-color-up-5-900',
            '--primary-color-up-5-1000',
          ],
          base: [
            '--primary-color-100',
            '--primary-color-200',
            '--primary-color-300',
            '--primary-color-400',
            '--primary-color-500',
            '--primary-color-base',
            '--primary-color-600',
            '--primary-color-700',
            '--primary-color-800',
            '--primary-color-900',
            '--primary-color-1000',
          ],
          down5: [
            '--primary-color-down-5-100',
            '--primary-color-down-5-200',
            '--primary-color-down-5-300',
            '--primary-color-down-5-400',
            '--primary-color-down-5-500',
            '--primary-color-down-5-base',
            '--primary-color-down-5-600',
            '--primary-color-down-5-700',
            '--primary-color-down-5-800',
            '--primary-color-down-5-900',
            '--primary-color-down-5-1000',
          ],
          down10: [
            '--primary-color-down-10-100',
            '--primary-color-down-10-200',
            '--primary-color-down-10-300',
            '--primary-color-down-10-400',
            '--primary-color-down-10-500',
            '--primary-color-down-10-base',
            '--primary-color-down-10-600',
            '--primary-color-down-10-700',
            '--primary-color-down-10-800',
            '--primary-color-down-10-900',
            '--primary-color-down-10-1000',
          ],
          down15: [
            '--primary-color-down-15-100',
            '--primary-color-down-15-200',
            '--primary-color-down-15-300',
            '--primary-color-down-15-400',
            '--primary-color-down-15-500',
            '--primary-color-down-15-base',
            '--primary-color-down-15-600',
            '--primary-color-down-15-700',
            '--primary-color-down-15-800',
            '--primary-color-down-15-900',
            '--primary-color-down-15-1000',
          ],
        }
      }
    },
    // computed: {
    //   variants() {
    //     return this.variantKeys.map(variant => {
    //       return {
    //         name: variant,
    //         value: getComputedStyle(document.documentElement).getPropertyValue(variant)
    //       }
    //     })
    //   },
    // }
    methods: {
      getPropertyValues(variant) {
        // take in variantKeys.up15, for example, and return an object with the name and value
        return this.variantKeys[variant].map(variant => {
          return {
            name: variant,
            value: getComputedStyle(document.documentElement).getPropertyValue(variant)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .primary-color-variants {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
  }
</style>