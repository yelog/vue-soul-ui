### 自定义表尾合计
待修复：body横向滚动，footer没有跟随，不过应该只有macos可以横向滚动，故修复等级不高
:::demo
```html
<template>
<s-table
  class="mytable-footer"
  border
  show-footer
  height="400"
  show-overflow="tooltip"
  :footer-method="footerMethod"
  :footer-cell-class-name="footerCellClassName"
  :data.sync="tableData">
  <s-table-column type="index" width="60" fixed="left"></s-table-column>
  <s-table-column title="基本信息">
    <s-table-column field="name" title="Name" min-width="600" sortable></s-table-column>
    <s-table-column field="age" title="Age" min-width="600"></s-table-column>
  </s-table-column>
  <s-table-column field="date" title="Date" min-width="600"></s-table-column>
  <s-table-column field="rate" title="Rate" width="200" fixed="right"></s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
  },
  methods: {
    footerCellClassName ({ $rowIndex, column, columnIndex }) {
      if (columnIndex === 0) {
        if ($rowIndex === 0) {
          return 'col-blue'
        } else {
          return 'col-red'
        }
      }
    },
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }
          if (['age', 'rate'].includes(column.property)) {
            return this.XEUtils.mean(data, column.property)
          }
          return '-'
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }
          if (['age', 'rate'].includes(column.property)) {
            return this.XEUtils.sum(data, column.property)
          }
          return '-'
        })
      ]
    }
  }
}
</script>

```
:::
