### 通过 loading 开启加载效果
:::demo
```html
<template>
loading:
<el-switch
  v-model="loading"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
<s-table
  border
  highlight-hover-row
  height="300"
  :loading="loading"
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" sortable></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
  <s-table-column field="address" title="Address" show-overflow></s-table-column>
</s-table>
</template>
<script>
export default {
  data () {
    return {
      loading: true,
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


### 待添加多种 loading 效果 ...
