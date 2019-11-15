## Excel导出

### 效果
:::demo
```html
<template>
<s-toolbar>
    <template v-slot:buttons>
        <s-button @click="exportDataEvent">默认导出</s-button>
        <s-button @click="exportSelectEvent">导出选中</s-button>
        <s-button @click="exportDataEvent2">导出指定列 [name,sex]</s-button>
        <s-button @click="exportDataEvent3">导出指定第10-20行</s-button>
    </template>
</s-toolbar>
<s-table
  ref="myTable"
  highlight-hover-row
  height="300"
  :data="tableData">
  <s-table-column type="checkbox" width="60"></s-table-column>
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age" sortable></s-table-column>
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
  },
  methods: {
    exportDataEvent () {
      this.$refs.myTable.exportData({ type: 'csv' })
    },
    exportSelectEvent () {
      console.log(this.$refs.myTable.getSelectRecords())
      this.$refs.myTable.exportData({
        data: this.$refs.myTable.getSelectRecords()
      })
    },
    exportDataEvent2 () {
      this.$refs.myTable.exportData({
        type: 'csv',
        columnFilterMethod: column => ['name', 'sex'].includes(column.property)
      })
    },
    exportDataEvent3 () {
      this.$refs.myTable.exportData({
        type: 'csv',
        dataFilterMethod: (row, rowIndex) => rowIndex >= 9 && rowIndex < 20
      })
    }
  }
}
</script>

```
:::

### 完整配置

:::demo 完整配置
```html
<template>
<s-toolbar>
    <template v-slot:buttons>
        <s-button @click="exportDataEvent4">完整配置</s-button>
    </template>
</s-toolbar>
<s-table
  ref="myTable2"
  highlight-hover-row
  height="300"
  :data="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age" sortable></s-table-column>
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
  },
  methods: {
    exportDataEvent4 () {
      this.$refs.myTable2.exportData({
        filename: '自定义文件名',
        type: 'csv',
        original: true,
        isHeader: false,
        data: this.tableData.map(row => {
          row.date = this.$utils.toDateString(row.date, 'yyyy-MM-dd')
          return row
        })
      })
    }
  }
}
</script>
```
:::
