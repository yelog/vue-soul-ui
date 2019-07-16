### 基础表格
:::demo
```html
<s-table
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
</s-table>
<script>
export default {
    data () {
        return {
            tableData: [],
        }
    },
    created () {
        let list = window.MOCK_DATA_LIST.slice(0, 6)
        this.tableData = list
    }
}
</script>

```
:::
### 使用 `highlight-hover-row` 属性启用 hover 行高亮
:::demo
```html
<s-table
  highlight-hover-row
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
</s-table>
<script>
export default {
    data () {
        return {
            tableData: [],
        }
    },
    created () {
        let list = window.MOCK_DATA_LIST.slice(0, 6)
        this.tableData = list
    }
}
</script>
```
:::
### 使用 `stripe` 斑马线条纹
:::demo
```html
<s-table
  highlight-hover-row
  stripe
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
</s-table>
<script>
export default {
    data () {
        return {
            tableData: [],
        }
    },
    created () {
        let list = window.MOCK_DATA_LIST.slice(0, 6)
        this.tableData = list
    }
}
</script>
```
:::

### 使用 `border` 开启斑马线条纹
:::demo
```html
<s-table
  border
  highlight-hover-row
  stripe
  :data.sync="tableData">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
</s-table>
<script>
export default {
    data () {
        return {
            tableData: [],
        }
    },
    created () {
        let list = window.MOCK_DATA_LIST.slice(0, 6)
        this.tableData = list
    }
}
</script>
```
:::
