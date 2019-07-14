"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _table = _interopRequireDefault(require("../../table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(arguments[i], key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var methods = {};
var excelEditConfig = {
  trigger: 'dblclick',
  mode: 'cell',
  showIcon: false,
  showStatus: false
};
Object.keys(_table.default.methods).forEach(function (name) {
  methods[name] = function () {
    return this.$refs.xTable[name].apply(this.$refs.xTable[name], arguments);
  };
});
var excelContextMenu = {
  header: {
    options: [[{
      code: 'exportAll',
      name: '隐藏列'
    }, {
      code: 'exportAll',
      name: '取消所有隐藏'
    }]]
  },
  body: {
    options: [[{
      code: 'clip',
      name: '剪贴'
    }, {
      code: 'copy',
      name: '复制'
    }, {
      code: 'paste',
      name: '粘贴'
    }], [{
      code: 'insert',
      name: '插入'
    }, {
      code: 'remove',
      name: '删除'
    }, {
      code: 'clearData',
      name: '清除内容'
    }], [// {
    //   code: 'filter',
    //   name: '筛选',
    //   children: [
    //     {
    //       code: 'clearFilter',
    //       name: '清除筛选'
    //     },
    //     {
    //       code: 'filterSelect',
    //       name: '按所选单元格的值筛选'
    //     }
    //   ]
    // },
    {
      code: 'sort',
      name: '排序',
      children: [{
        code: 'clearSort',
        name: '清除排序'
      }, {
        code: 'sortAsc',
        name: '升序'
      }, {
        code: 'sortDesc',
        name: '倒序'
      }]
    }], [{
      code: 'exportAll',
      name: '导出数据.csv'
    }]]
  }
};
var _default = {
  name: 'SExcel',
  props: _objectSpread({
    columns: Array
  }, _table.default.props),
  data: function data() {
    return {
      excelStore: {
        uploadRows: []
      }
    };
  },
  computed: {
    tableProps: function tableProps() {
      var $props = this.$props,
          editConfig = this.editConfig;
      return _objectSpread({}, $props, {
        border: true,
        resizable: true,
        showOverflow: null,
        contextMenu: excelContextMenu,
        mouseConfig: {
          selected: true,
          checked: true
        },
        keyboardConfig: {
          isArrow: true,
          isDel: true,
          isTab: true,
          isCut: true,
          isEdit: true
        },
        editConfig: Object.assign({}, excelEditConfig, editConfig),
        optimization: {
          scrollX: {
            gt: 100,
            oSize: 6,
            rSize: 20
          },
          scrollY: {
            gt: 100,
            oSize: 30,
            rSize: 80
          }
        }
      });
    }
  },
  watch: {
    columns: function columns(value) {
      this.loadColumn(value);
    }
  },
  mounted: function mounted() {
    var columns = this.columns;

    if (columns && columns.length) {
      this.loadColumn(this.columns);
    }
  },
  render: function render(h) {
    var $slots = this.$slots,
        $listeners = this.$listeners,
        tableProps = this.tableProps;
    return h('s-table', {
      class: 's-excel',
      props: tableProps,
      on: _objectSpread({}, $listeners, {
        'context-menu-click': this.contextMenuClickEvent
      }),
      ref: 'xTable'
    }, $slots.default);
  },
  methods: _objectSpread({}, methods, {
    contextMenuClickEvent: function contextMenuClickEvent(_ref, evnt) {
      var menu = _ref.menu,
          row = _ref.row,
          column = _ref.column;
      var $table = this.$refs.xTable;
      var property = column.property;

      switch (menu.code) {
        case 'clip':
          $table.handleCopyed(true, evnt);
          break;

        case 'copy':
          $table.handleCopyed(false, evnt);
          break;

        case 'paste':
          $table.handlePaste(evnt);
          break;

        case 'insert':
          $table.insertAt({}, row);
          break;

        case 'remove':
          $table.remove(row);
          break;

        case 'clearData':
          $table.clearData(row, property);
          break;

        case 'clearFilter':
          $table.clearFilter();
          break;

        case 'clearSort':
          $table.clearSort();
          break;

        case 'sortAsc':
          $table.sort(property, 'asc');
          break;

        case 'sortDesc':
          $table.sort(property, 'desc');
          break;

        case 'exportAll':
          $table.exportCsv({
            isHeader: false
          });
          break;
      }
    }
  })
};
exports.default = _default;