"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Resize = void 0;

var _table = _interopRequireDefault(require("../table"));

var _tableCore = _interopRequireDefault(require("../table-core"));

var _mixin = _interopRequireDefault(require("./src/mixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resize = {
  install: function install() {
    _tableCore.default.reg('resize');

    _table.default.mixins.push(_mixin.default);
  }
};
exports.Resize = Resize;
var _default = Resize;
exports.default = _default;