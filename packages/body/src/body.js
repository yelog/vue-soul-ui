import XEUtils from 'xe-utils/methods/xe-utils'
import GlobalConfig from '../../conf'
import { UtilTools, DomTools } from '../../tools'

// 滚动、拖动过程中不需要触发
function isOperateMouse ($table) {
  return $table._isResize || ($table.lastScrollTime && Date.now() < $table.lastScrollTime + 300)
}

function renderBorder (h, type) {
  return h('div', {
    class: `s-table-${type}ed-borders`,
    ref: `${type}Borders`
  }, [
    h('span', {
      class: 's-table-border-top',
      ref: `${type}Top`
    }),
    h('span', {
      class: 's-table-border-right',
      ref: `${type}Right`
    }),
    h('span', {
      class: 's-table-border-bottom',
      ref: `${type}Bottom`
    }),
    h('span', {
      class: 's-table-border-left',
      ref: `${type}Left`
    })
  ])
}

/**
 * 渲染列
 */
function renderColumn (h, _vm, $table, $seq, seq, fixedType, rowLevel, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex) {
  let {
    _e,
    $listeners: tableListeners,
    tableData,
    height,
    columnKey,
    overflowX,
    scrollXLoad,
    scrollYLoad,
    highlightCurrentRow,
    showOverflow: allColumnOverflow,
    align: allAlign,
    cellClassName,
    spanMethod,
    radioConfig = {},
    expandConfig = {},
    selectConfig = {},
    treeConfig = {},
    mouseConfig = {},
    editConfig,
    editRules,
    validOpts,
    editStore,
    validStore
  } = $table
  let { editRender, align, showOverflow } = column
  let { actived } = editStore
  let fixedHiddenColumn = fixedType ? column.fixed !== fixedType : column.fixed && overflowX
  let cellOverflow = (XEUtils.isUndefined(showOverflow) || XEUtils.isNull(showOverflow)) ? allColumnOverflow : showOverflow
  let showEllipsis = cellOverflow === 'ellipsis'
  let showTitle = cellOverflow === 'title'
  let showComplete = cellOverflow === true || cellOverflow === 'complete'
  let showTooltip = cellOverflow === 'tooltip'
  let hasEllipsis = showTitle || showComplete || showTooltip || showEllipsis
  let isDirty
  let tdOns = {}
  let cellAlign = align || allAlign
  let validError = validStore.row === row && validStore.column === column
  let hasDefaultTip = editRules && (validOpts.message === 'default' ? (height || tableData.length > 1) : validOpts.message === 'inline')
  let attrs = { 'data-colid': column.id }
  let triggerDblclick = (editRender && editConfig && editConfig.trigger === 'dblclick')
  let params = { $table, $seq, seq, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, fixed: fixedType, isHidden: fixedHiddenColumn, level: rowLevel, data: tableData }
  // 滚动的渲染不支持动态行高
  if ((scrollXLoad || scrollYLoad) && !hasEllipsis) {
    showEllipsis = true
  }
  // hover 进入事件
  if (showTitle || showTooltip || showComplete || tableListeners['cell-mouseenter']) {
    tdOns.mouseenter = evnt => {
      if (isOperateMouse($table)) {
        return
      }
      let evntParams = { $table, seq, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, fixed: fixedType, locationType: 'body', isHidden: fixedHiddenColumn, level: rowLevel, cell: evnt.currentTarget }
      if (showTitle) {
        DomTools.updateCellTitle(evnt)
      } else if (showComplete) {
        $table.triggerCompleteEvent(evnt, evntParams)
      } else if (showTooltip) {
        // 如果配置了显示 tooltip
        $table.triggerTooltipEvent(evnt, evntParams)
      }
      UtilTools.emitEvent($table, 'cell-mouseenter', [evntParams, evnt])
    }
  }
  // hover 退出事件
  if (showTooltip || showComplete || tableListeners['cell-mouseleave']) {
    tdOns.mouseleave = evnt => {
      if (isOperateMouse($table)) {
        return
      }
      if (showTooltip) {
        $table.clostTooltip()
      }
      if (showComplete) {
        $table.closeComplete(evnt)
      }
      UtilTools.emitEvent($table, 'cell-mouseleave', [{ $table, seq, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, fixed: fixedType, isHidden: fixedHiddenColumn, level: rowLevel, cell: evnt.currentTarget }, evnt])
    }
  }
  // 按下事件处理
  if (mouseConfig.checked || mouseConfig.selected) {
    tdOns.mousedown = evnt => {
      $table.triggerCellMousedownEvent(evnt, { $table, seq, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, fixed: fixedType, isHidden: fixedHiddenColumn, level: rowLevel, cell: evnt.currentTarget })
    }
  }
  // 点击事件处理
  if (highlightCurrentRow ||
    tableListeners['cell-click'] ||
    mouseConfig.checked ||
    (editRender && editConfig) ||
    (expandConfig.trigger === 'row' || (expandConfig.trigger === 'cell')) ||
    (radioConfig.trigger === 'row' || (column.type === 'radio' && radioConfig.trigger === 'cell')) ||
    (selectConfig.trigger === 'row' || (column.type === 'selection' && selectConfig.trigger === 'cell')) ||
    (treeConfig.trigger === 'row' || (column.treeNode && treeConfig.trigger === 'cell'))) {
    tdOns.click = evnt => {
      $table.triggerCellClickEvent(evnt, { $table, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, fixed: fixedType, isHidden: fixedHiddenColumn, level: rowLevel, cell: evnt.currentTarget })
    }
  }
  // 双击事件处理
  if (triggerDblclick || tableListeners['cell-dblclick']) {
    tdOns.dblclick = evnt => {
      $table.triggerCellDBLClickEvent(evnt, { $table, seq, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, fixed: fixedType, isHidden: fixedHiddenColumn, level: rowLevel, cell: evnt.currentTarget })
    }
  }
  // 合并行或列
  if (spanMethod) {
    let { rowspan = 1, colspan = 1 } = spanMethod(params) || {}
    if (!rowspan || !colspan) {
      return null
    }
    attrs.rowspan = rowspan
    attrs.colspan = colspan
  }
  // 如果显示状态
  if (!fixedHiddenColumn && editConfig && editConfig.showStatus) {
    isDirty = $table.hasRowChange(row, column.property)
  }
  return h('td', {
    class: ['s-body--column', column.id, {
      [`col--${cellAlign}`]: cellAlign,
      'col--edit': editRender,
      'col--index': column.type === 'index',
      'col--ellipsis': hasEllipsis,
      'edit--visible': editRender && editRender.type === 'visible',
      'fixed--hidden': fixedHiddenColumn,
      'col--dirty': isDirty,
      'col--actived': editConfig && editRender && (actived.row === row && (actived.column === column || editConfig.mode === 'row')),
      'col--valid-error': validError
    }, cellClassName ? XEUtils.isFunction(cellClassName) ? cellClassName(params) : cellClassName : ''],
    key: columnKey ? column.id : columnIndex,
    attrs,
    on: tdOns
  }, allColumnOverflow && fixedHiddenColumn ? [] : [
    h('div', {
      class: ['s-cell', {
        'c--title': showTitle,
        'c--complete': showComplete,
        'c--tooltip': showTooltip,
        'c--ellipsis': showEllipsis
      }],
      attrs: {
        title: showTitle ? UtilTools.getCellLabel(row, column, params) : null
      }
    }, column.renderCell(h, params)),
    hasDefaultTip ? validError ? h('div', {
      class: 's-cell--valid',
      style: validStore.rule && validStore.rule.width ? {
        width: `${validStore.rule.width}px`
      } : null
    }, [
      h('span', {
        class: 's-cell--valid-msg'
      }, validStore.content)
    ]) : _e() : null
  ])
}

