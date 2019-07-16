### 复杂表头
:::demo
```html
<template>
<s-table
  border
  height="400"
  :data.sync="tableData">
  <s-table-column title="基本信息">
    <s-table-column type="index" width="60"></s-table-column>
    <s-table-column field="name" title="Name"></s-table-column>
  </s-table-column>
  <s-table-column title="更多信息">
    <s-table-column field="role" title="Role"></s-table-column>
    <s-table-column title="详细信息">
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
    </s-table-column>
  </s-table-column>
  <s-table-column field="address" title="Address" show-overflow></s-table-column>
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

### 复杂表头固定列
:::demo
```html
<template>
<s-table
  border
  height="400"
  :data.sync="tableData">
  <s-table-column title="基本信息">
    <s-table-column type="index" width="60" fixed="left"></s-table-column>
    <s-table-column field="name" title="Name" fixed="left" width="100"></s-table-column>
  </s-table-column>
  <s-table-column title="更多信息">
    <s-table-column field="role" title="Role" width="300"></s-table-column>
    <s-table-column field="sex" title="Sex" width="300"></s-table-column>
    <s-table-column title="详细信息">
      <s-table-column field="sex" title="Sex" width="300"></s-table-column>
      <s-table-column field="date" title="Date" width="300"></s-table-column>
    </s-table-column>
  </s-table-column>
  <s-table-column field="address" title="Address" width="300" fixed="right" show-overflow></s-table-column>
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

### 隐藏表头
:::demo 设置 `:show-header="false"` 隐藏表头
```html
<template>
<s-table
  height="400"
  :show-header="false"
  show-overflow
  :data.sync="tableData2">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
  <s-table-column field="address" title="Address"></s-table-column>
</s-table>
</template>
<script>
export default {
  data () {
    return {
      tableData2: []
    }
  },
  created () {
    this.tableData2 = window.MOCK_DATA_LIST.slice(0, 50)
  }
}
</script>
```
:::
