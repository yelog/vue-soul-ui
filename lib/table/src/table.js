"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xeUtils = _interopRequireDefault(require("xe-utils/methods/xe-utils"));

var _conf = _interopRequireDefault(require("../../conf"));

var _tableCore = _interopRequireDefault(require("../../table-core"));

var _tools = require("../../tools");

var _methods = _interopRequireDefault(require("./methods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 渲染浮固定列
 */
function renderFixed(h, $table, fixedType) {
  var tableData = $table.tableData,
      tableColumn = $table.tableColumn,
      visibleColumn = $table.visibleColumn,
      collectColumn = $table.collectColumn,
      isGroup = $table.isGroup,
      vSize = $table.vSize,
      showHeader = $table.showHeader,
      showFooter = $table.showFooter,
      columnStore = $table.columnStore,
      footerData = $table.footerData;
  var fixedColumn = columnStore["".concat(fixedType, "List")];
  return h('div', {
    class: "s-table--fixed-".concat(fixedType, "-wrapper"),
    ref: "".concat(fixedType, "Container")
  }, [showHeader ? h('s-table-header', {
    props: {
      fixedType: fixedType,
      tableData: tableData,
      tableColumn: tableColumn,
      visibleColumn: visibleColumn,
      collectColumn: collectColumn,
      size: vSize,
      fixedColumn: fixedColumn,
      isGroup: isGroup
    },
    ref: "".concat(fixedType, "Header")
  }) : null, h('s-table-body', {
    props: {
      fixedType: fixedType,
      tableData: tableData,
      tableColumn: tableColumn,
      visibleColumn: visibleColumn,
      collectColumn: collectColumn,
      fixedColumn: fixedColumn,
      size: vSize,
      isGroup: isGroup
    },
    ref: "".concat(fixedType, "Body")
  }), showFooter ? h('s-table-footer', {
    props: {
      fixedType: fixedType,
      footerData: footerData,
      tableColumn: tableColumn,
      visibleColumn: visibleColumn,
      size: vSize,
      fixedColumn: fixedColumn
    },
    ref: "".concat(fixedType, "Footer")
  }) : null]);
}

var _default2 = {
  name: 'STable',
  props: {
    /** 基本属性 */
    // 数据
    data: Array,
    // 初始化绑定动态列
    customs: Array,
    // 表格的高度
    height: [Number, String],
    // 表格的最大高度
    maxHeight: [Number, String],
    // 所有列是否允许拖动列宽调整大小
    resizable: {
      type: Boolean,
      default: function _default() {
        return _conf.default.resizable;
      }
    },
    // 是否带有斑马纹
    stripe: {
      type: Boolean,
      default: function _default() {
        return _conf.default.stripe;
      }
    },
    // 是否带有纵向边框
    border: {
      type: Boolean,
      default: function _default() {
        return _conf.default.border;
      }
    },
    // 表格的尺寸
    size: {
      type: String,
      default: function _default() {
        return _conf.default.size;
      }
    },
    // 列的宽度是否自撑开
    fit: {
      type: Boolean,
      default: function _default() {
        return _conf.default.fit;
      }
    },
    // 表格是否加载中
    loading: Boolean,
    // 表格加载动画设置
    loadingConfig: Object,
    // 所有的列对其方式
    align: {
      type: String,
      default: function _default() {
        return _conf.default.align;
      }
    },
    // 所有的表头列的对齐方式
    headerAlign: {
      type: String,
      default: function _default() {
        return _conf.default.headerAlign;
      }
    },
    // 所有的表尾列的对齐方式
    footerAlign: {
      type: String,
      default: function _default() {
        return _conf.default.footerAlign;
      }
    },
    // 是否显示表头
    showHeader: {
      type: Boolean,
      default: function _default() {
        return _conf.default.showHeader;
      }
    },
    // 只对 type=index 时有效，自定义序号的起始值
    startIndex: {
      type: Number,
      default: 0
    },
    // 是否要高亮当前选中行
    highlightCurrentRow: {
      type: Boolean,
      default: function _default() {
        return _conf.default.highlightCurrentRow;
      }
    },
    // 鼠标移到行是否要高亮显示
    highlightHoverRow: {
      type: Boolean,
      default: function _default() {
        return _conf.default.highlightHoverRow;
      }
    },
    // 是否要高亮当前选中列
    highlightCurrentColumn: {
      type: Boolean,
      default: function _default() {
        return _conf.default.highlightCurrentColumn;
      }
    },
    // 鼠标移到列是否要高亮显示
    highlightHoverColumn: {
      type: Boolean,
      default: function _default() {
        return _conf.default.highlightHoverColumn;
      }
    },
    // 激活单元格编辑时是否高亮显示
    highlightCell: Boolean,
    // 是否显示表尾合计
    showFooter: Boolean,
    // 表尾合计的计算方法
    footerMethod: Function,
    // 给行附加 className
    rowClassName: [String, Function],
    // 给单元格附加 className
    cellClassName: [String, Function],
    // 给表头的行附加 className
    headerRowClassName: [String, Function],
    // 给表头的单元格附加 className
    headerCellClassName: [String, Function],
    // 给表尾的行附加 className
    footerRowClassName: [String, Function],
    // 给表尾的单元格附加 className
    footerCellClassName: [String, Function],
    // 合并行或列
    spanMethod: Function,
    // 设置所有内容过长时显示为省略号
    showOverflow: {
      type: [Boolean, String],
      default: function _default() {
        return _conf.default.showOverflow;
      }
    },
    // 设置表头所有内容过长时显示为省略号
    showHeaderOverflow: {
      type: [Boolean, String],
      default: function _default() {
        return _conf.default.showHeaderOverflow;
      }
    },
    // 是否所有服务端筛选
    remoteFilter: Boolean,
    // 是否所有服务端排序
    remoteSort: Boolean,
    // 自定义所有列的排序方法
    sortMethod: Function,
    // 所有列宽度
    columnWidth: [Number, String],
    // 所有列最小宽度，把剩余宽度按比例分配
    columnMinWidth: [Number, String],

    /** 高级属性 */
    // 主键配置
    columnKey: Boolean,
    rowKey: Boolean,
    rowId: {
      type: String,
      default: function _default() {
        return _conf.default.rowId;
      }
    },
    // 是否自动监听父容器变化去更新响应式表格宽高
    autoResize: Boolean,
    // 是否自动根据状态属性去更新响应式表格宽高
    syncResize: Boolean,
    // 排序配置项
    sortConfig: Object,
    // 单选配置
    radioConfig: Object,
    // 多选配置项
    selectConfig: Object,
    // tooltip 配置项
    tooltipConfig: Object,
    // 展开行配置项
    expandConfig: Object,
    // 树形结构配置项
    treeConfig: Object,
    // 快捷菜单配置项
    contextMenu: Object,
    // 鼠标配置项
    mouseConfig: Object,
    // 按键配置项
    keyboardConfig: Object,
    // 编辑配置项
    editConfig: Object,
    // 校验配置项
    validConfig: Object,
    // 校验规则配置项
    editRules: Object,
    // 优化配置项
    optimization: Object,
    // 额外的参数
    params: Object
  },
  provide: function provide() {
    return {
      $table: this
    };
  },
  inject: {
    $grid: {
      default: null
    }
  },
  data: function data() {
    return {
      id: _xeUtils.default.uniqueId(),
      // 列分组配置
      collectColumn: [],
      // 完整所有列
      tableFullColumn: [],
      // 渲染的列
      tableColumn: [],
      // 渲染中的数据
      tableData: [],
      // 是否启用了横向 X 可视渲染方式加载
      scrollXLoad: false,
      // 是否启用了纵向 Y 可视渲染方式加载
      scrollYLoad: false,
      // 是否存在纵向滚动条
      overflowY: true,
      // 是否存在横向滚动条
      overflowX: false,
      // 纵向滚动条的宽度
      scrollbarWidth: 0,
      // 横向滚动条的高度
      scrollbarHeight: 0,
      // 是否全选
      isAllSelected: false,
      // 多选属性，有选中且非全选状态
      isIndeterminate: false,
      // 多选属性，已选中的列
      selection: [],
      // 当前行
      currentRow: null,
      // 单选属性，选中行
      selectRow: null,
      // 表尾合计数据
      footerData: [],
      // 已展开的行
      expandeds: [],
      // 已展开树节点
      treeExpandeds: [],
      // 树节点不确定状态的列表
      treeIndeterminates: [],
      // 当前选中的筛选列
      filterStore: {
        isAllSelected: false,
        isIndeterminate: false,
        style: null,
        options: [],
        column: null,
        multiple: false,
        visible: false
      },
      // 存放列相关的信息
      columnStore: {
        leftList: [],
        centerList: [],
        rightList: [],
        resizeList: [],
        pxList: [],
        pxMinList: [],
        scaleList: [],
        scaleMinList: [],
        autoList: []
      },
      // 存放快捷菜单的信息
      ctxMenuStore: {
        selected: null,
        visible: false,
        showChild: false,
        selectChild: null,
        list: [],
        style: null
      },
      // 存放可编辑相关信息
      editStore: {
        indexs: {
          columns: []
        },
        titles: {
          columns: []
        },
        // 所有选中
        checked: {
          rows: [],
          columns: [],
          tRows: [],
          tColumns: []
        },
        // 选中源
        selected: {
          row: null,
          column: null
        },
        // 已复制源
        copyed: {
          cut: false,
          rows: [],
          columns: []
        },
        // 激活
        actived: {
          row: null,
          column: null
        },
        insertList: [],
        removeList: []
      },
      // 存放数据校验相关信息
      validStore: {
        visible: false,
        row: null,
        column: null,
        content: '',
        rule: null,
        isArrow: false
      }
    };
  },
  computed: {
    vSize: function vSize() {
      return this.size || this.$parent.size || this.$parent.vSize;
    },
    validOpts: function validOpts() {
      return Object.assign({
        message: 'default'
      }, _conf.default.validConfig, this.validConfig);
    },
    optimizeOpts: function optimizeOpts() {
      return Object.assign({}, _conf.default.optimization, this.optimization);
    },
    vaildTipOpts: function vaildTipOpts() {
      return Object.assign({
        isArrow: false
      }, this.tooltipConfig);
    },
    sortOpts: function sortOpts() {
      return Object.assign({}, _conf.default.sortConfig, this.sortConfig);
    },
    // 是否使用了分组表头
    isGroup: function isGroup() {
      return this.collectColumn.some(function (column) {
        return _tools.UtilTools.hasChildrenList(column);
      });
    },
    hasTip: function hasTip() {
      return _tableCore.default._tooltip;
    },
    visibleColumn: function visibleColumn() {
      return this.tableFullColumn ? this.tableFullColumn.filter(function (column) {
        return column.visible;
      }) : [];
    },
    isResizable: function isResizable() {
      return this.resizable || this.tableFullColumn.some(function (column) {
        return column.resizable;
      });
    },
    hasFilter: function hasFilter() {
      return this.tableColumn.some(function (column) {
        return column.filters && column.filters.length;
      });
    },
    headerCtxMenu: function headerCtxMenu() {
      return this.ctxMenuOpts.header && this.ctxMenuOpts.header.options ? this.ctxMenuOpts.header.options : [];
    },
    bodyCtxMenu: function bodyCtxMenu() {
      return this.ctxMenuOpts.body && this.ctxMenuOpts.body.options ? this.ctxMenuOpts.body.options : [];
    },
    isCtxMenu: function isCtxMenu() {
      return this.headerCtxMenu.length || this.bodyCtxMenu.length;
    },
    ctxMenuOpts: function ctxMenuOpts() {
      return Object.assign({}, _conf.default.menu, this.contextMenu);
    },
    _loadingConfig: function _loadingConfig() {
      return Object.assign({}, _conf.default.loadingConfig, this.loadingConfig);
    },
    ctxMenuList: function ctxMenuList() {
      var rest = [];
      this.ctxMenuStore.list.forEach(function (list) {
        list.forEach(function (item) {
          rest.push(item);
        });
      });
      return rest;
    }
  },
  watch: {
    data: function data(value) {
      if (!this._isUpdateData) {
        this.loadTableData(value, true).then(this.handleDefault);
      }

      this._isUpdateData = false;
    },
    customs: function customs(value) {
      if (!this.isUpdateCustoms) {
        this.mergeCustomColumn(value);
      }

      this.isUpdateCustoms = false;
    },
    collectColumn: function collectColumn(value) {
      var tableFullColumn = _tools.UtilTools.getColumnList(value);

      this.tableFullColumn = tableFullColumn;
      this.cacheColumnMap();

      if (this.customs) {
        this.mergeCustomColumn(this.customs);
      }

      this.refreshColumn();
      this.handleTableData(true);

      if (this.$toolbar) {
        this.$toolbar.updateColumn(tableFullColumn);
      } // 在 v3.0 中废弃 prop、label


      if (tableFullColumn.length) {
        var cIndex = Math.floor((tableFullColumn.length - 1) / 2);

        if (tableFullColumn[cIndex].prop) {
          _tools.UtilTools.warn('s.error.delProp');
        }

        if (tableFullColumn[cIndex].label) {
          _tools.UtilTools.warn('s.error.delLabel');
        }
      }

      if (this.treeConfig && tableFullColumn.some(function (column) {
        return column.fixed;
      }) && tableFullColumn.some(function (column) {
        return column.type === 'expand';
      })) {
        _tools.UtilTools.warn('s.error.treeFixedExpand');
      }
    },
    tableColumn: function tableColumn() {
      this.analyColumnWidth();
    },
    height: function height() {
      this.$nextTick(this.recalculate);
    },
    loading: function loading() {
      if (!this._isLoading) {
        this._isLoading = true;
      }
    },
    syncResize: function syncResize(value) {
      if (value) {
        this.$nextTick(this.recalculate);
      }
    }
  },
  created: function created() {
    var _this = this;

    var _Object$assign = Object.assign(this, {
      elemStore: {},
      // 存放横向 X 虚拟滚动相关的信息
      scrollXStore: {},
      // 存放纵向 Y 虚拟滚动相关信息
      scrollYStore: {},
      // 存放 tooltip 相关信息
      tooltipStore: {},
      // 表格父容器的高度
      parentHeight: 0,
      // 表格宽度
      tableWidth: 0,
      // 表格高度
      tableHeight: 0,
      // 表头高度
      headerHeight: 0,
      // 表尾高度
      footerHeight: 0,
      // 单选属性，选中列
      // currentColumn: null,
      // 当前 hover 行
      // hoverRow: null,
      // 最后滚动位置
      lastScrollLeft: 0,
      lastScrollTop: 0,
      // 完整数据、条件处理后
      tableFullData: [],
      afterFullData: [],
      // 缓存数据集
      fullAllDataRowMap: new Map(),
      fullAllDataRowIdData: {},
      fullDataRowMap: new Map(),
      fullDataRowIdData: {},
      fullColumnMap: new Map(),
      fullColumnIdData: {}
    }),
        scrollYStore = _Object$assign.scrollYStore,
        optimizeOpts = _Object$assign.optimizeOpts,
        data = _Object$assign.data,
        loading = _Object$assign.loading;

    var scrollY = optimizeOpts.scrollY; // 是否加载过 Loading 模块

    this._isLoading = loading;

    if (!_tools.UtilTools.getRowkey(this)) {
      _tools.UtilTools.error('s.error.rowIdEmpty');
    }

    if (!_tableCore.default._keyboard && (this.keyboardConfig || this.mouseConfig)) {
      throw new Error(_tools.UtilTools.error('s.error.reqKeyboard'));
    }

    if (!_tableCore.default._resize && this.autoResize) {
      throw new Error(_tools.UtilTools.error('s.error.reqResize'));
    }

    if (scrollY) {
      Object.assign(scrollYStore, {
        startIndex: 0,
        visibleIndex: 0,
        adaptive: _xeUtils.default.isBoolean(scrollY.adaptive) ? scrollY.adaptive : true,
        renderSize: _xeUtils.default.toNumber(scrollY.rSize),
        offsetSize: _xeUtils.default.toNumber(scrollY.oSize)
      });
    }

    this.loadTableData(data, true).then(function () {
      _this.handleDefault();

      _this.updateStyle();
    });

    _tools.GlobalEvent.on(this, 'mousedown', this.handleGlobalMousedownEvent);

    _tools.GlobalEvent.on(this, 'blur', this.handleGlobalBlurEvent);

    _tools.GlobalEvent.on(this, 'mousewheel', this.handleGlobalMousewheelEvent);

    _tools.GlobalEvent.on(this, 'keydown', this.handleGlobalKeydownEvent);

    _tools.GlobalEvent.on(this, 'resize', this.handleGlobalResizeEvent);

    _tools.GlobalEvent.on(this, 'contextmenu', this.handleGlobalContextmenuEvent);
  },
  mounted: function mounted() {
    if (this.autoResize && _tableCore.default._resize) {
      this.bindResize();
    }

    if (_tools.DomTools.getParents(this.$el, '.s-table-complete-outline').length > 0) {
      _tools.DomTools.getParents(this.$el, '.s-table-complete-outline')[0].children[0].appendChild(this.$refs.tableWrapper);
    } else {
      document.body.appendChild(this.$refs.tableWrapper);
    }
  },
  activated: function activated() {
    var _this2 = this;

    var lastScrollLeft = this.lastScrollLeft,
        lastScrollTop = this.lastScrollTop;

    if (lastScrollLeft || lastScrollTop) {
      this.clearScroll().then(this.recalculate).then(function () {
        return _this2.scrollTo(lastScrollLeft, lastScrollTop);
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    var tableWrapper = this.$refs.tableWrapper;

    if (tableWrapper && tableWrapper.parentNode) {
      tableWrapper.parentNode.removeChild(tableWrapper);
    }

    if (_tableCore.default._resize) {
      this.unbindResize();
    }

    this.closeFilter();
    this.closeMenu();
  },
  destroyed: function destroyed() {
    _tools.GlobalEvent.off(this, 'mousedown');

    _tools.GlobalEvent.off(this, 'blur');

    _tools.GlobalEvent.off(this, 'mousewheel');

    _tools.GlobalEvent.off(this, 'keydown');

    _tools.GlobalEvent.off(this, 'resize');

    _tools.GlobalEvent.off(this, 'contextmenu');
  },
  render: function render(h) {
    var _class;

    var _e = this._e,
        id = this.id,
        tableData = this.tableData,
        tableColumn = this.tableColumn,
        visibleColumn = this.visibleColumn,
        collectColumn = this.collectColumn,
        isGroup = this.isGroup,
        hasFilter = this.hasFilter,
        isResizable = this.isResizable,
        isCtxMenu = this.isCtxMenu,
        loading = this.loading,
        _loadingConfig = this._loadingConfig,
        _isLoading = this._isLoading,
        showHeader = this.showHeader,
        border = this.border,
        stripe = this.stripe,
        height = this.height,
        highlightHoverRow = this.highlightHoverRow,
        highlightHoverColumn = this.highlightHoverColumn,
        highlightCell = this.highlightCell,
        vSize = this.vSize,
        showOverflow = this.showOverflow,
        showHeaderOverflow = this.showHeaderOverflow,
        editConfig = this.editConfig,
        validOpts = this.validOpts,
        _this$mouseConfig = this.mouseConfig,
        mouseConfig = _this$mouseConfig === void 0 ? {} : _this$mouseConfig,
        editRules = this.editRules,
        showFooter = this.showFooter,
        footerMethod = this.footerMethod,
        overflowX = this.overflowX,
        overflowY = this.overflowY,
        scrollbarHeight = this.scrollbarHeight,
        optimizeOpts = this.optimizeOpts,
        vaildTipOpts = this.vaildTipOpts,
        tooltipConfig = this.tooltipConfig,
        columnStore = this.columnStore,
        filterStore = this.filterStore,
        ctxMenuStore = this.ctxMenuStore,
        footerData = this.footerData,
        hasTip = this.hasTip;
    var leftList = columnStore.leftList,
        rightList = columnStore.rightList;
    return h('div', {
      class: (_class = {
        's-table': 1
      }, _defineProperty(_class, "size--".concat(vSize), vSize), _defineProperty(_class, 's-editable', editConfig), _defineProperty(_class, 'show--head', showHeader), _defineProperty(_class, 'show--foot', showFooter), _defineProperty(_class, 'scroll--y', overflowY), _defineProperty(_class, 'scroll--x', overflowX), _defineProperty(_class, 'fixed--left', leftList.length), _defineProperty(_class, 'fixed--right', rightList.length), _defineProperty(_class, 'all-overflow', showOverflow), _defineProperty(_class, 'all-head-overflow', showHeaderOverflow), _defineProperty(_class, 'c--highlight', highlightCell), _defineProperty(_class, 't--animat', optimizeOpts.animat), _defineProperty(_class, 't--stripe', stripe), _defineProperty(_class, 't--border', border), _defineProperty(_class, 't--checked', mouseConfig.checked), _defineProperty(_class, 'is--loading', loading), _defineProperty(_class, 'row--highlight', highlightHoverRow), _defineProperty(_class, 'column--highlight', highlightHoverColumn), _class)
    }, [
    /**
     * 隐藏列
     */
    h('div', {
      class: 's-table-hidden-column',
      ref: 'hideColumn'
    }, this.$slots.default),
    /**
     * 主头部
     */
    showHeader ? h('s-table-header', {
      ref: 'tableHeader',
      props: {
        tableData: tableData,
        tableColumn: tableColumn,
        visibleColumn: visibleColumn,
        collectColumn: collectColumn,
        size: vSize,
        isGroup: isGroup
      }
    }) : _e(),
    /**
     * 主内容
     */
    h('s-table-body', {
      ref: 'tableBody',
      props: {
        tableData: tableData,
        tableColumn: tableColumn,
        visibleColumn: visibleColumn,
        collectColumn: collectColumn,
        size: vSize,
        isGroup: isGroup
      }
    }),
    /**
     * 底部汇总
     */
    showFooter ? h('s-table-footer', {
      props: {
        footerData: footerData,
        footerMethod: footerMethod,
        tableColumn: tableColumn,
        visibleColumn: visibleColumn,
        size: vSize
      },
      ref: 'tableFooter'
    }) : _e(),
    /**
     * 左侧固定列
     */
    leftList && leftList.length && overflowX ? renderFixed(h, this, 'left') : _e(),
    /**
     * 右侧固定列
     */
    rightList && rightList.length && overflowX ? renderFixed(h, this, 'right') : _e(),
    /**
     * 列宽线
     */
    isResizable ? h('div', {
      class: 's-table--resizable-bar',
      style: overflowX ? {
        'padding-bottom': "".concat(scrollbarHeight, "px")
      } : null,
      ref: 'resizeBar'
    }) : _e(),
    /**
     * 加载中
     */
    _isLoading ? h('s-table-loading', {
      props: Object.assign({
        visible: loading
      }, _loadingConfig)
    }) : _e(), h('div', {
      class: "s-table".concat(id, "-wrapper ").concat(this.$vnode.data.staticClass || ''),
      ref: 'tableWrapper'
    }, [
    /**
     * 筛选
     */
    hasFilter ? h('s-table-filter', {
      props: {
        optimizeOpts: optimizeOpts,
        filterStore: filterStore
      },
      ref: 'filterWrapper'
    }) : _e(),
    /**
     * 快捷菜单
     */
    isCtxMenu ? h('s-table-context-menu', {
      props: {
        ctxMenuStore: ctxMenuStore
      },
      ref: 'ctxWrapper'
    }) : _e(),
    /**
     * 单元格补全
     */
    h('div', {
      class: 's-table--complete-wrapper',
      ref: 's-table-complete'
    }, [h('div', {
      class: 's-table--complete'
    }, [h('div', {
      class: 's-table--complete-main'
    }), h('i', {
      class: 's-icon--close',
      on: {
        click: function click(evnt) {
          evnt.currentTarget.parentNode.parentNode.style.display = 'none';
        }
      }
    })])]),
    /**
     * Ellipsis tooltip
     */
    hasTip ? h('s-tooltip', {
      ref: 'tooltip',
      props: tooltipConfig
    }) : _e(),
    /**
     * valid error tooltip
     */
    hasTip && editRules && (validOpts.message === 'default' ? !height : validOpts.message === 'tooltip') ? h('s-tooltip', {
      class: 's-table--valid-error',
      props: validOpts.message === 'tooltip' || tableData.length === 1 ? vaildTipOpts : null,
      ref: 'validTip'
    }) : _e()])]);
  },
  methods: _methods.default
};
exports.default = _default2;