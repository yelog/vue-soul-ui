## 虚拟加载　

### 纵向虚拟加载
通过设置 `optimization.scrollY` 来设置纵向虚拟加载

对于多选 `type=selection` 当数据量海量时应该绑定 `checkField` 属性渲染速度更快

大数据不建议使用双向绑定的 `data` 属性（vue 监听会大数据会短暂的卡顿），建议使用 `loadData/reloadData` 函数

如下 **一万行** 数据加载
:::demo
```html
<template>
<s-button @click="getSelectRecords">获取选中行</s-button>
<s-table
  ref="myTable"
  border
  resizable
  show-overflow
  height="300"
  :loading="loading"
  :select-config="{checkField: 'checked', trigger: 'row'}"
  :optimization ="{scrollY: {gt: 500, oSize: 10, rSize: 30}}">
  <s-table-column type="selection" width="60" fixed="left"></s-table-column>
  <s-table-column type="index" width="100" fixed="left"></s-table-column>
  <s-table-column field="name" title="Name" sortable width="200"></s-table-column>
  <s-table-column field="age" title="Age" width="200"></s-table-column>
  <s-table-column field="sex" title="Sex" width="200"></s-table-column>
  <s-table-column field="rate" title="Rate" width="200"></s-table-column>
  <s-table-column field="region" title="Region" width="200"></s-table-column>
  <s-table-column field="time" title="Time" width="200"></s-table-column>
  <s-table-column field="address" title="Address" width="300" show-overflow></s-table-column>
  <s-table-column field="updateTime" title="UpdateTime" width="200"></s-table-column>
  <s-table-column field="createTime" title="CreateTime" width="200"></s-table-column>
  <s-table-column field="attr1" title="Attr1" width="200"></s-table-column>
  <s-table-column field="attr2" title="Attr2" width="200"></s-table-column>
  <s-table-column field="attr3" title="Attr3" width="200"></s-table-column>
  <s-table-column field="attr4" title="Attr4" width="200"></s-table-column>
  <s-table-column field="attr5" title="Attr5" width="200"></s-table-column>
  <s-table-column field="attr6" title="Attr6" width="200"></s-table-column>
  <s-table-column field="attr7" title="Attr7" width="200"></s-table-column>
  <s-table-column field="attr8" title="Attr8" width="200"></s-table-column>
  <s-table-column field="name" title="Name" width="200"></s-table-column>
  <s-table-column field="attr9" title="Attr9" width="200" ></s-table-column>
  <s-table-column field="createTime" title="CreateTime" width="200" fixed="right" :formatter="['toDateString', 'yyyy-MM-dd']" sortable></s-table-column>
</s-table>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      tableData: []
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      let tableData = window.MOCK_DATA_LIST.slice(0, 10000)
      // 阻断 vue 对大数组的双向绑定，大数据性能翻倍提升
      if (this.$refs.myTable) {
        this.$refs.myTable.loadData(tableData)
      }
      this.loading = false
    }, 1000)
  },
  methods: {
    getSelectRecords() {
      console.log(this.$refs.myTable.getSelectRecords())
    }
  }
}
</script>
```
:::

<table>
    <thead>
       <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
       </tr>
    </thead>
    <tbody>
        <tr>
            <td>gt</td>
            <td>指定大于多少范围时自动启动虚拟滚动（启用 Y 虚拟滚动，必须固定所有行高，否则无法兼容）</td>
            <td>Number</td>
            <td>500</td>
        </tr>
        <tr>
            <td>oSize</td>
            <td>当剩余数据少于指定范围时触发重新渲</td>
            <td>Number</td>
            <td>25</td>
        </tr>
        <tr>
            <td>rSize</td>
            <td>每次渲染条数</td>
            <td>Number</td>
            <td>70</td>
        </tr>
        <tr>
            <td>vSize</td>
            <td>指定可视区域条数</td>
            <td>Number</td>
            <td>默认自动计算</td>
        </tr>
        <tr>
            <td>rHeight</td>
            <td>指定行高</td>
            <td>Number</td>
            <td>默认自动计算</td>
        </tr>
        <tr>
            <td>adaptive</td>
            <td>自动适配最优的渲染方式</td>
            <td>Boolean</td>
            <td>true</td>
        </tr>
    </tbody>
</table>
