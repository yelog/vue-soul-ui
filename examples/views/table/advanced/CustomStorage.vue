<template>
  <div>
    <p>显示/隐藏列功能，通过设置 <toolbar-api-link prop="id"/> 和 <toolbar-api-link prop="setting"/>={storage: true} 参数开启将列个性化 localStorage 保存功能</p>
    <p>也可以通过配合 <table-api-link prop="reloadCustoms"/> 函数实现服务端保存</p>

    <s-toolbar id="toolbar_demo3" :setting="{storage: true}">
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
        <s-toolbar id="toolbar_demo3" :setting="{storage: true}">
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
    let list = window.MOCK_DATA_LIST.slice(0, 20)
    this.tableData = list
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
