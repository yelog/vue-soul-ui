"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Keyboard = void 0;

var _table = _interopRequireDefault(require("../table"));

var _methods = _interopRequireDefault(require("./src/methods"));

var _tableCore = _interopRequireDefault(require("../table-core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Keyboard = {
  install: function install() {
    _tableCore.default._keyboard = 1;
    Object.assign(_table.default.methods, _methods.default);
  }
};
exports.Keyboard = Keyboard;
var _default = Keyboard;
exports.default = _default;