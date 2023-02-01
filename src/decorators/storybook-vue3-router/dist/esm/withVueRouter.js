import { app } from "@storybook/vue3";
import { makeDecorator } from "@storybook/addons";
import { createRouter, createWebHashHistory } from "vue-router";
import { defaultRoutes } from './defaultRoutes';
export var withVueRouter = function withVueRouter(routesParam, beforeEach) {
  return makeDecorator({
    name: 'withVueRouter',
    parameterName: 'withVueRouter',
    wrapper: function wrapper(storyFn, context) {
      var vueRouterGlobalProperty = app.config.globalProperties.$router;
      var vueRouteGlobalProperty = app.config.globalProperties.$route;

      if (!vueRouterGlobalProperty && !vueRouteGlobalProperty) {
        /* get routes from either `routesParam` or use `defaultRoutes` */
        var routes = routesParam || defaultRoutes;
        /* create vue router */

        var router = createRouter({
          history: createWebHashHistory(),
          routes: routes
        });
        /* check if there is a `beforeEach` function passed into decorator function */

        if (typeof beforeEach === 'function') {
          /* fire `beforeEach` param on `router.beforeEach` and pass `to` and `from` params to the function */
          router.beforeEach(function (to, from) {
            return beforeEach(to, from);
          });
        }
        /* tell storybook to use vue router */


        app.use(router);
        /* if the route route is not `/` */

        if (routes[0].path !== '/') {
          /* update router to use the first path in routes defined */
          router.replace(routes[0].path);
        }
      }
      /* return the storybook story */


      return storyFn(context);
    }
  });
};
export default withVueRouter;