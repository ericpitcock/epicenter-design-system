"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.withVueRouter = void 0;

var _vue = require("@storybook/vue3");

var _addons = require("@storybook/addons");

var _vueRouter = require("vue-router");

var _defaultRoutes = require("./defaultRoutes");

var withVueRouter = function withVueRouter(routesParam, beforeEach) {
  return (0, _addons.makeDecorator)({
    name: 'withVueRouter',
    parameterName: 'withVueRouter',
    wrapper: function wrapper(storyFn, context) {
      var vueRouterGlobalProperty = _vue.app.config.globalProperties.$router;
      var vueRouteGlobalProperty = _vue.app.config.globalProperties.$route;

      if (!vueRouterGlobalProperty && !vueRouteGlobalProperty) {
        /* get routes from either `routesParam` or use `defaultRoutes` */
        var routes = routesParam || _defaultRoutes.defaultRoutes;
        /* create vue router */

        var router = (0, _vueRouter.createRouter)({
          history: (0, _vueRouter.createWebHashHistory)(),
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


        _vue.app.use(router);
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

exports.withVueRouter = withVueRouter;
var _default = withVueRouter;
exports["default"] = _default;