"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xeUtils = _interopRequireDefault(require("xe-utils"));

var _conf = _interopRequireDefault(require("../../conf"));

var _tools = require("../../tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  name: 'SButton',
  props: {
    type: String,
    size: String,
    disabled: Boolean
  },
  computed: {
    vSize: function vSize() {
      return this.size || this.$parent.size || this.$parent.vSize;
    }
  },
  render: function render(h) {
    var _ref2,
        _this = this,
        _ref3;

    var $scopedSlots = this.$scopedSlots,
        $listeners = this.$listeners,
        type = this.type,
        vSize = this.vSize,
        disabled = this.disabled;
    var isText = type === 'text';
    return $scopedSlots.dropdowns ? h('div', {
      class: ['s-button--dropdown', _defineProperty({}, "size--".concat(vSize), vSize)]
    }, [h('button', {
      class: ['s-button', "type--".concat(isText ? type : 'button'), (_ref2 = {}, _defineProperty(_ref2, "size--".concat(vSize), vSize), _defineProperty(_ref2, "theme--".concat(type), type && !isText), _ref2)],
      attrs: {
        disabled: disabled
      },
      on: Object.assign({
        mouseenter: this.mouseenterEvent,
        mouseleave: this.mouseleaveEvent
      }, _xeUtils.default.objectMap($listeners, function (cb, type) {
        return function (evnt) {
          return _this.$emit(type, evnt);
        };
      }))
    }, [h('span', $scopedSlots.default.call(this)), h('i', {
      class: "s-button--dropdown-arrow ".concat(_conf.default.icon.caretBottom)
    })]), h('div', {
      class: 's-button--dropdown-wrapper',
      on: {
        click: this.clickDropdownEvent,
        mouseenter: this.mouseenterEvent,
        mouseleave: this.mouseleaveEvent
      }
    }, $scopedSlots.dropdowns.call(this))]) : h('button', {
      class: ['s-button', "type--".concat(isText ? type : 'button'), (_ref3 = {}, _defineProperty(_ref3, "size--".concat(vSize), vSize), _defineProperty(_ref3, "theme--".concat(type), type && !isText), _ref3)],
      attrs: {
        disabled: disabled
      },
      on: _xeUtils.default.objectMap($listeners, function (cb, type) {
        return function (evnt) {
          return _this.$emit(type, evnt);
        };
      })
    }, $scopedSlots.default.call(this));
  },
  methods: {
    clickDropdownEvent: function clickDropdownEvent(evnt) {
      var dropdownElem = evnt.currentTarget;
      var wrapperElem = dropdownElem.parentNode;

      if (_tools.DomTools.getEventTargetNode(evnt, dropdownElem, 's-button').flag) {
        wrapperElem.dataset.active = 'N';

        _tools.DomTools.removeClass(wrapperElem, 'is--active');

        _tools.UtilTools.emitEvent(this, 'dropdown-click', [{
          $grid: this
        }, evnt]);
      }
    },
    mouseenterEvent: function mouseenterEvent(evnt) {
      var dropdownElem = evnt.currentTarget;
      var wrapperElem = dropdownElem.parentNode;
      wrapperElem.dataset.active = 'Y';

      _tools.DomTools.addClass(wrapperElem, 'is--active');
    },
    mouseleaveEvent: function mouseleaveEvent(evnt) {
      var dropdownElem = evnt.currentTarget;
      var wrapperElem = dropdownElem.parentNode;
      wrapperElem.dataset.active = 'N';
      setTimeout(function () {
        if (wrapperElem.dataset.active !== 'Y') {
          _tools.DomTools.removeClass(wrapperElem, 'is--active');
        }
      }, 300);
    }
  }
};
exports.default = _default;