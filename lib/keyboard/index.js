"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Keyboard = void 0;

var _table = _interopRequireDefault(require("../table"));

var _mixin = _interopRequireDefault(require("./src/mixin"));

var _tableCore = _interopRequireDefault(require("../table-core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Keyboard = {
  install: function install() {
    _tableCore.default.reg('keyboard');

    _table.default.mixins.push(_mixin.default);
  }
};
exports.Keyboard = Keyboard;
var _default = Keyboard;
exports.default = _default;