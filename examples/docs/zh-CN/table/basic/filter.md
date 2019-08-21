### 通过设置 filters 属性和 filter-method 方法可以支持列筛选功能
如果是服务端筛选，只需加上 remote-filter 和 filter-change 事件就可以实现

还可以使用 slot filter 自定义筛选模板
:::demo
```html
<template>
<s-button @click="getFilterData" >获取筛选后的数据</s-button>
<s-button @click="changeFilter" >修改筛选条件</s-button>
<s-table
  border
  highlight-hover-row
  height="400"
  ref="myTable"
  @filter-change="filterChange"
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
    getFilterData () {
      this.$message(`当表格数据条数为：${this.$refs.myTable.getTableData(true).visibleData.length}`)
    },
    filterChange ({column,property,values,datas,filters}) {
      console.log(filters)
      this.$message('我是筛选成功后的触发方法 filter-change ！')
    },
    changeFilter() {
      console.log()
      this.sexFilter = [{label: 'Man1', value: '1'}, {label: 'Woman1', value: '0'}]
    }
  }
}
</script>
```
:::
