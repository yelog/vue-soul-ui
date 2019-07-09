<template>
  <div>
    <p>调用 <table-api-link prop="insert"/>、<table-api-link prop="insertAt"/> 函数插入数据</p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button @click="$refs.xTable.insert({name: Date.now()})">在第1行插入</s-button>
        <s-button @click="insertEvent">在第3行插入并激活 Sex 单元格</s-button>
        <s-button @click="$refs.xTable.insertAt({name: Date.now()}, -1)">在最后行插入</s-button>
        <s-button @click="getInsertEvent">获取新增</s-button>
      </template>
    </s-toolbar>

    <s-table
      border
      show-overflow
      ref="xTable"
      height="400"
      :data.sync="tableData"
      :edit-config="{key: 'id', trigger: 'click', mode: 'cell'}">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="age" title="Age" :edit-render="{name: 'input'}"></s-table-column>
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
            <s-button @click="$refs.xTable.insert({name: Date.now()})">在第1行插入</s-button>
            <s-button @click="insertEvent">在第3行插入并激活 Sex 单元格</s-button>
            <s-button @click="$refs.xTable.insertAt({name: Date.now()}, -1)">在最后行插入</s-button>
            <s-button @click="getInsertEvent">获取新增</s-button>
          </template>
        </s-toolbar>

        <s-table
          border
          show-overflow
          ref="xTable"
          height="400"
          :data.sync="tableData"
          :edit-config="{key: 'id', trigger: 'click', mode: 'cell'}">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="age" title="Age" :edit-render="{name: 'input'}"></s-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
          },
          methods: {
            insertEvent () {
              let record = {
                name: Date.now()
              }
              this.$refs.xTable.insertAt(record, this.tableData[2])
                .then(({ row }) => this.$refs.xTable.setActiveCell(row, 'sex'))
            },
            getInsertEvent () {
              let insertRecords = this.$refs.xTable.getInsertRecords()
              this.$XMsg.alert(insertRecords.length)
            }
          }
        }
        `
      ]
    }
  },
  created () {
    let list = window.MOCK_DATA_LIST.slice(0, 50)
    this.tableData = list
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    insertEvent () {
      let record = {
        name: Date.now()
      }
      this.$refs.xTable.insertAt(record, this.tableData[2])
        .then(({ row }) => this.$refs.xTable.setActiveCell(row, 'sex'))
    },
    getInsertEvent () {
      let insertRecords = this.$refs.xTable.getInsertRecords()
      this.$XMsg.alert(insertRecords.length)
    }
  }
}
</script>
