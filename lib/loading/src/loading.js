"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: 'STableLoading',
  props: {
    visible: Boolean
  },
  render: function render(h) {
    return h('div', {
      class: ['s-table--loading'],
      style: {
        display: this.visible ? 'block' : 'none'
      }
    }, [h('div', {
      class: 's-table--spinner'
    })]);
  }
};
exports.default = _default;