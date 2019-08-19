"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Renderer = void 0;

var _xeUtils = _interopRequireDefault(require("xe-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getAttrs(_ref) {
  var name = _ref.name,
      attrs = _ref.attrs;

  if (name === 'input') {
    attrs = Object.assign({
      type: 'text'
    }, attrs);
  }

  return attrs;
}
/**
 * 内置渲染器
 * 支持原生的 input、textarea、select
 */


function defaultCellRender(h, renderOpts, params) {
  var column = params.column;
  var name = renderOpts.name;
  var model = column.model;
  var attrs = getAttrs(renderOpts);
  return [h(name, {
    class: "s-default-".concat(name),
    attrs: attrs,
    domProps: {
      value: model.value
    },
    on: getEvents(renderOpts, params)
  })];
}

function getEvents(renderOpts, params) {
  var name = renderOpts.name,
      events = renderOpts.events;
  var $table = params.$table,
      column = params.column;
  var model = column.model;
  var type = name === 'select' ? 'change' : 'input';

  var on = _defineProperty({}, type, function (evnt) {
    var cellValue = evnt.target.value;
    model.update = true;
    model.value = cellValue;
    $table.updateStatus(params, cellValue);
  });

  if (events) {
    _xeUtils.default.assign(on, _xeUtils.default.objectMap(events, function (cb) {
      return function () {
        cb.apply(null, [params].concat.apply(params, arguments));
      };
    }));
  }

  return on;
}

function renderOptgroups(h, renderOpts, params) {
  var optionGroups = renderOpts.optionGroups,
      _renderOpts$optionGro = renderOpts.optionGroupProps,
      optionGroupProps = _renderOpts$optionGro === void 0 ? {} : _renderOpts$optionGro;
  var groupOptions = optionGroupProps.options || 'options';
  var groupLabel = optionGroupProps.label || 'label';
  return optionGroups.map(function (group, gIndex) {
    return h('optgroup', {
      domProps: {
        label: group[groupLabel]
      },
      key: gIndex
    }, renderOptions(h, group[groupOptions], renderOpts, params));
  });
}

function renderOptions(h, options, renderOpts, params) {
  var _renderOpts$optionPro = renderOpts.optionProps,
      optionProps = _renderOpts$optionPro === void 0 ? {} : _renderOpts$optionPro;
  var column = params.column;
  var labelProp = optionProps.label || 'label';
  var valueProp = optionProps.value || 'value';
  return options.map(function (item, index) {
    return h('option', {
      domProps: {
        value: item[valueProp],
        selected: item.value === column.model.value
      },
      key: index
    }, item[labelProp]);
  });
}

function getFilterEvents(item, renderOpts, params, context) {
  var column = params.column;
  var events = renderOpts.events;
  var type = name === 'select' ? 'change' : 'input';

  var on = _defineProperty({}, type, function (evnt) {
    item.data = evnt.target.value;
    handleConfirmFilter(context, column, !!item.data, item);
  });

  if (events) {
    _xeUtils.default.assign(on, _xeUtils.default.objectMap(events, function (cb) {
      return function () {
        cb.apply(null, [params].concat.apply(params, arguments));
      };
    }));
  }

  return on;
}

function defaultFilterRender(h, renderOpts, params, context) {
  var column = params.column;
  var name = renderOpts.name;
  var attrs = getAttrs(renderOpts);
  return column.filters.map(function (item) {
    return h(name, {
      class: "s-default-".concat(name),
      attrs: attrs,
      domProps: {
        value: item.data
      },
      on: getFilterEvents(item, renderOpts, params, context)
    });
  });
}

function handleConfirmFilter(context, column, checked, item) {
  context[column.filterMultiple ? 'changeMultipleOption' : 'changeRadioOption']({}, checked, item);
}

function defaultFilterMethod(_ref2) {
  var option = _ref2.option,
      row = _ref2.row,
      column = _ref2.column;
  var data = option.data;

  var cellValue = _xeUtils.default.get(row, column.property);
  /* eslint-disable eqeqeq */


  return cellValue == data;
}

var renderMap = {
  input: {
    autofocus: 'input',
    renderEdit: defaultCellRender,
    renderFilter: defaultFilterRender,
    filterMethod: defaultFilterMethod
  },
  textarea: {
    autofocus: 'textarea',
    renderEdit: defaultCellRender,
    renderFilter: defaultFilterRender,
    filterMethod: defaultFilterMethod
  },
  select: {
    renderEdit: function renderEdit(h, renderOpts, params) {
      return [h('select', {
        class: 's-default-select',
        on: getEvents(renderOpts, params)
      }, renderOpts.optionGroups ? renderOptgroups(h, renderOpts, params) : renderOptions(h, renderOpts.options, renderOpts, params))];
    },
    renderCell: function renderCell(h, renderOpts, params) {
      var options = renderOpts.options,
          optionGroups = renderOpts.optionGroups,
          _renderOpts$optionPro2 = renderOpts.optionProps,
          optionProps = _renderOpts$optionPro2 === void 0 ? {} : _renderOpts$optionPro2,
          _renderOpts$optionGro2 = renderOpts.optionGroupProps,
          optionGroupProps = _renderOpts$optionGro2 === void 0 ? {} : _renderOpts$optionGro2;
      var row = params.row,
          column = params.column;

      var cellValue = _xeUtils.default.get(row, column.property);

      if (!(cellValue === null || cellValue === undefined || cellValue === '')) {
        var _ret = function () {
          var selectItem;
          var labelProp = optionProps.label || 'label';
          var valueProp = optionProps.value || 'value';

          if (optionGroups) {
            var groupOptions = optionGroupProps.options || 'options';

            for (var index = 0; index < optionGroups.length; index++) {
              selectItem = optionGroups[index][groupOptions].find(function (item) {
                return item[valueProp] === cellValue;
              });

              if (selectItem) {
                break;
              }
            }

            return {
              v: selectItem ? selectItem[labelProp] : null
            };
          } else {
            selectItem = options.find(function (item) {
              return item[valueProp] === cellValue;
            });
            return {
              v: selectItem ? selectItem[labelProp] : null
            };
          }
        }();

        if (_typeof(_ret) === "object") return _ret.v;
      }

      return '';
    },
    renderFilter: function renderFilter(h, renderOpts, params, context) {
      var column = params.column;
      var attrs = renderOpts.attrs;
      return column.filters.map(function (item) {
        return h('select', {
          class: 's-default-select',
          attrs: attrs,
          on: getFilterEvents(item, renderOpts, params, context)
        }, renderOpts.optionGroups ? renderOptgroups(h, renderOpts, params) : renderOptions(h, renderOpts.options, renderOpts, params));
      });
    },
    filterMethod: defaultFilterMethod
  }
  /**
   * 全局渲染器
   */

};
var Renderer = {
  mixin: function mixin(map) {
    _xeUtils.default.each(map, function (options, name) {
      return Renderer.add(name, options);
    });

    return Renderer;
  },
  get: function get(name) {
    return renderMap[name] || null;
  },
  add: function add(name, options) {
    if (name && options) {
      var renders = renderMap[name];

      if (renders) {
        Object.assign(renders, options);
      } else {
        renderMap[name] = options;
      }
    }

    return Renderer;
  },
  delete: function _delete(name) {
    delete renderMap[name];
    return Renderer;
  }
};
exports.Renderer = Renderer;
var _default = Renderer;
exports.default = _default;