<template>
  <div>
    <p>多选树表格</p>

    <s-table
      resizable
      row-id="id"
      :tree-config="{children: 'children'}"
      :data.sync="tableData"
      @select-change="selectChangeEvent">
      <s-table-column type="selection" prop="checked" width="120" tree-node></s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="size" title="Size"></s-table-column>
      <s-table-column field="type" title="Type"></s-table-column>
      <s-table-column field="date" title="Date"></s-table-column>
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
import XEUtils from 'xe-utils'

export default {
  data () {
    return {
      tableData: [],
      demoCodes: [
        `
        <s-table
          resizable
          row-id="id"
          :tree-config="{children: 'children'}"
          :data.sync="tableData"
          @select-change="selectChangeEvent">
          <s-table-column type="selection" tree-node></s-table-column>
          <s-table-column field="name" title="Name"></s-table-column>
          <s-table-column field="size" title="Size"></s-table-column>
          <s-table-column field="type" title="Type"></s-table-column>
          <s-table-column field="date" title="Date"></s-table-column>
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
          },
          methods: {
            selectChangeEvent ({ selection }) {
              console.info(\`勾选\${selection.length}个树形节点\`, selection)
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = XEUtils.clone(window.MOCK_TREE_DATA_LIST, true)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    selectChangeEvent ({ selection }) {
      console.info(`勾选${selection.length}个树形节点`, selection)
    }
  }
}
</script>
