<template>
  <div>
    <p>合并列，通过参数 <table-api-link prop="span-method"/></p>
    <p>使用 $rowIndex 获取渲染中的行索引，rowIndex 指向真实数据的行索引，可以根据不同场景使用</p>

    <s-table
      border
      show-overflow
      max-height="400"
      :span-method="colspanMethod"
      :data.sync="tableData">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name" sortable></s-table-column>
      <s-table-column field="role" title="Role" sortable></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p>合并行</p>

    <s-table
      ref="xTable"
      border
      max-height="400"
      :span-method="rowspanMethod"
      :data.sync="tableData">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="key" title="Key"></s-table-column>
      <s-table-column field="content" title="Content"></s-table-column>
      <s-table-column field="language" title="Language" :filters="[{label: '中文', value: 'zh_CN'}, {label: 'English', value: 'en_US'}]"></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
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
          max-height="400"
          :span-method="colspanMethod"
          :data.sync="tableData">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name" sortable></s-table-column>
          <s-table-column field="role" title="Role" sortable></s-table-column>
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
          },
          methods: {
            colspanMethod ({ row, rowIndex, column, columnIndex, data }) {
              if (rowIndex % 2 === 0) {
                if (columnIndex === 2) {
                  return {
                    rowspan: 1,
                    colspan: 2
                  }
                } else if (columnIndex === 3) {
                  return {
                    rowspan: 0,
                    colspan: 0
                  }
                }
              }
            }
          }
        }
        `,
        `
        <s-table
          ref="xTable"
          border
          max-height="400"
          :span-method="rowspanMethod"
          :data.sync="tableData">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="key" title="Key"></s-table-column>
          <s-table-column field="language" title="Language" :filters="[{label: '中文', value: 'zh_CN'}, {label: 'English', value: 'en_US'}]"></s-table-column>
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
            rowspanMethod ({ row, $rowIndex, column, data }) {
              let prevRow = data[$rowIndex - 1]
              let nextRow = data[$rowIndex + 1]
              if (column.property === 'key') {
                if (prevRow && prevRow.key === row.key) {
                  return {
                    rowspan: 0,
                    colspan: 0
                  }
                }
                if (nextRow && nextRow.key === row.key) {
                  return {
                    rowspan: 2,
                    colspan: 1
                  }
                }
              }
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
    colspanMethod ({ row, rowIndex, column, columnIndex, data }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 2) {
          return {
            rowspan: 1,
            colspan: 2
          }
        } else if (columnIndex === 3) {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    rowspanMethod ({ row, $rowIndex, column, data }) {
      let prevRow = data[$rowIndex - 1]
      let nextRow = data[$rowIndex + 1]
      if (column.property === 'key') {
        if (prevRow && prevRow.key === row.key) {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
        if (nextRow && nextRow.key === row.key) {
          return {
            rowspan: 2,
            colspan: 1
          }
        }
      }
    }
  }
}
</script>
