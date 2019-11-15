"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Edit = void 0;

var _table = _interopRequireDefault(require("../table"));

var _mixin = _interopRequireDefault(require("./src/mixin"));

var _tableCore = _interopRequireDefault(require("../table-core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Edit = {
  install: function install() {
    _tableCore.default.reg('edit');

    _table.default.mixins.push(_mixin.default);
  }
};
exports.Edit = Edit;
var _default = Edit;
exports.default = _default;