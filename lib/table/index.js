"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Table = void 0;

var _table = _interopRequireDefault(require("./src/table"));

var _tableCore = _interopRequireDefault(require("../table-core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = _table.default;
exports.Table = Table;

_table.default.install = function (Vue) {
  _tableCore.default.Vue = Vue;
  _tableCore.default.Table = Table;
  Vue.component(_table.default.name, _table.default);
};

var _default = _table.default;
exports.default = _default;