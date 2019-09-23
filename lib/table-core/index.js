"use strict";

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var SoulUI = {
  version: '1.0.2',
  t: _xeUtils.default.get,
  v: 'v2',
  use: use,
  setup: _setup.default,
  interceptor: _interceptor.default,
  renderer: _renderer.default,
  buttons: _buttons.default,
  menus: _menus.default
};
exports.SoulUI = SoulUI;
var _default = SoulUI;
exports.default = _default;