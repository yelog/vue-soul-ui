<template>
  <div>
    <p>可编辑树表格，还可以通过手动调用展开收起</p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button @click="$refs.xTree.toggleTreeExpansion(tableData[0], true)">切换第一个</s-button>
        <s-button @click="$refs.xTree.setTreeExpansion(tableData[2], true)">展开第三个</s-button>
        <s-button @click="$refs.xTree.setAllTreeExpansion(true)">展开所有</s-button>
        <s-button @click="$refs.xTree.clearTreeExpand()">关闭所有</s-button>
      </template>
    </s-toolbar>

    <s-table
      resizable
      ref="xTree"
      row-id="id"
      :tree-config="{children: 'children'}"
      :edit-config="{trigger: 'click', mode: 'row'}"
      :select-config="{labelField: 'id'}"
      :data.sync="tableData">
      <s-table-column type="selection" title="ID" tree-node></s-table-column>
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
import XEUtils from 'xe-utils'

export default {
  data () {
    return {
      tableData: [],
      demoCodes: [
        `
        <s-toolbar>
          <template v-slot:buttons>
            <s-button @click="$refs.xTree.toggleTreeExpansion(tableData[0], true)">切换第一个</s-button>
            <s-button @click="$refs.xTree.setTreeExpansion(tableData[2], true)">展开第三个</s-button>
            <s-button @click="$refs.xTree.setAllTreeExpansion(true)">展开所有</s-button>
            <s-button @click="$refs.xTree.clearTreeExpand()">关闭所有</s-button>
          </template>
        </s-toolbar>

        <s-table
          resizable
          ref="xTree"
          row-id="id"
          :tree-config="{children: 'children'}"
          :edit-config="{trigger: 'click', mode: 'row'}"
          :select-config="{labelField: 'id'}"
          :data.sync="tableData">
          <s-table-column type="selection" title="ID" tree-node></s-table-column>
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
    this.tableData = XEUtils.clone(window.MOCK_TREE_DATA_LIST, true)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