function renderRows (h, _vm, $table, $seq, rowLevel, fixedType, tableData, tableColumn) {
  let {
    rowKey,
    highlightHoverRow,
    rowClassName,
    treeConfig,
    treeExpandeds,
    scrollYLoad,
    scrollYStore,
    editStore,
    expandeds,
    getColumnIndex } = $table
  let rows = []
  tableData.forEach((row, $rowIndex) => {
    let trOn = {}
    let rowIndex = $rowIndex
    let seq = rowIndex + 1
    if (scrollYLoad) {
      seq += scrollYStore.startIndex
    }
    // 确保任何情况下 rowIndex 都精准指向真实 data 索引
    rowIndex = $table.getRowIndex(row)
    // 事件绑定
    if (highlightHoverRow) {
      trOn.mouseenter = evnt => {
        if (isOperateMouse($table)) {
          return
        }
        $table.triggerHoverEvent(evnt, { row, rowIndex })
      }
    }
    let rowid = UtilTools.getRowid($table, row)
    rows.push(
      h('tr', {
        class: ['s-body--row', {
          [`row--level-${rowLevel}`]: treeConfig,
          'row--new': editStore.insertList.indexOf(row) > -1
        }, rowClassName ? XEUtils.isFunction(rowClassName) ? rowClassName({ $table, $seq, seq, fixedType, rowLevel, row, rowIndex, $rowIndex }) : rowClassName : ''],
        attrs: {
          'data-rowid': rowid
        },
        key: rowKey || treeConfig ? rowid : $rowIndex,
        on: trOn
      }, tableColumn.map((column, $columnIndex) => {
        let columnIndex = getColumnIndex(column)
        return renderColumn(h, _vm, $table, $seq, seq, fixedType, rowLevel, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex)
      }))
    )
    // 如果行被展开了
    if (expandeds.length && expandeds.indexOf(row) > -1) {
      let column = tableColumn.find(column => column.type === 'expand')
      let columnIndex = getColumnIndex(column)
      let cellStyle
      if (treeConfig) {
        cellStyle = {
          paddingLeft: `${rowLevel * (treeConfig.indent || 16) + 30}px`
        }
      }
      if (column) {
        rows.push(
          h('tr', {
            class: 's-body--expanded-row',
            key: `expand_${rowid}`,
            on: trOn
          }, [
            h('td', {
              class: 's-body--expanded-column',
              attrs: {
                colspan: tableColumn.length
              }
            }, [
              h('div', {
                class: ['s-body--expanded-cell', {
                  'fixed--hidden': fixedType
                }],
                style: cellStyle
              }, [
                column.renderData(h, { $table, seq, row, rowIndex, column, columnIndex, fixed: fixedType, level: rowLevel })
              ])
            ])
          ])
        )
      }
    }
    // 如果是树形表格
    if (treeConfig && treeExpandeds.length) {
      let rowChildren = row[treeConfig.children]
      if (rowChildren && rowChildren.length && treeExpandeds.indexOf(row) > -1) {
        rows.push.apply(rows, renderRows(h, _vm, $table, $seq ? `${$seq}.${seq}` : `${seq}`, rowLevel + 1, fixedType, rowChildren, tableColumn))
      }
    }
  })
  return rows
}

