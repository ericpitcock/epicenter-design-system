"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRoutes = void 0;
var Home = {
  template: "\n    <div>\n      <h2>Home</h2>\n      \n      <div style=\"display: flex; gap: 1em\">\n        <router-link to=\"/\">Home</router-link>\n        <router-link to=\"/about\">About</router-link>\n      </div>\n    </div>\n  "
};
var About = {
  template: "\n    <div>\n      <h2>About</h2>\n\n      <div style=\"display: flex; gap: 1em\">\n        <router-link to=\"/\">Home</router-link>\n        <router-link to=\"/about\">About</router-link>\n      </div>\n    </div>\n  "
};
var defaultRoutes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/about',
  name: 'about',
  component: About
}];
exports.defaultRoutes = defaultRoutes;