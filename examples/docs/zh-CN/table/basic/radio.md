### 设置 type="radio" 开启单选列
:::demo
```html
<template>
<s-toolbar>
  <template v-slot:buttons>
    <s-button @click="$refs.myTable.setRadioRow(tableData[1])">设置第二行选中</s-button>
    <s-button @click="$refs.myTable.clearRadioRow()">取消选中</s-button>
  </template>
</s-toolbar>

<s-table
  border
  ref="myTable"
  height="300"
  :data.sync="tableData"
  @radio-change="radioChangeEvent">
  <s-table-column type="radio" title="#" width="60"></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
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
    radioChangeEvent ({ row }) {
      console.log('单选事件')
    }
  }
}
</script>
```
:::

### 使用 highlight-current-row 高亮方式
:::demo
```html
<template>
<s-table
  border
  highlight-current-row
  height="300"
  :data.sync="tableData"
  @current-change="currentChangeEvent">
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
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
    currentChangeEvent ({ row }) {
      console.log('行选中事件')
    }
  }
}
</script>
```
:::


### 合用 以上两种方式 
:::demo 通过设置 `radio-config` 设置 `trigger: 'row'` 来合并使用，还可以设置 `labelField: 'name'` 在 radio 列显示字段数据
```html
<template>
<s-table
  border
  highlight-hover-row
  highlight-current-row
  height="300"
  :radio-config="{labelField: 'name', trigger: 'row'}"
  :data.sync="tableData">
  <s-table-column type="radio" title="同时显示字段" width="120"></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
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
  }
}
</script>
```
:::
