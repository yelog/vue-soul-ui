### 事件绑定
:::demo
```html
<template>
<s-table
  border
  height="500"
  highlight-hover-row
  show-overflow
  resizable
  :data.sync="tableData"
  @header-cell-click="headerCellClickEvent"
  @header-cell-dblclick="headerCellDBLClickEvent"
  @cell-click="cellClickEvent"
  @cell-dblclick="cellDBLClickEvent"
  @cell-mouseenter="cellMouseenterEvent"
  @cell-mouseleave="cellMouseleaveEvent"
  @scroll="bodyScrollEvent">
  <s-table-column type="index" title="序号" width="60" fixed="left"></s-table-column>
  <s-table-column field="name" title="Name" width="300"></s-table-column>
  <s-table-column field="role" title="Role" width="300"></s-table-column>
  <s-table-column field="sex" title="Sex" width="300"></s-table-column>
  <s-table-column field="date" title="Date" width="300"></s-table-column>
  <s-table-column field="address" title="Address" fixed="right" width="300"></s-table-column>
</s-table>
</template>
<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 20)
  },
  methods: {
    headerCellClickEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`表头单元格点击${column.title}`)
    },
    headerCellDBLClickEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`表头单元格双击${column.title}`)
    },
    cellClickEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`单元格点击${column.title}`)
    },
    cellDBLClickEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`单元格双击${column.title}`)
    },
    cellMouseenterEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`鼠标进入单元格${column.title}`)
    },
    cellMouseleaveEvent ({ row, rowIndex, column, columnIndex }, event) {
      console.log(`鼠标离开单元格${column.title}`)
    },
    bodyScrollEvent ({ scrollTop, scrollLeft }, event) {
      console.log(`滚动事件scrollTop=${scrollTop} scrollLeft=${scrollLeft}`)
    }
  }
}
</script>
```
:::
