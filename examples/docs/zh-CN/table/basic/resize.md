### 开启拖动
:::demo 通过设置 `resizable` 属性启用列宽拖动功能
```html
<template>
<s-table
  border
  resizable
  highlight-hover-row
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" width="100"></s-table-column>
  <s-table-column field="sex" title="Sex" width="100"></s-table-column>
  <s-table-column field="age" title="Age" width="100"></s-table-column>
  <s-table-column field="time" title="Time" width="300"></s-table-column>
  <s-table-column field="address" title="Address" width="300" show-overflow></s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
  }
}
</script>
```
:::

### 固定列宽拖动
:::demo
```html
<template>
<s-table
  border
  resizable
  show-overflow
  show-header-overflow
  :data.sync="tableData">
  <s-table-column type="index" width="60" fixed="left"></s-table-column>
  <s-table-column field="name" title="Name" width="100" fixed="left"></s-table-column>
  <s-table-column field="sex" title="Sex" width="100" fixed="left"></s-table-column>
  <s-table-column field="age" title="Age" width="100"></s-table-column>
  <s-table-column field="atrr1" title="atrr1" width="200"></s-table-column>
  <s-table-column field="atrr2" title="atrr2" width="200"></s-table-column>
  <s-table-column field="atrr3" title="atrr3" width="200"></s-table-column>
  <s-table-column field="atrr4" title="atrr4" width="200"></s-table-column>
  <s-table-column field="date" title="Date" width="100" ></s-table-column>
  <s-table-column field="time" title="Time" width="100" fixed="right"></s-table-column>
  <s-table-column field="address" title="Address" width="100" fixed="right"></s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
  }
}
</script>
```
:::

### 复杂表头拖动（只允许列拖动）

:::demo
```html
<template>
<s-table
  border
  resizable
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
  <s-table-column title="其他信息">
    <s-table-column field="age" title="Age" width="100" fixed="right" show-overflow></s-table-column>
    <s-table-column field="address" title="Address" width="100" fixed="right" show-overflow></s-table-column>
  </s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
  }
}
</script>
```
:::demo
