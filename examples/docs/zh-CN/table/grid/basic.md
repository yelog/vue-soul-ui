## 基础

### 效果
:::demo
```html
<template>
<s-grid
  border
  resizable
  height="300"
  :columns="tableColumn"
  :data="tableData"></s-grid>
</template>
<script>
export default {
  data () {
    return {
      tableColumn: [
        { type: 'index', width: 50 },
        { field: 'name', title: '名字' },
        { field: 'sex', title: '性别'},
        { field: 'address', title: '地址'}
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 100)
  }
}
</script>
```
:::

### 分组表头、底部合计
:::demo
```html
<template>
<s-grid
  border
  stripe
  resizable
  show-footer
  height="500"
  :footer-method="footerMethod"
  :columns="tableColumn2"
  :data="tableData"></s-grid>
</template>
<script>
export default {
  data () {
    return {
      tableColumn2: [
        { type: 'index', width: 50 },
        {
          title: '基本信息',
          children: [
            { field: 'name', title: 'Name' },
            {
              title: '其他信息',
              children: [
                { field: 'rate', title: 'Rate' },
                { field: 'age', title: 'Age' }
              ]
            },
            { field: 'sex', title: 'Sex' }
          ]
        },
        { field: 'address', title: 'Address', showOverflow: true }
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 100)
  },
  methods: {
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }
          if (['age', 'rate'].includes(column.property)) {
            return this.$utils.sum(data, column.property)
          }
          return null
        })
      ]
    }
  }
}
</script>
```
:::
