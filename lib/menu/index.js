"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Menu = void 0;

var _table = _interopRequireDefault(require("../table"));

var _tableCore = _interopRequireDefault(require("../table-core"));

var _panel = _interopRequireDefault(require("./src/panel"));

var _methods = _interopRequireDefault(require("./src/methods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_panel.default.install = function (Vue) {
  _tableCore.default._menu = 1;
  Object.assign(_table.default.methods, _methods.default);
  Vue.component(_panel.default.name, _panel.default);
};

var Menu = _panel.default;
exports.Menu = Menu;
var _default = _panel.default;
exports.default = _default;