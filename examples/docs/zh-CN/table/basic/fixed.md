### 固定列
:::demo 设置 `fixed="left"` 或 `fixed="right"` 固定在左边或右边
```html
<template>
<s-table
  border
  height="300"
  :data.sync="tableData">
  <s-table-column type="index" width="60" fixed="left"></s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
  }
}
</script>
```
:::