/**
 * 同步滚动条
 * scroll 方式：可以使固定列与内容保持一致的滚动效果，处理相对麻烦
 * mousewheel 方式：对于同步滚动效果就略差了，左右滚动，内容跟随即可
 */
var scrollProcessTimeout
function syncBodyScroll (scrollTop, elem1, elem2) {
  if (elem1 || elem2) {
    if (elem1) {
      elem1.onscroll = null
      elem1.scrollTop = scrollTop
    }
    if (elem2) {
      elem2.onscroll = null
      elem2.scrollTop = scrollTop
    }
    clearTimeout(scrollProcessTimeout)
    scrollProcessTimeout = setTimeout(function () {
      if (elem1) {
        elem1.onscroll = elem1._onscroll
      }
      if (elem2) {
        elem2.onscroll = elem2._onscroll
      }
    }, 100)
  }
}

export default {
  name: 'STableBody',
  props: {
    tableData: Array,
    tableColumn: Array,
    visibleColumn: Array,
    collectColumn: Array,
    fixedColumn: Array,
    size: String,
    fixedType: String,
    isGroup: Boolean
  },
  mounted () {
    let { $parent: $table, $el, $refs, fixedType } = this
    let { elemStore } = $table
    let prefix = `${fixedType || 'main'}-body-`
    elemStore[`${prefix}wrapper`] = $el
    elemStore[`${prefix}table`] = $refs.table
    elemStore[`${prefix}colgroup`] = $refs.colgroup
    elemStore[`${prefix}list`] = $refs.tbody
    elemStore[`${prefix}xSpace`] = $refs.xSpace
    elemStore[`${prefix}ySpace`] = $refs.ySpace
    elemStore[`${prefix}emptyBlock`] = $refs.emptyBlock
    this.$el.onscroll = this.scrollEvent
    this.$el._onscroll = this.scrollEvent
  },
  beforeDestroy () {
    this.$el._onscroll = null
    this.$el.onscroll = null
  },
  render (h) {
    let {
      _e,
      $parent: $table,
      fixedColumn,
      fixedType
    } = this
    let {
      $scopedSlots,
      tableData,
      tableColumn,
      showOverflow: allColumnOverflow,
      scrollXLoad,
      mouseConfig = {},
      keyboardConfig = {}
    } = $table
    // 如果是固定列与设置了超出隐藏
    if (fixedType && allColumnOverflow) {
      tableColumn = fixedColumn
    } else if (scrollXLoad) {
      if (fixedType) {
        tableColumn = fixedColumn
      }
    }
    return h('div', {
      class: ['s-table--body-wrapper', fixedType ? `fixed-${fixedType}--wrapper` : 'body--wrapper']
    }, [
      fixedType ? _e() : h('div', {
        class: 's-body--x-space',
        ref: 'xSpace'
      }),
      h('div', {
        class: 's-body--y-space',
        ref: 'ySpace'
      }),
      h('table', {
        class: 's-table--body',
        attrs: {
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        },
        ref: 'table'
      }, [
        /**
         * 列宽
         */
        h('colgroup', {
          ref: 'colgroup'
        }, tableColumn.map((column, columnIndex) => {
          return h('col', {
            attrs: {
              name: column.id
            },
            key: columnIndex
          })
        })),
        /**
         * 内容
         */
        h('tbody', {
          ref: 'tbody'
        }, renderRows(h, this, $table, '', 0, fixedType, tableData, tableColumn))
      ]),
      /**
       * 选中边框线
       */
      !fixedType && (mouseConfig.checked || keyboardConfig.isCut) ? h('div', {
        class: 's-table--borders'
      }, [
        mouseConfig.checked ? renderBorder(h, 'check') : null,
        keyboardConfig.isCut ? renderBorder(h, 'copy') : null
      ]) : null,
      !fixedType ? h('div', {
        class: `s-table--empty-block${tableData.length ? '' : ' is--visible'}`,
        ref: 'emptyBlock'
      }, [
        h('span', {
          class: 's-table--empty-text'
        }, $scopedSlots.empty ? $scopedSlots.empty.call(this, { $table }, h) : GlobalConfig.i18n('soul.table.emptyText'))
      ]) : null
    ])
  },
  methods: {
    /**
     * 滚动处理
     * 如果存在列固定左侧，同步更新滚动状态
     * 如果存在列固定右侧，同步更新滚动状态
     */
    scrollEvent (evnt) {
      let { $parent: $table, fixedType } = this
      let { $refs, highlightHoverRow, scrollXLoad, scrollYLoad, lastScrollTop, lastScrollLeft } = $table
      let { tableHeader, tableBody, leftBody, rightBody, tableFooter } = $refs
      let headerElem = tableHeader ? tableHeader.$el : null
      let footerElem = tableFooter ? tableFooter.$el : null
      let bodyElem = tableBody.$el
      let leftElem = leftBody ? leftBody.$el : null
      let rightElem = rightBody ? rightBody.$el : null
      let scrollTop = bodyElem.scrollTop
      let scrollLeft = bodyElem.scrollLeft
      let isX = scrollLeft !== lastScrollLeft
      let isY = scrollTop !== lastScrollTop
      if ($table.$refs['s-table-complete']) {
        // 隐藏complete
        $table.$refs['s-table-complete'].style.display = 'none'
      }
      $table.lastScrollTop = scrollTop
      $table.lastScrollLeft = scrollLeft
      $table.lastScrollTime = Date.now()
      if (highlightHoverRow) {
        $table.clearHoverRow()
      }
      if (leftElem && fixedType === 'left') {
        scrollTop = leftElem.scrollTop
        syncBodyScroll(scrollTop, bodyElem, rightElem)
      } else if (rightElem && fixedType === 'right') {
        scrollTop = rightElem.scrollTop
        syncBodyScroll(scrollTop, bodyElem, leftElem)
      } else {
        if (isX) {
          if (headerElem) {
            headerElem.scrollLeft = bodyElem.scrollLeft
          }
          if (footerElem) {
            footerElem.scrollLeft = bodyElem.scrollLeft
          }
        }
        if (leftElem || rightElem) {
          $table.checkScrolling()
          if (isY) {
            syncBodyScroll(scrollTop, leftElem, rightElem)
          }
        }
      }
      if (scrollXLoad && isX) {
        $table.triggerScrollXEvent(evnt)
        if (headerElem && scrollLeft + bodyElem.clientWidth >= bodyElem.scrollWidth) {
          // 修复拖动滚动条时可能存在不同步问题
          this.$nextTick(() => {
            if (bodyElem.scrollLeft !== headerElem.scrollLeft) {
              headerElem.scrollLeft = bodyElem.scrollLeft
            }
          })
        }
      }
      if (scrollYLoad && isY) {
        $table.triggerScrollYEvent(evnt)
      }
      UtilTools.emitEvent($table, 'scroll', [{ type: 'body', fixed: fixedType, scrollTop, scrollLeft, isX, isY, $table }, evnt])
    }
  }
}
