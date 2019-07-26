### 内容或表头超出显示
:::demo 给某列设置 `show-header-overflow` 及 `show-overflow`
```html
<template>
    <s-table
        resizable
        border
        highlight-hover-row
        :data.sync="tableData">
        <s-table-column type="index" width="60"></s-table-column>
        <s-table-column field="address" title="超过隐藏时显示为省略号————————————" show-header-overflow show-overflow></s-table-column>
        <s-table-column field="date" title="内容超过隐藏时显示为省略号并用原生 title 显示" show-overflow="title"></s-table-column>
        <s-table-column field="age" title="表头超过隐藏时显示为省略号并 tooltip 显示——————————————" show-header-overflow></s-table-column>
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

### 全表应用超出隐藏
:::demo 在 `s-table` 中添加属性 `show-overflow` 及 `show-header-overflow`
```html
<template>
    <s-table
        show-header-overflow
        show-overflow
        resizable
        border
        highlight-hover-row
        :data.sync="tableData">
        <s-table-column type="index" width="60"></s-table-column>
        <s-table-column field="address" title="超过隐藏时显示为省略号————————————" ></s-table-column>
        <s-table-column field="date" title="内容超过隐藏时显示为省略号并用原生 title 显示"></s-table-column>
        <s-table-column field="age" title="表头超过隐藏时显示为省略号并 tooltip 显示——————————————"></s-table-column>
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