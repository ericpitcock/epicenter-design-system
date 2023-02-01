"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _withVueRouter = _interopRequireDefault(require("./withVueRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

// make it work with --isolatedModules
var _default = _withVueRouter["default"];
exports["default"] = _default;