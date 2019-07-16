### 分页

如果要支持动态序号，可以通过 `start-index` 属性设置起始值

如果要支持保留选中状态，可以通过设置 `select-config` 的 `reserve` 属性

配置 `reserve` 属性时，必须设置 `row-id` 或者 `row-key`
:::demo
```html
<template>
<s-table
  border
  show-overflow
  ref="myTable"
  height="460"
  row-id="id"
  :loading="loading"
  :start-index="(tablePage.currentPage - 1) * tablePage.pageSize"
  :select-config="{reserve: true}"
  :data.sync="tableData">
  <s-table-column type="selection" width="60"></s-table-column>
  <s-table-column type="index" title="序号" width="60"></s-table-column>
  <s-table-column field="name" title="Name" sortable></s-table-column>
  <s-table-column field="sex" title="Sex"></s-table-column>
  <s-table-column field="age" title="Age"></s-table-column>
  <s-table-column field="rate" title="Rate"></s-table-column>
</s-table>

<s-pager
  :loading="loading"
  :current-page="tablePage.currentPage"
  :page-size="tablePage.pageSize"
  :total="tablePage.totalResult"
  :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
  @page-change="handlePageChange">
</s-pager>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      tableData: [],
      tablePage: {
        currentPage: 1,
        pageSize: 10,
        totalResult: 0
      }
    }
  },
  created () {
    this.findList()
  },
  methods: {
    findList () {
      this.loading = true
      this.XEAjax.doGet(`/api/user/page/list/${this.tablePage.pageSize}/${this.tablePage.currentPage}`, this.formData).then(response => {
        let { page, result } = response.data
        this.tableData = result
        this.tablePage.totalResult = page.totalResult
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage.currentPage = currentPage
      this.tablePage.pageSize = pageSize
      this.findList()
    }
  }
}
</script>

```
:::

