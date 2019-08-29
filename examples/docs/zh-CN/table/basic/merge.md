### 行合并
:::demo
```html
<template>
<s-table
  border
  max-height="400"
  :span-method="colspanMethod"
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" sortable></s-table-column>
  <s-table-column field="role" title="Role" sortable></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
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
    colspanMethod ({ row, rowIndex, column, columnIndex, data }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 2) {
          return {
            rowspan: 1,
            colspan: 2
          }
        } else if (columnIndex === 3) {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>
```
:::

### 列合并
:::demo
```html
<template>
<s-table
  ref="myTable"
  border
  max-height="400"
  :span-method="rowspanMethod"
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="key" title="Key"></s-table-column>
  <s-table-column field="language" title="Language" :filters="[{label: '中文', value: 'zh_CN'}, {label: 'English', value: 'en_US'}]"></s-table-column>
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
    rowspanMethod ({ row, $rowIndex, column, data }) {
      let prevRow = data[$rowIndex - 1]
      let nextRow = data[$rowIndex + 1]
      if (column.property === 'key') {
        if (prevRow && prevRow.key === row.key) {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
        if (nextRow && nextRow.key === row.key) {
          return {
            rowspan: 2,
            colspan: 1
          }
        }
      }
    }
  }
}
</script>
```
:::
