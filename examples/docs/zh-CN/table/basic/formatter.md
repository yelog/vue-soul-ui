### 自定义格式化方法
:::demo
```html
<template>
<s-table
  border
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" sortable></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="time" title="Time" :formatter="formatTime"></s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
  },
  methods: {
    formatTime ({ cellValue, row, column }) {
      const date = new Date(cellValue);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const strDate = date.getDate().toString().padStart(2, '0');
      return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
  }
}
</script>

```
:::

### 内置格式化方法
:::demo
```html
<template>
<s-table
  border
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="date" title="转日期" formatter="toDateString"></s-table-column>
  <s-table-column field="time" title="转日期格式" :formatter="['toDateString', 'yyyy-MM-dd']"></s-table-column>
  <s-table-column field="num" title="转整数" formatter="toInteger"></s-table-column>
  <s-table-column field="num" title="截取两位小数" :formatter="['toFixedString', 2]"></s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
  }
}
</script>

```
:::
