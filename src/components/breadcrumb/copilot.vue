<!-- vue options api breadcrumb component that uses vue-router for dynamic breadcrumbs -->
<template>
  <div class="breadcrumb">
    <router-link :to="initialRoute.to">{{ initialRoute.text }}</router-link>
    <span v-for="(item, index) in breadcrumbs" :key="index">
      <span class="divider">/</span>
      <router-link :to="item.to" v-if="item.to">{{ item.text }}</router-link>
      <span v-else>{{ item.text }}</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'CpBreadcrumb',
    props: {
      // items: {
      //   type: Array,
      //   default: () => [],
      // },
      initialRoute: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        breadcrumbs: [],
      };
    },
    watch: {
      $route: {
        handler() {
          // console.log('cp-breadcrumb route changed');
          // console.log(this.$route);
          // this.breadcrumbs = [];
          this.setBreadcrumbs(this.$route);
          console.log('this.breadcrumbs', this.breadcrumbs);
        },
        immediate: true,
      },
    },
    methods: {
      // setBreadcrumbs(route) {
      //   console.log('setBreadcrumbs', route);
      //   if (route.meta && route.meta.breadcrumb) {
      //     this.breadcrumbs.unshift({
      //       to: route.meta.breadcrumb.to,
      //       text: route.meta.breadcrumb.text,
      //     });
      //   }
      //   if (route.matched.length > 1) {
      //     this.setBreadcrumbs(route.matched[route.matched.length - 2]);
      //   }
      //   // console.log('this.breadcrumbs', this.breadcrumbs);
      // },
      // update the above method considering that route.meta.breadcrumb may be a function
      setBreadcrumbs(route) {
        console.log('setBreadcrumbs', route);
        if (route.meta && route.meta.breadcrumb) {
          const breadcrumb = typeof route.meta.breadcrumb === 'function' 
            ? route.meta.breadcrumb(this.$route) 
            : route.meta.breadcrumb || route.name
          this.breadcrumbs.unshift({
            to: breadcrumb.to,
            text: breadcrumb.text,
          });
        }
        if (route.matched.length > 1) {
          this.setBreadcrumbs(route.matched[route.matched.length - 2]);
        }
        // console.log('this.breadcrumbs', this.breadcrumbs);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>