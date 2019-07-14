## 常用表格

基本的表格功能，常用功能

### table

基础的表格展示用法。

### s-table
:::demo
```html
<template>
  loading : <el-switch v-model="loading" active-color="#13ce66" inactive-color="#ff4949" ></el-switch>
  <s-table
    border
    height="300"
    highlight-hover-row
    resizable
    show-overflow
    :loading="loading"
    :data.sync="tableData">
    <s-table-column type="selection" width="60" fixed="left"></s-table-column>
    <s-table-column type="index" width="60" fixed="left"></s-table-column>
    <s-table-column field="name" title="Name" width="300" sortable></s-table-column>
    <s-table-column field="role" title="Role" width="300" sortable></s-table-column>
    <s-table-column field="sex" title="Sex" width="300" sortable></s-table-column>
    <s-table-column field="date" title="Date" width="300" sortable></s-table-column>
    <s-table-column field="address" title="Address" fixed="right" width="300"></s-table-column>
  </s-table>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
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