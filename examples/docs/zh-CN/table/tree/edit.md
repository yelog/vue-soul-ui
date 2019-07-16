## 可编辑树形表格
:::demo
````html
<template>
<s-toolbar>
  <template v-slot:buttons>
    <s-button @click="$refs.myTable.toggleTreeExpansion(tableData[0], true)">切换第一个</s-button>
    <s-button @click="$refs.myTable.setTreeExpansion(tableData[2], true)">展开第三个</s-button>
    <s-button @click="$refs.myTable.setAllTreeExpansion(true)">展开所有</s-button>
    <s-button @click="$refs.myTable.clearTreeExpand()">关闭所有</s-button>
  </template>
</s-toolbar>

<s-table
  resizable
  ref="myTable"
  row-id="id"
  :tree-config="{children: 'children'}"
  :edit-config="{trigger: 'click', mode: 'row'}"
  :select-config="{labelField: 'id'}"
  :data.sync="tableData">
  <s-table-column type="selection" title="ID" tree-node></s-table-column>
  <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="size" title="Size" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="type" title="Type" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="date" title="Date" :edit-render="{name: 'input'}"></s-table-column>
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
````
:::
