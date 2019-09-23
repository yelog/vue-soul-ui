## 固定列

:::demo
```html
<template>
<s-toolbar>
  <template v-slot:buttons>
    <s-button @click="$refs.xTree.toggleTreeExpansion(tableData[0], true)">切换第一个</s-button>
    <s-button @click="$refs.xTree.setTreeExpansion(tableData[2], true)">展开第三个</s-button>
    <s-button @click="$refs.xTree.setAllTreeExpansion(true)">展开所有</s-button>
    <s-button @click="$refs.xTree.clearTreeExpand()">关闭所有</s-button>
  </template>
</s-toolbar>

<s-table
  resizable
  ref="xTree"
  :tree-config="{children: 'children'}"
  :select-config="{labelField: 'id'}"
  :data="tableData">
  <s-table-column type="selection" title="ID" fixed="left" width="200" tree-node></s-table-column>
  <s-table-column field="name" title="Name" width="300"></s-table-column>
  <s-table-column field="size" title="Size" width="300"></s-table-column>
  <s-table-column field="type" title="Type" width="300"></s-table-column>
  <s-table-column field="date" title="Date" width="300"></s-table-column>
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
