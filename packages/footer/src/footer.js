import XEUtils from 'xe-utils'
import { UtilTools, DomTools } from '../../tools'

export default {
  name: 'STableFooter',
  props: {
    footerData: Array,
    tableColumn: Array,
    visibleColumn: Array,
    fixedColumn: Array,
    size: String,
    fixedType: String
  },
  mounted () {
    let { $parent: $table, $el, $refs, fixedType } = this
    let { elemStore } = $table
    let prefix = `${fixedType || 'main'}-footer-`
    elemStore[`${prefix}wrapper`] = $el
    elemStore[`${prefix}table`] = $refs.table
    elemStore[`${prefix}colgroup`] = $refs.colgroup
    elemStore[`${prefix}list`] = $refs.tfoot
    elemStore[`${prefix}x-space`] = $refs.xSpace
  },
  render (h) {
    let {
      _e,
      $parent: $table,
      fixedType,
      fixedColumn,
      tableColumn,
      footerData
    } = this
    let {
      $listeners: tableListeners,
      footerRowClassName,
      footerCellClassName,
      scrollXLoad,
      columnKey,
      showOverflow: allColumnOverflow,
      overflowX,
      getColumnIndex
    } = $table
    // 如果是使用优化模式
    if (fixedType && allColumnOverflow) {
      tableColumn = fixedColumn
    } else if (scrollXLoad) {
      if (fixedType) {
        tableColumn = fixedColumn
      }
    }
    return h('div', {
      class: ['s-table--footer-wrapper', fixedType ? `fixed-${fixedType}--wrapper` : 'body--wrapper'],
      on: {
        scroll: this.scrollEvent
      }
    }, [
      fixedType ? _e() : h('div', {
        class: 's-body--x-space',
        ref: 'xSpace'
      }),
      h('table', {
        class: 's-table--footer',
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
        }).concat([
          h('col', {
            name: 'col--gutter'
          })
        ])),
        /**
         * 底部
         */
        h('tfoot', {
          ref: 'tfoot'
        }, footerData.map((list, $rowIndex) => {
          return h('tr', {
            class: ['s-footer--row', footerRowClassName ? XEUtils.isFunction(footerRowClassName) ? footerRowClassName({ $rowIndex, fixed: fixedType }) : footerRowClassName : '']
          }, tableColumn.map((column, $columnIndex) => {
            let { showOverflow } = column
            let isColGroup = column.children && column.children.length
            let fixedHiddenColumn = fixedType ? column.fixed !== fixedType && !isColGroup : column.fixed && overflowX
            let cellOverflow = (XEUtils.isUndefined(showOverflow) || XEUtils.isNull(showOverflow)) ? allColumnOverflow : showOverflow
            let showEllipsis = cellOverflow === 'ellipsis'
            let showTitle = cellOverflow === 'title'
            let showTooltip = cellOverflow === 'tooltip'
            let showComplete = cellOverflow === true || cellOverflow === 'complete'
            let hasEllipsis = showComplete || showTitle || showTooltip || showEllipsis
            let tfOns = {}
            // 确保任何情况下 columnIndex 都精准指向真实列索引
            let columnIndex = getColumnIndex(column)
            if (showTitle || showTooltip || showComplete) {
              tfOns.mouseover = evnt => {
                if (showTitle) {
                  DomTools.updateCellTitle(evnt)
                } else if (showComplete) {
                  $table.triggerCompleteEvent(evnt, { $table, $rowIndex, column, columnIndex, $columnIndex, locationType: 'footer', fixed: fixedType })
                } else if (showTooltip) {
                  $table.triggerFooterTooltipEvent(evnt, { $table, $rowIndex, column, columnIndex, $columnIndex, fixed: fixedType })
                }
              }
            }
            if (showTooltip || showComplete) {
              tfOns.mouseleave = evnt => {
                if (showComplete) {
                  $table.closeComplete(event)
                } else if (showTooltip) {
                  $table.clostTooltip()
                }
              }
            }
            if (tableListeners['header-cell-click']) {
              tfOns.click = evnt => {
                UtilTools.emitEvent($table, 'header-cell-click', [{ $table, $rowIndex, column, columnIndex, $columnIndex, fixed: fixedType, cell: evnt.currentTarget }, evnt])
              }
            }
            if (tableListeners['header-cell-dblclick']) {
              tfOns.dblclick = evnt => {
                UtilTools.emitEvent($table, 'header-cell-dblclick', [{ $table, $rowIndex, column, columnIndex, $columnIndex, fixed: fixedType, cell: evnt.currentTarget }, evnt])
              }
            }
            return h('td', {
              class: ['s-footer--column', column.id, {
                [`col--${column.headerAlign}`]: column.headerAlign,
                'fixed--hidden': fixedHiddenColumn,
                'col--ellipsis': hasEllipsis,
                'filter--active': column.filters.some(item => item.checked)
              }, footerCellClassName ? XEUtils.isFunction(footerCellClassName) ? footerCellClassName({ $rowIndex, column, columnIndex, $columnIndex, fixed: fixedType }) : footerCellClassName : ''],
              attrs: {
                'data-colid': column.id
              },
              on: tfOns,
              key: columnKey ? column.id : columnIndex
            }, [
              h('div', {
                class: 's-cell'
              }, UtilTools.formatText(list[$table.tableColumn.indexOf(column)], 1))
            ])
          }).concat([
            h('td', {
              class: 'col--gutter'
            })
          ]))
        }))
      ])
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
      let { $refs, scrollXLoad, triggerScrollXEvent, lastScrollLeft } = $table
      let tableHeader = $refs.tableHeader
      let headerElem = tableHeader ? tableHeader.$el : null
      let bodyElem = $refs.tableBody.$el
      let footerElem = $refs.tableFooter.$el
      let scrollLeft = footerElem.scrollLeft
      let isX = scrollLeft !== lastScrollLeft
      $table.lastScrollLeft = scrollLeft
      $table.lastScrollTime = Date.now()
      if (headerElem) {
        headerElem.scrollLeft = scrollLeft
      }
      if (bodyElem) {
        bodyElem.scrollLeft = scrollLeft
      }
      if (scrollXLoad && isX) {
        triggerScrollXEvent(evnt)
      }
      UtilTools.emitEvent($table, 'scroll', [{ type: 'footer', fixed: fixedType, scrollTop: bodyElem.scrollTop, scrollLeft, isX, isY: false, $table }, evnt])
    }
  }
}
