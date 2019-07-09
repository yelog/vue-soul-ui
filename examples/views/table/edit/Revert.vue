<template>
  <div>
    <p>调用 <table-api-link prop="revert"/> 还原数据</p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button @click="$refs.xTable.revert()">还原全部</s-button>
        <s-button @click="$refs.xTable.removeSelecteds()">删除选中</s-button>
      </template>
    </s-toolbar>

    <s-table
      ref="xTable"
      border
      show-overflow
      :data.sync="tableData"
      :edit-config="{key: 'id', trigger: 'click', mode: 'cell', showStatus: true}">
      <s-table-column type="selection" width="60"></s-table-column>
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="age" title="Age" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column title="操作">
        <template v-slot="{ row }">
          <s-button @click="$refs.xTable.revert(row)">还原</s-button>
        </template>
      </s-table-column>
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
            <s-button @click="$refs.xTable.revert()">还原全部</s-button>
            <s-button @click="$refs.xTable.removeSelecteds()">删除选中</s-button>
          </template>
        </s-toolbar>

        <s-table
          ref="xTable"
          border
          show-overflow
          :data.sync="tableData"
          :edit-config="{key: 'id', trigger: 'click', mode: 'cell', showStatus: true}">
          <s-table-column type="selection" width="60"></s-table-column>
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="age" title="Age" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column title="操作">
            <template v-slot="{ row }">
              <s-button @click="$refs.xTable.revert(row)">还原</s-button>
            </template>
          </s-table-column>
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
    let list = window.MOCK_DATA_LIST.slice(0, 6)
    this.tableData = list
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
