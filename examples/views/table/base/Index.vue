<template>
  <div>
    <p>默认的序号从 1 开始，你也可以自定义 <table-column-api-link prop="index-method"/> 函数</p>

    <s-table
      border
      highlight-hover-row
      :data.sync="tableData">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name" sortable></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
    </s-table>

    <p>使用 <table-column-api-link prop="index-method"/> 自定义序号</p>

    <s-table
      border
      height="300"
      :data.sync="tableData2">
      <s-table-column type="index" title="序号" width="60" :index-method="indexMethod"></s-table-column>
      <s-table-column field="name" title="Name" sortable></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
    </s-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      tableData2: []
    }
  },
  created () {
    let list = window.MOCK_DATA_LIST.slice(0, 4)
    this.tableData = list
    this.tableData2 = window.MOCK_DATA_LIST.slice(0, 50)
  },
  methods: {
    indexMethod ({ rowIndex }) {
      return rowIndex * 2
    }
  }
}
</script>
