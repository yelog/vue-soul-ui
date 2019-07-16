### 设置 type="selection" 开启多选列
:::demo
```html
<template>
<s-toolbar>
  <template v-slot:buttons>
    <s-button @click="$refs.myTable.toggleRowSelection(tableData[1])">切换第二行选中</s-button>
    <s-button @click="$refs.myTable.setSelection([tableData[2], tableData[3]], true)">设置第三、四行选中</s-button>
    <s-button @click="$refs.myTable.setAllSelection(true)">设置所有行选中</s-button>
    <s-button @click="$refs.myTable.clearSelection()">清除所有行选中</s-button>
  </template>
</s-toolbar>

<s-table
  ref="myTable"
  border
  height="300"
  :data.sync="tableData"
  @select-all="selectAllEvent"
  @select-change="selectChangeEvent">
  <s-table-column type="selection" width="60"></s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 10)
  },
  methods: {
    selectAllEvent ({ checked }) {
      console.log(checked ? '所有勾选事件' : '所有取消事件')
    },
    selectChangeEvent ({ checked, row }) {
      console.log(checked ? '勾选事件' : '取消事件')
    }
  }
}
</script>
```
:::

### 通过 checkMethod 方法控制是否允许点击 CheckBox 勾选，还可以配置 labelField 列显示属性
:::demo
```html
<template>
<s-toolbar>
  <template v-slot:buttons>
    <s-button @click="$refs.myTable.toggleRowSelection(tableData[1])">切换第二行选中</s-button>
    <s-button @click="$refs.myTable.setSelection([tableData[2], tableData[3]], true)">设置第三、四行选中</s-button>
    <s-button @click="$refs.myTable.setAllSelection(true)">设置所有行选中</s-button>
    <s-button @click="$refs.myTable.clearSelection()">清除所有行选中</s-button>
  </template>
</s-toolbar>

<s-table
  ref="myTable"
  border
  height="300"
  :data.sync="tableData"
  :select-config="{labelField: 'name', checkMethod}">
  <s-table-column type="selection" title="All"></s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 10)
  },
  methods: {
    checkMethod ({ row }) {
      return row.age > 26
    }
  }
}
</script>
```
:::


### 行点击方式，使用渲染最快的 checkField 属性绑定方式
:::demo 通过配置 `trigger` 设置触发源
```html
<template>
<s-toolbar>
  <template v-slot:buttons>
    <s-button @click="$refs.myTable.toggleRowSelection(tableData[1])">切换第二行选中</s-button>
    <s-button @click="$refs.myTable.setSelection([tableData[2], tableData[3]], true)">设置第三、四行选中</s-button>
    <s-button @click="$refs.myTable.setAllSelection(true)">设置所有行选中</s-button>
    <s-button @click="$refs.myTable.clearSelection()">清除所有行选中</s-button>
  </template>
</s-toolbar>

<s-table
  border
  highlight-hover-row
  ref="myTable"
  height="300"
  :data.sync="tableData"
  :select-config="{checkField: 'checked', trigger: 'row'}">
  <s-table-column type="selection" width="60"></s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 10)
  }
}
</script>
```
:::

### 多选可单选同时使用
:::demo 通过配置 `trigger` 设置触发源
```html
<template>
<s-table
  border
  highlight-hover-row
  ref="myTable"
  height="300"
  :data.sync="tableData"
  :radio-config="{labelField: 'name'}">
  <s-table-column type="selection" width="60"></s-table-column>
  <s-table-column type="radio" width="200" title="Name"></s-table-column>
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
    this.tableData = window.MOCK_DATA_LIST.slice(0, 10)
  }
}
</script>
```
:::
