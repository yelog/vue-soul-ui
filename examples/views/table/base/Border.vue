<template>
  <div>
    <p>带边框的表格，通过设置 <table-api-link prop="border"/> 参数</p>

    <s-table
      border
      :data.sync="tableData">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tableData: [],
      demoCodes: [
        `
        <s-table
          border
          :data.sync="tableData">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name"></s-table-column>
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
          <s-table-column field="address" title="Address" show-overflow></s-table-column>
        </s-table>
        `,
        `
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
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
