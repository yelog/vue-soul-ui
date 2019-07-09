<template>
  <div>
    <p>行的样色、单元格样式，表头的样式、表尾的样式、全部都可以完全自定义</p>

    <s-table
      border
      class="mytable-style"
      :header-cell-class-name="headerCellClassName"
      :row-class-name="rowClassName"
      :cell-class-name="cellClassName"
      :data.sync="tableData">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
      <code class="scss">{{ demoCodes[2] }}</code>
    </pre>

    <p>通过 <table-api-link prop="cell-click"/> 事件点击改变颜色</p>

    <s-table
      border
      class="mytable-style"
      :cell-class-name="cellClassName2"
      :data.sync="tableData"
      @cell-click="cellClickEvent2">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[3] }}</code>
      <code class="javascript">{{ demoCodes[4] }}</code>
      <code class="scss">{{ demoCodes[5] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tableData: [],
      selectRow: null,
      selectColumn: null,
      demoCodes: [
        `
        <s-table
          border
          class="mytable-style"
          :header-cell-class-name="headerCellClassName"
          :row-class-name="rowClassName"
          :cell-class-name="cellClassName"
          :data.sync="tableData">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name"></s-table-column>
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
          <s-table-column field="address" title="Address" show-overflow></s-table-column>
        </s-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [],
              selectRow: null,
              selectColumn: null
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
          },
          methods: {
            headerCellClassName ({ column, columnIndex }) {
              if (column.property === 'name') {
                return 'col-blue'
              }
            },
            rowClassName ({ row, rowIndex }) {
              if ([2, 3, 5].includes(rowIndex)) {
                return 'row-green'
              }
            },
            cellClassName ({ row, rowIndex, column, columnIndex }) {
              if (column.property === 'sex') {
                if (row.sex >= '1') {
                  return 'col-red'
                } else if (row.age === 26) {
                  return 'col-orange'
                }
              }
            }
          }
        }
        `,
        `
        .mytable-style .s-body--row.row-green {
          background-color: #187;
          color: #fff;
        }
        .mytable-style .s-header--column.col-blue {
          background-color: #2db7f5;
          color: #fff;
        }
        .mytable-style .s-body--column.col-red {
          background-color: red;
          color: #fff;
        }
        .mytable-style .s-body--column.col-orange {
          background-color: #f60;
          color: #fff;
        }
        `,
        `
        <s-table
          border
          class="mytable-style"
          :cell-class-name="cellClassName2"
          :data.sync="tableData"
          @cell-click="cellClickEvent2">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name"></s-table-column>
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
          <s-table-column field="address" title="Address" show-overflow></s-table-column>
        </s-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [],
              selectRow: null,
              selectColumn: null
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
          },
          methods: {
            cellClassName2 ({ row, column }) {
              if (row === this.selectRow & column === this.selectColumn) {
                return 'col-orange'
              }
            },
            cellClickEvent2 ({ row, column }) {
              this.selectRow = row
              this.selectColumn = column
            }
          }
        }
        `,
        `
        .mytable-style .s-body--row.row-green {
          background-color: #187;
          color: #fff;
        }
        .mytable-style .s-header--column.col-blue {
          background-color: #2db7f5;
          color: #fff;
        }
        .mytable-style .s-body--column.col-red {
          background-color: red;
          color: #fff;
        }
        .mytable-style .s-body--column.col-orange {
          background-color: #f60;
          color: #fff;
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    headerCellClassName ({ column, columnIndex }) {
      if (column.property === 'name') {
        return 'col-blue'
      }
    },
    rowClassName ({ row, rowIndex }) {
      if ([2, 3, 5].includes(rowIndex)) {
        return 'row-green'
      }
    },
    cellClassName ({ row, rowIndex, column, columnIndex }) {
      if (column.property === 'sex') {
        if (row.sex >= '1') {
          return 'col-red'
        } else if (row.age === 26) {
          return 'col-orange'
        }
      }
    },
    cellClassName2 ({ row, column }) {
      if (row === this.selectRow & column === this.selectColumn) {
        return 'col-orange'
      }
    },
    cellClickEvent2 ({ row, column }) {
      this.selectRow = row
      this.selectColumn = column
    }
  }
}
</script>

<style>
.mytable-style .s-body--row.row-green {
  background-color: #187;
  color: #fff;
}
.mytable-style .s-header--column.col-blue {
  background-color: #2db7f5;
  color: #fff;
}
.mytable-style .s-body--column.col-red {
  background-color: red;
  color: #fff;
}
.mytable-style .s-body--column.col-orange {
  background-color: #f60;
  color: #fff;
}
</style>
