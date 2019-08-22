## 通过设置 filters 属性和 filter-method 方法可以支持列筛选功能
如果是服务端筛选，只需加上 remote-filter 和 filter-change 事件就可以实现

### 前端筛选
还可以使用 slot filter 自定义筛选模板
:::demo
```html
<template>
<s-button @click="getFilterData" >获取筛选后的数据</s-button>
<s-button @click="clearFilter" >清除筛选条件</s-button>
<s-button @click="changeFilter" >修改筛选条件</s-button>
<s-table
  border
  highlight-hover-row
  height="400"
  ref="myTable"
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" sortable :filters="[{label: 'id大于10', value: 10}, {label: 'id大于40', value: 40}]" :filter-method="filterNameMethod"></s-table-column>
  <s-table-column field="sex" title="Sex" sortable :filters="sexFilter"></s-table-column>
  <s-table-column field="age" title="Age" :filters="[{ data: '' }]" :filter-method="filterAgeMethod">
    <template v-slot:filter="{ column, context }">
      <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="context.changeMultipleOption($event, !!option.data, option)">
    </template>
  </s-table-column>
  <s-table-column field="time" title="Time" sortable></s-table-column>
</s-table>
</template>
<script>
export default {
  data () {
    return {
      tableData: [],
      sexFilter: [{label: 'Man', value: '1'}, {label: 'Woman', value: '0'}]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
  },
  methods: {
    filterNameMethod ({ value, row, column }) {
      return row.id >= value
    },
    filterAgeMethod ({ option, row }) {
      return row.age === Number(option.data)
    },
    // 获取筛选后的数据
    getFilterData () {
      this.$message(`当表格数据条数为：${this.$refs.myTable.getTableData(true).visibleData.length}`)
    },
    // 清除筛选条件
    clearFilter() {
      this.$refs.myTable.clearFilter()
    },
    // 修改筛选条件
    changeFilter() {
      this.sexFilter = [{label: 'Man1', value: '1'}, {label: 'Woman1', value: '0'}]
    }
  }
}
</script>
```
:::

### 后端筛选/筛选数据也来自于后台
:::demo
```html
<template>
<s-table
  border
  highlight-hover-row
  height="400"
  ref="myTable"
  @filter-change="filterChange"
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" sortable :filters="nameFilter"></s-table-column>
  <s-table-column field="sex" title="Sex" sortable ></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
  <s-table-column field="time" title="Time" sortable></s-table-column>
</s-table>
</template>
<script>
export default {
  data () {
    return {
      tableData: [],
      nameFilter: []
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
    
    // 这里直接拼装，实际自己从后台获取
    const names = []
    this.tableData.forEach(function(row) {
      if (names.indexOf(row.name) === -1) {
          names.push(row.name)
      }
    })
    
    this.nameFilter = names.map(name => {return {label: name, value: name}});
  },
  methods: {
    // 筛选后
    filterChange ({column,property,values,datas,filters}) {
      console.log(filters)
      this.$message('这时可以从后台获取筛选后的数据, 重新赋值tableData/nameFilter 筛选条件为 filters')
      
    },
    // 清除筛选条件
    clearFilter() {
      this.$refs.myTable.clearFilter()
    }
  }
}
</script>
```
:::
