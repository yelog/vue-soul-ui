"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: 'STableLoading',
  props: {
    visible: Boolean,
    type: Number,
    text: String,
    fontStyle: Object,
    backgroundStyle: Object
  },
  render: function render(h) {
    var _this = this;

    var jumpItem = [];

    if (this.type === 2) {
      this.text.split('').forEach(function (item) {
        jumpItem.push(h('span', {
          style: _this.fontStyle
        }, [item]));
      });
    }

    return h('div', {
      class: ['s-table--loading'],
      style: Object.assign({
        display: this.visible ? 'block' : 'none'
      }, this.backgroundStyle)
    }, [this.type === 2 ? h('div', {
      class: 's-table--jump'
    }, jumpItem) : h('div', {
      class: 's-table--spinner'
    })]);
  }
};
exports.default = _default;