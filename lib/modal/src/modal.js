"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _conf = _interopRequireDefault(require("../../conf"));

var _xeUtils = _interopRequireDefault(require("xe-utils"));

var _queue = _interopRequireDefault(require("./queue"));

var _tools = require("../../tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cumsumZindex = 0;
var maxZindex = 0;

function getZIndex() {
  maxZindex = _conf.default.modal.zIndex + cumsumZindex++;
  return maxZindex;
}

var _default2 = {
  name: 'VxeModal',
  props: {
    value: Boolean,
    id: String,
    type: {
      type: String,
      default: 'modal'
    },
    status: String,
    top: {
      type: [Number, String],
      default: 15
    },
    title: String,
    duration: {
      type: [Number, String],
      default: function _default() {
        return _conf.default.modal.duration;
      }
    },
    message: [String, Function],
    lockView: {
      type: Boolean,
      default: function _default() {
        return _conf.default.modal.lockView;
      }
    },
    lockScroll: Boolean,
    mask: {
      type: Boolean,
      default: function _default() {
        return _conf.default.modal.mask;
      }
    },
    maskClosable: Boolean,
    escClosable: Boolean,
    resize: Boolean,
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    width: [Number, String],
    height: [Number, String],
    zIndex: [Number, String],
    marginSize: {
      type: [Number, String],
      default: _conf.default.modal.marginSize
    },
    animat: {
      type: Boolean,
      default: function _default() {
        return _conf.default.modal.animat;
      }
    },
    slots: Object,
    events: Object
  },
  data: function data() {
    return {
      visible: false,
      contentVisible: false,
      modalTop: 0,
      modalZindex: 0,
      zoomLocat: null
    };
  },
  computed: {
    vSize: function vSize() {
      return this.size || this.$parent && (this.$parent.size || this.$parent.vSize);
    },
    isMsg: function isMsg() {
      return this.type === 'message';
    }
  },
  watch: {
    value: function value(visible) {
      this[visible ? 'open' : 'close']();
    }
  },
  created: function created() {
    if (this.value) {
      this.open();
    }

    this.modalZindex = this.zIndex || getZIndex();
  },
  mounted: function mounted() {
    var width = this.width,
        height = this.height;
    var modalBoxElem = this.getBox();
    Object.assign(modalBoxElem.style, {
      width: width ? isNaN(width) ? width : "".concat(width, "px") : null,
      height: height ? isNaN(height) ? height : "".concat(height, "px") : null
    });

    if (this.escClosable) {
      _tools.GlobalEvent.on(this, 'keydown', this.handleGlobalKeydownEvent);
    }

    document.body.appendChild(this.$el);
  },
  beforeDestroy: function beforeDestroy() {
    _tools.GlobalEvent.off(this, 'keydown');

    this.removeMsgQueue();
    this.$el.parentNode.removeChild(this.$el);
  },
  render: function render(h) {
    var _ref,
        _this = this;

    var $scopedSlots = this.$scopedSlots,
        _this$slots = this.slots,
        slots = _this$slots === void 0 ? {} : _this$slots,
        vSize = this.vSize,
        type = this.type,
        resize = this.resize,
        animat = this.animat,
        status = this.status,
        showHeader = this.showHeader,
        showFooter = this.showFooter,
        zoomLocat = this.zoomLocat,
        modalTop = this.modalTop,
        contentVisible = this.contentVisible,
        visible = this.visible,
        title = this.title,
        message = this.message,
        lockScroll = this.lockScroll,
        lockView = this.lockView,
        mask = this.mask,
        isMsg = this.isMsg;
    var defaultSlot = $scopedSlots.default || slots.default;
    var footerSlot = $scopedSlots.footer || slots.footer;
    return h('div', {
      class: ['s-modal--wrapper', "type--".concat(type), (_ref = {}, _defineProperty(_ref, "size--".concat(vSize), vSize), _defineProperty(_ref, "status--".concat(status), status), _defineProperty(_ref, 'is--animat', animat), _defineProperty(_ref, 'lock--scroll', lockScroll), _defineProperty(_ref, 'lock--view', lockView), _defineProperty(_ref, 'is--mask', mask), _defineProperty(_ref, 'is--visible', contentVisible), _defineProperty(_ref, "active", visible), _ref)],
      style: {
        zIndex: this.modalZindex,
        top: modalTop ? "".concat(modalTop, "px") : null
      },
      on: {
        click: this.selfClickEvent
      }
    }, [h('div', {
      class: 's-modal--box',
      on: {
        mousedown: this.updateZindex
      },
      ref: 'modalBox'
    }, [showHeader ? h('div', {
      class: 's-modal--header',
      on: {
        mousedown: this.mousedownEvent
      }
    }, [h('span', {
      class: 's-modal--title'
    }, title ? _tools.UtilTools.getFuncText(title) : _conf.default.i18n('s.alert.title')), resize ? h('i', {
      class: ['s-modal--zoom-btn', 'trigger--btn', zoomLocat ? _conf.default.icon.zoomOut : _conf.default.icon.zoomIn],
      on: {
        click: this.zoomInEvent
      }
    }) : null, h('i', {
      class: ['s-modal--close-btn', 'trigger--btn', _conf.default.icon.modalClose],
      on: {
        click: this.closeEvent
      }
    })]) : null, h('div', {
      class: 's-modal--body'
    }, [status ? h('div', {
      class: 's-modal--status-wrapper'
    }, [h('i', {
      class: ['s-modal--status-icon', _conf.default.icon["modal".concat(status.replace(/\b(\w)/, function (word) {
        return word.toUpperCase();
      }))]]
    })]) : null, h('div', {
      class: 's-modal--content'
    }, defaultSlot ? defaultSlot.call(this, {
      $modal: this
    }, h) : _xeUtils.default.isFunction(message) ? message.call(this, h) : message)]), showFooter ? h('div', {
      class: 's-modal--footer'
    }, footerSlot ? footerSlot.call(this, {
      $modal: this
    }, h) : [type === 'confirm' ? h('s-button', {
      on: {
        click: this.cancelEvent
      }
    }, _conf.default.i18n('s.button.cancel')) : null, h('s-button', {
      props: {
        type: 'primary'
      },
      on: {
        click: this.confirmEvent
      }
    }, _conf.default.i18n('s.button.confirm'))]) : null, !isMsg && resize ? h('span', {
      class: 's-modal--resize'
    }, ['wl', 'wr', 'swst', 'sest', 'st', 'swlb', 'selb', 'sb'].map(function (type) {
      return h('span', {
        class: "".concat(type, "-resize"),
        attrs: {
          'data-type': type
        },
        on: {
          mousedown: _this.dragEvent
        }
      });
    })) : null])]);
  },
  methods: {
    selfClickEvent: function selfClickEvent(evnt) {
      if (this.maskClosable && evnt.target === this.$el) {
        var type = 'mask';
        this.close(type);
      }
    },
    updateZindex: function updateZindex() {
      if (this.modalZindex < maxZindex) {
        this.modalZindex = getZIndex();
      }
    },
    closeEvent: function closeEvent(evnt) {
      var type = 'close';
      this.$emit(type, {
        type: type,
        $modal: this
      }, evnt);
      this.close(type);
    },
    confirmEvent: function confirmEvent(evnt) {
      var type = 'confirm';
      this.$emit(type, {
        type: type,
        $modal: this
      }, evnt);
      this.close(type);
    },
    cancelEvent: function cancelEvent(evnt) {
      var type = 'cancel';
      this.$emit(type, {
        type: type,
        $modal: this
      }, evnt);
      this.close(type);
    },
    open: function open() {
      var _this2 = this;

      var $listeners = this.$listeners,
          _this$events = this.events,
          events = _this$events === void 0 ? {} : _this$events,
          duration = this.duration,
          visible = this.visible,
          isMsg = this.isMsg;

      if (!visible) {
        var params = {
          type: 'show',
          $modal: this
        };
        this.visible = true;
        this.contentVisible = false;
        this.updateZindex();

        if (!events.show) {
          this.$emit('input', true);
          this.$emit('show', params);
        }

        setTimeout(function () {
          _this2.contentVisible = true;

          if (!$listeners.show && events.show) {
            _this2.$nextTick(function () {
              events.show.call(_this2, params);
            });
          }
        }, 10);

        if (isMsg) {
          this.addMsgQueue();
          setTimeout(this.close, _xeUtils.default.toNumber(duration));
        } else {
          this.$nextTick(function () {
            var marginSize = _this2.marginSize;

            var modalBoxElem = _this2.getBox();

            var clientVisibleWidth = document.documentElement.clientWidth || document.body.clientWidth;
            var clientVisibleHeight = document.documentElement.clientHeight || document.body.clientHeight;
            modalBoxElem.style.left = "".concat(clientVisibleWidth / 2 - modalBoxElem.offsetWidth / 2, "px");

            if (modalBoxElem.offsetHeight + modalBoxElem.offsetTop + marginSize > clientVisibleHeight) {
              modalBoxElem.style.top = "".concat(marginSize, "px");
            }
          });
        }
      }
    },
    addMsgQueue: function addMsgQueue() {
      if (_queue.default.indexOf(this) === -1) {
        _queue.default.push(this);
      }

      this.updateStyle();
    },
    removeMsgQueue: function removeMsgQueue() {
      var _this3 = this;

      if (_queue.default.indexOf(this) > -1) {
        _xeUtils.default.remove(_queue.default, function (comp) {
          return comp === _this3;
        });
      }

      this.updateStyle();
    },
    updateStyle: function updateStyle() {
      this.$nextTick(function () {
        var offsetTop = 0;

        _queue.default.forEach(function (comp) {
          offsetTop += _xeUtils.default.toNumber(comp.top);
          comp.modalTop = offsetTop;
          offsetTop += comp.$refs.modalBox.clientHeight;
        });
      });
    },
    close: function close(type) {
      var _this4 = this;

      var _this$events2 = this.events,
          events = _this$events2 === void 0 ? {} : _this$events2,
          visible = this.visible,
          isMsg = this.isMsg;

      if (visible) {
        if (isMsg) {
          this.removeMsgQueue();
        }

        this.contentVisible = false;
        setTimeout(function () {
          _this4.visible = false;
          var params = {
            type: type,
            $modal: _this4
          };

          if (events.hide) {
            events.hide.call(_this4, params);
          } else {
            _this4.$emit('input', false);

            _this4.$emit('hide', params);
          }
        }, 200);
      }
    },
    handleGlobalKeydownEvent: function handleGlobalKeydownEvent(evnt) {
      if (evnt.keyCode === 27) {
        this.close();
      }
    },
    getBox: function getBox() {
      return this.$refs.modalBox;
    },
    zoomInEvent: function zoomInEvent(evnt) {
      var $listeners = this.$listeners,
          marginSize = this.marginSize,
          zoomLocat = this.zoomLocat,
          _this$events3 = this.events,
          events = _this$events3 === void 0 ? {} : _this$events3;

      var _DomTools$getDomNode = _tools.DomTools.getDomNode(),
          visibleHeight = _DomTools$getDomNode.visibleHeight,
          visibleWidth = _DomTools$getDomNode.visibleWidth;

      var modalBoxElem = this.getBox();
      var type = 'min';

      if (zoomLocat) {
        this.zoomLocat = null;
        Object.assign(modalBoxElem.style, {
          top: "".concat(zoomLocat.top, "px"),
          left: "".concat(zoomLocat.left, "px"),
          width: "".concat(zoomLocat.width, "px"),
          height: "".concat(zoomLocat.height, "px")
        });
      } else {
        type = 'max';
        this.zoomLocat = {
          top: modalBoxElem.offsetTop,
          left: modalBoxElem.offsetLeft,
          width: modalBoxElem.clientWidth,
          height: modalBoxElem.clientHeight
        };
        Object.assign(modalBoxElem.style, {
          top: "".concat(marginSize, "px"),
          left: "".concat(marginSize, "px"),
          width: "".concat(visibleWidth - marginSize * 2, "px"),
          height: "".concat(visibleHeight - marginSize * 2, "px")
        });
      }

      var params = {
        type: type,
        $modal: this
      };

      if ($listeners.zoom) {
        this.$emit('zoom', params, evnt);
      } else if (events.zoom) {
        events.zoom.call(this, params, evnt);
      }
    },
    mousedownEvent: function mousedownEvent(evnt) {
      var _this5 = this;

      var marginSize = this.marginSize;
      var modalBoxElem = this.getBox();

      if (evnt.button === 0 && !_tools.DomTools.getEventTargetNode(evnt, modalBoxElem, 'trigger--btn').flag) {
        evnt.preventDefault();
        var demMousemove = document.onmousemove;
        var demMouseup = document.onmouseup;
        var disX = evnt.clientX - modalBoxElem.offsetLeft;
        var disY = evnt.clientY - modalBoxElem.offsetTop;

        var _DomTools$getDomNode2 = _tools.DomTools.getDomNode(),
            visibleHeight = _DomTools$getDomNode2.visibleHeight,
            visibleWidth = _DomTools$getDomNode2.visibleWidth;

        document.onmousemove = function (evnt) {
          evnt.preventDefault();
          var offsetWidth = modalBoxElem.offsetWidth;
          var offsetHeight = modalBoxElem.offsetHeight;
          var minX = marginSize;
          var maxX = visibleWidth - offsetWidth - marginSize;
          var minY = marginSize;
          var maxY = visibleHeight - offsetHeight - marginSize;
          var left = evnt.clientX - disX;
          var top = evnt.clientY - disY;

          if (left > maxX) {
            left = maxX;
          }

          if (left < minX) {
            left = minX;
          }

          if (top > maxY) {
            top = maxY;
          }

          if (top < minY) {
            top = minY;
          }

          modalBoxElem.style.left = "".concat(left, "px");
          modalBoxElem.style.top = "".concat(top, "px");
          modalBoxElem.className = modalBoxElem.className.replace(/\s?is--drag/, '') + " is--drag";
        };

        document.onmouseup = function (evnt) {
          document.onmousemove = demMousemove;
          document.onmouseup = demMouseup;

          _this5.$nextTick(function () {
            modalBoxElem.className = modalBoxElem.className.replace(/\s?is--drag/, '');
          });
        };
      }
    },
    dragEvent: function dragEvent(evnt) {
      var _this6 = this;

      evnt.preventDefault();
      var $listeners = this.$listeners,
          marginSize = this.marginSize,
          _this$events4 = this.events,
          events = _this$events4 === void 0 ? {} : _this$events4;

      var _DomTools$getDomNode3 = _tools.DomTools.getDomNode(),
          visibleHeight = _DomTools$getDomNode3.visibleHeight,
          visibleWidth = _DomTools$getDomNode3.visibleWidth;

      var type = evnt.target.dataset.type;
      var minWidth = 340;
      var maxWidth = visibleWidth - 20;
      var minHeight = 200;
      var maxHeight = visibleHeight - 20;
      var modalBoxElem = this.getBox();
      var demMousemove = document.onmousemove;
      var demMouseup = document.onmouseup;
      var clientWidth = modalBoxElem.clientWidth;
      var clientHeight = modalBoxElem.clientHeight;
      var disX = evnt.clientX;
      var disY = evnt.clientY;
      var offsetTop = modalBoxElem.offsetTop;
      var offsetLeft = modalBoxElem.offsetLeft;
      var params = {
        type: 'resize',
        $modal: this
      };

      document.onmousemove = function (evnt) {
        evnt.preventDefault();
        var dragLeft;
        var dragTop;
        var width;
        var height;

        switch (type) {
          case 'wl':
            dragLeft = disX - evnt.clientX;
            width = dragLeft + clientWidth;

            if (offsetLeft - dragLeft > marginSize) {
              if (width > minWidth) {
                modalBoxElem.style.width = "".concat(width < maxWidth ? width : maxWidth, "px");
                modalBoxElem.style.left = "".concat(offsetLeft - dragLeft, "px");
              }
            }

            break;

          case 'swst':
            dragLeft = disX - evnt.clientX;
            dragTop = disY - evnt.clientY;
            width = dragLeft + clientWidth;
            height = dragTop + clientHeight;

            if (offsetLeft - dragLeft > marginSize) {
              if (width > minWidth) {
                modalBoxElem.style.width = "".concat(width < maxWidth ? width : maxWidth, "px");
                modalBoxElem.style.left = "".concat(offsetLeft - dragLeft, "px");
              }
            }

            if (offsetTop - dragTop > marginSize) {
              if (height > minHeight) {
                modalBoxElem.style.height = "".concat(height < maxHeight ? height : maxHeight, "px");
                modalBoxElem.style.top = "".concat(offsetTop - dragTop, "px");
              }
            }

            break;

          case 'swlb':
            dragLeft = disX - evnt.clientX;
            dragTop = evnt.clientY - disY;
            width = dragLeft + clientWidth;
            height = dragTop + clientHeight;

            if (offsetLeft - dragLeft > marginSize) {
              if (width > minWidth) {
                modalBoxElem.style.width = "".concat(width < maxWidth ? width : maxWidth, "px");
                modalBoxElem.style.left = "".concat(offsetLeft - dragLeft, "px");
              }
            }

            if (offsetTop + height + marginSize < visibleHeight) {
              if (height > minHeight) {
                modalBoxElem.style.height = "".concat(height < maxHeight ? height : maxHeight, "px");
              }
            }

            break;

          case 'st':
            dragTop = disY - evnt.clientY;
            height = clientHeight + dragTop;

            if (offsetTop - dragTop > marginSize) {
              if (height > minHeight) {
                modalBoxElem.style.height = "".concat(height < maxHeight ? height : maxHeight, "px");
                modalBoxElem.style.top = "".concat(offsetTop - dragTop, "px");
              }
            }

            break;

          case 'wr':
            dragLeft = evnt.clientX - disX;
            width = dragLeft + clientWidth;

            if (offsetLeft + width + marginSize < visibleWidth) {
              if (width > minWidth) {
                modalBoxElem.style.width = "".concat(width < maxWidth ? width : maxWidth, "px");
              }
            }

            break;

          case 'sest':
            dragLeft = evnt.clientX - disX;
            dragTop = disY - evnt.clientY;
            width = dragLeft + clientWidth;
            height = dragTop + clientHeight;

            if (offsetLeft + width + marginSize < visibleWidth) {
              if (width > minWidth) {
                modalBoxElem.style.width = "".concat(width < maxWidth ? width : maxWidth, "px");
              }
            }

            if (offsetTop - dragTop > marginSize) {
              if (height > minHeight) {
                modalBoxElem.style.height = "".concat(height < maxHeight ? height : maxHeight, "px");
                modalBoxElem.style.top = "".concat(offsetTop - dragTop, "px");
              }
            }

            break;

          case 'selb':
            dragLeft = evnt.clientX - disX;
            dragTop = evnt.clientY - disY;
            width = dragLeft + clientWidth;
            height = dragTop + clientHeight;

            if (offsetLeft + width + marginSize < visibleWidth) {
              if (width > minWidth) {
                modalBoxElem.style.width = "".concat(width < maxWidth ? width : maxWidth, "px");
              }
            }

            if (offsetTop + height + marginSize < visibleHeight) {
              if (height > minHeight) {
                modalBoxElem.style.height = "".concat(height < maxHeight ? height : maxHeight, "px");
              }
            }

            break;

          case 'sb':
            dragTop = evnt.clientY - disY;
            height = dragTop + clientHeight;

            if (offsetTop + height + marginSize < visibleHeight) {
              if (height > minHeight) {
                modalBoxElem.style.height = "".concat(height < maxHeight ? height : maxHeight, "px");
              }
            }

            break;
        }

        modalBoxElem.className = modalBoxElem.className.replace(/\s?is--drag/, '') + " is--drag";

        if ($listeners.zoom) {
          _this6.$emit('zoom', params, evnt);
        } else if (events.zoom) {
          events.zoom.call(_this6, params, evnt);
        }
      };

      document.onmouseup = function (evnt) {
        document.onmousemove = demMousemove;
        document.onmouseup = demMouseup;
        setTimeout(function () {
          modalBoxElem.className = modalBoxElem.className.replace(/\s?is--drag/, '');
        }, 50);
      };
    }
  }
};
exports.default = _default2;