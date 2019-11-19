"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  SoulUI: true
};
exports.default = exports.SoulUI = void 0;

var _xeUtils = _interopRequireDefault(require("xe-utils/methods/xe-utils"));

var _interceptor = _interopRequireWildcard(require("./src/interceptor"));

Object.keys(_interceptor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interceptor[key];
    }
  });
});

var _renderer = _interopRequireWildcard(require("./src/renderer"));

Object.keys(_renderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderer[key];
    }
  });
});

var _buttons = _interopRequireWildcard(require("./src/buttons"));

Object.keys(_buttons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _buttons[key];
    }
  });
});

var _menus = _interopRequireWildcard(require("./src/menus"));

Object.keys(_menus).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _menus[key];
    }
  });
});

var _setup = _interopRequireDefault(require("./src/setup"));

var _conf = _interopRequireDefault(require("../conf"));

var _tools = require("../tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var installedPlugins = [];

function use(Plugin, options) {
  if (Plugin && Plugin.install) {
    if (installedPlugins.indexOf(Plugin) === -1) {
      Plugin.install(SoulUI, options);
      installedPlugins.push(Plugin);
    }
  }

  return SoulUI;
}
/**
 * 检测模块的安装顺序是否正确
 */


function reg(key) {
  if (SoulUI.Table) {
    _tools.UtilTools.error('s.error.useErr', [key]);
  }

  SoulUI["_".concat(key)] = 1;
}

var SoulUI = {
  version: '1.0.2',
  t: function t(key) {
    return _conf.default.i18n(key);
  },
  v: 'v2',
  reg: reg,
  use: use,
  types: {},
  setup: _setup.default,
  interceptor: _interceptor.default,
  renderer: _renderer.default,
  buttons: _buttons.default,
  menus: _menus.default
};
/**
 * 获取当前的 zIndex
 */

exports.SoulUI = SoulUI;
Object.defineProperty(SoulUI, 'zIndex', {
  get: _tools.UtilTools.getLastZIndex
});
/**
 * 获取下一个 zIndex
 */

Object.defineProperty(SoulUI, 'nextZIndex', {
  get: _tools.UtilTools.nextZIndex
});
/**
 * 获取所有导出类型
 */

Object.defineProperty(SoulUI, 'exportTypes', {
  get: function get() {
    return Object.keys(SoulUI.types);
  }
});
/**
 * 获取所有导入类型
 */

Object.defineProperty(SoulUI, 'importTypes', {
  get: function get() {
    var rest = [];

    _xeUtils.default.each(SoulUI.types, function (flag, type) {
      if (flag) {
        rest.push(type);
      }
    });

    return rest;
  }
});
var _default = SoulUI;
exports.default = _default;