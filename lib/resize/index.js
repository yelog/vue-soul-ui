"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Resize = void 0;

var _table = _interopRequireDefault(require("../table"));

var _tableCore = _interopRequireDefault(require("../table-core"));

var _methods = _interopRequireDefault(require("./src/methods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resize = {
  install: function install() {
    _tableCore.default._resize = 1;
    Object.assign(_table.default.methods, _methods.default);
  }
};
exports.Resize = Resize;
var _default = Resize;
exports.default = _default;