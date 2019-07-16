### 设置 sortable 开启排序
:::demo
```html
<template>
<s-table
  border
  highlight-hover-row
  height="300"
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" sortable></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
  <s-table-column field="time" title="Time" sortable></s-table-column>
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
  }
}
</script>
```
:::

### 点击列头排序
由于与内置表头点击事件冲突，先曲线救国
:::demo
```html
<template>
<s-table
  border
  highlight-hover-row
  highlight-current-row
  ref="myTable"
  height="300"
  :data.sync="tableData"
  @header-cell-click="headerCellClickEvent">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" sortable ></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
  <s-table-column field="time" title="Time" sortable></s-table-column>
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
    headerCellClickEvent ({ column, triggerSort, triggerFilter }) {
      // 如果点击了列并且没触发对应的按钮，则手动排序
      if (!triggerSort && !triggerFilter) {
        this.$refs.myTable.sort(column.property)
      }
    }
  }
}
</script>
```
:::
