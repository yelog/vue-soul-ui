### 树形表格-单选
和普通表格开启方式一样
:::demo
```html
<template>
<s-table
  resizable
  highlight-current-row
  row-id="id"
  :tree-config="{children: 'children', trigger: 'row'}"
  :data.sync="tableData">
  <s-table-column type="radio" width="120" tree-node></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="size" title="Size"></s-table-column>
  <s-table-column field="type" title="Type"></s-table-column>
  <s-table-column field="date" title="Date"></s-table-column>
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
    this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)
  }
}
</script>

```
:::
### 树形表格-多选
:::demo
```html
<template>
<s-table
  resizable
  row-id="id"
  :tree-config="{children: 'children', trigger: 'row'}"
  :data.sync="tableData"
  @select-change="selectChangeEvent">
  <s-table-column type="selection" tree-node></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="size" title="Size"></s-table-column>
  <s-table-column field="type" title="Type"></s-table-column>
  <s-table-column field="date" title="Date"></s-table-column>
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
    this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)
  },
  methods: {
    selectChangeEvent ({ selection }) {
      console.info(`勾选${selection.length}个树形节点`, selection)
    }
  }
}
</script>

```
:::
