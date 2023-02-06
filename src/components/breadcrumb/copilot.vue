<!-- vue options api breadcrumb component that uses vue-router for dynamic breadcrumbs -->
<template>
  <div class="breadcrumb">
    <router-link :to="{ name: 'Years' }">Albums of the year</router-link>
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
      items: {
        type: Array,
        default: () => [],
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
          console.log('cp-breadcrumb route changed');
          console.log(this.$route);
          this.breadcrumbs = [];
          this.setBreadcrumbs(this.$route);
        },
        immediate: true,
      },
    },
    methods: {
      setBreadcrumbs(route) {
        if (route.meta && route.meta.breadcrumb) {
          this.breadcrumbs.unshift({
            to: route.meta.breadcrumb.to,
            text: route.meta.breadcrumb.text,
          });
        }
        if (route.matched.length > 1) {
          this.setBreadcrumbs(route.matched[route.matched.length - 2]);
        }
        console.log('this.breadcrumbs', this.breadcrumbs);
      },
    },
  };
</script>