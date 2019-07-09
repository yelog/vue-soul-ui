<template>
  <div>
    <p>设置 <table-api-link prop="edit-config"/>={trigger: 'click', mode: 'cell', showStatus: true} 开启编辑状态显示功能</p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button @click="getInsertEvent">获取新增</s-button>
        <s-button @click="getRemoveEvent">获取删除</s-button>
        <s-button @click="getUpdateEvent">获取修改</s-button>
      </template>
    </s-toolbar>

    <s-table
      ref="xTable"
      border
      show-overflow
      :data.sync="tableData"
      :edit-config="{key: 'id', trigger: 'click', mode: 'cell', showStatus: true}">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></s-table-column>
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
        <s-toolbar>
          <template v-slot:buttons>
            <s-button @click="getInsertEvent">获取新增</s-button>
            <s-button @click="getRemoveEvent">获取删除</s-button>
            <s-button @click="getUpdateEvent">获取修改</s-button>
          </template>
        </s-toolbar>

        <s-table
          ref="xTable"
          border
          show-overflow
          :data.sync="tableData"
          :edit-config="{key: 'id', trigger: 'click', mode: 'cell', showStatus: true}">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></s-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
          },
          methods: {
            getInsertEvent () {
              let insertRecords = this.$refs.xTable.getInsertRecords()
              this.$XMsg.alert(insertRecords.length)
            },
            getRemoveEvent () {
              let removeRecords = this.$refs.xTable.getRemoveRecords()
              this.$XMsg.alert(removeRecords.length)
            },
            getUpdateEvent () {
              let updateRecords = this.$refs.xTable.getUpdateRecords()
              this.$XMsg.alert(updateRecords.length)
            }
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
  },
  methods: {
    getInsertEvent () {
      let insertRecords = this.$refs.xTable.getInsertRecords()
      this.$XMsg.alert(insertRecords.length)
    },
    getRemoveEvent () {
      let removeRecords = this.$refs.xTable.getRemoveRecords()
      this.$XMsg.alert(removeRecords.length)
    },
    getUpdateEvent () {
      let updateRecords = this.$refs.xTable.getUpdateRecords()
      this.$XMsg.alert(updateRecords.length)
    }
  }
}
</script>
