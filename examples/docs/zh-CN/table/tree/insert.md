## 插入数据
:::demo
```html
<template>
<s-toolbar :data="tableData" setting>
  <template v-slot:buttons>
    <s-button @click="insertEvent()">插入第一行</s-button>
    <s-button @click="insertAtEvent()">插入指定行</s-button>
    <s-button @click="getInsertEvent">获取新增</s-button>
  </template>
</s-toolbar>

<s-table
  resizable
  ref="myTable"
  :tree-config="treeConfig"
  :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
  :data="tableData">
  <s-table-column type="selection" width="120" tree-node></s-table-column>
  <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="size" title="Size" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="type" title="Type" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="date" title="Date" :edit-render="{name: 'input'}"></s-table-column>
</s-table>
<script>
export default {
  data () {
    return {
      tableData: [],
      treeConfig: {
        children: 'children'
      }
    }
  },
  created () {
    this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)
  },
  methods: {
    insertEvent () {
      let myTable = this.$refs.myTable
      myTable.createRow({
        name: '新数据',
        date: this.XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),
        isNew: true
      }).then(newRow => {
        // 插入到第一行
        this.tableData.unshift(newRow)
        myTable.refreshData().then(() => myTable.setActiveRow(newRow))
      })
    },
    insertAtEvent () {
      let myTable = this.$refs.myTable
      myTable.createRow({
        name: '新数据',
        date: this.XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),
        isNew: true
      }).then(newRow => {
        // 插入到 id 为 11000 的节点位置中
        let rowNode = this.XEUtils.findTree(this.tableData, item => item.id === '11000', this.treeConfig)
        if (rowNode) {
          rowNode.items.splice(rowNode.index, 0, newRow)
          myTable.refreshData().then(() => myTable.setActiveRow(newRow))
        }
      })
    },
    getInsertEvent () {
      let insertRecords = this.XEUtils.filterTree(this.tableData, item => item.isNew, this.treeConfig)
      this.$XModal.alert(insertRecords.length)
    }
  }
}
</script>
</template>
```
:::
