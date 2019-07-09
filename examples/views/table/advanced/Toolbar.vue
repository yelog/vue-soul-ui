<template>
  <div>
    <p>使用自带的工具栏 <toolbar-api-link name="s-toolbar"/>，配合模板可以非常简单的实现强大的功能</p>
    <p>组成一套完整的表格，工具栏和表格必须是上下相邻关系，不允许更换位置（如果是复杂的布局不建议使用工具栏，自行写模板即可）</p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button>按钮1</s-button>
        <s-button>按钮2</s-button>
      </template>
    </s-toolbar>

    <s-table
      border
      height="400"
      :data.sync="tableData">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="role" title="Role"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="rate" title="Rate"></s-table-column>
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
        <s-toolbar>
          <template v-slot:buttons>
            <s-button>按钮1</s-button>
            <s-button>按钮2</s-button>
          </template>
        </s-toolbar>

        <s-table
          border
          height="400"
          :data.sync="tableData">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name"></s-table-column>
          <s-table-column field="role" title="Role"></s-table-column>
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 20)
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 20)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
