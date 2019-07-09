<template>
  <div>
    <p>可编辑树表格</p>

    <s-table
      resizable
      :tree-config="{key: 'id', children: 'children'}"
      :edit-config="{key: 'id', trigger: 'click', mode: 'row'}"
      :data.sync="tableData">
      <s-table-column type="selection" width="120" tree-node></s-table-column>
      <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="size" title="Size" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="type" title="Type" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="date" title="Date" :edit-render="{name: 'input'}"></s-table-column>
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
          resizable
          :tree-config="{key: 'id', children: 'children'}"
          :edit-config="{key: 'id', trigger: 'click', mode: 'row'}"
          :data.sync="tableData">
          <s-table-column type="selection" prop="checked" width="120" tree-node></s-table-column>
          <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="size" title="Size" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="type" title="Type" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="date" title="Date" :edit-render="{name: 'input'}"></s-table-column>
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
            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
