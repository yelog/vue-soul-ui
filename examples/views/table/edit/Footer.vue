<template>
  <div>
    <p>统计编辑列的表尾合计</p>
    <p>对于某些场景下如果需要频繁计算的可以手动调用 <table-api-link prop="updateFooter"/> 函数</p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button @click="insertEvent">新增</s-button>
        <s-button @click="getInsertEvent">获取新增</s-button>
      </template>
    </s-toolbar>

    <s-table
      border
      show-footer
      show-overflow
      highlight-hover-row
      ref="xTable"
      height="400"
      class="editable-footer"
      :footer-method="footerMethod"
      :footer-cell-class-name="footerCellClassName"
      :data.sync="tableData"
      :edit-config="{key: 'id', trigger: 'click', mode: 'row'}">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="age" title="Age" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="date" title="Date" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="address" title="Address" :edit-render="{name: 'input'}"></s-table-column>
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
            <s-button @click="insertEvent">新增</s-button>
            <s-button @click="getInsertEvent">获取新增</s-button>
          </template>
        </s-toolbar>

        <s-table
          border
          show-footer
          show-overflow
          highlight-hover-row
          ref="xTable"
          height="400"
          class="editable-footer"
          :footer-method="footerMethod"
          :footer-cell-class-name="footerCellClassName"
          :data.sync="tableData"
          :edit-config="{key: 'id', trigger: 'click', mode: 'row'}">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="age" title="Age" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="date" title="Date" :edit-render="{name: 'input'}"></s-table-column>
          <s-table-column field="address" title="Address" :edit-render="{name: 'input'}"></s-table-column>
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
          },
          methods: {
            footerCellClassName ({ $rowIndex, column, columnIndex }) {
              if (columnIndex === 0) {
                if ($rowIndex === 0) {
                  return 'col-blue'
                } else {
                  return 'col-red'
                }
              }
            },
            footerMethod ({ columns, data }) {
              return [
                columns.map((column, columnIndex) => {
                  if (columnIndex === 0) {
                    return '平均'
                  }
                  if (['age'].includes(column.property)) {
                    return XEUtils.mean(data, column.property)
                  }
                  return '-'
                }),
                columns.map((column, columnIndex) => {
                  if (columnIndex === 0) {
                    return '和值'
                  }
                  if (['age'].includes(column.property)) {
                    return XEUtils.sum(data, column.property)
                  }
                  return '-'
                })
              ]
            },
            insertEvent () {
              let record = {
                name: 'New name'
              }
              this.$refs.xTable.insert(record).then(({ row }) => this.$refs.xTable.setActiveCell(row, 'age'))
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
    let list = window.MOCK_DATA_LIST.slice(0, 20)
    this.tableData = list
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    footerCellClassName ({ $rowIndex, column, columnIndex }) {
      if (columnIndex === 0) {
        if ($rowIndex === 0) {
          return 'col-blue'
        } else {
          return 'col-red'
        }
      }
    },
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }
          if (['age'].includes(column.property)) {
            return XEUtils.mean(data, column.property)
          }
          return '-'
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }
          if (['age'].includes(column.property)) {
            return XEUtils.sum(data, column.property)
          }
          return '-'
        })
      ]
    },
    insertEvent () {
      let record = {
        name: 'New name'
      }
      this.$refs.xTable.insert(record).then(({ row }) => this.$refs.xTable.setActiveCell(row, 'age'))
    },
    getInsertEvent () {
      let insertRecords = this.$refs.xTable.getInsertRecords()
      this.$XMsg.alert(insertRecords.length)
    }
  }
}
</script>

<style>
.editable-footer .s-footer--column.col-blue {
  background-color: #2db7f5;
  color: #fff;
}
.editable-footer .s-footer--column.col-red {
  background-color: red;
  color: #fff;
}
</style>
