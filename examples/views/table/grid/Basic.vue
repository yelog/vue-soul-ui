<template>
  <div>
    <p><grid-api-link name="s-grid"/> 只为解决动态表格一切需求（动态列、动态数据、动态个性化...）</p>
    <p>继承 <table-api-link name="s-table"/> 的所有参数、事件、方法...，使用配置的方式渲染表格，这非常适用于动态渲染的场景，完全使用数据进行配置</p>

    <s-grid
      border
      resizable
      height="300"
      :columns="tableColumn"
      :data.sync="tableData"></s-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p>分组表头、底部合计</p>

    <s-grid
      border
      stripe
      resizable
      show-footer
      height="500"
      :footer-method="footerMethod"
      :columns="tableColumn2"
      :data.sync="tableData"></s-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
    </pre>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tableColumn: [
        { type: 'index', width: 50 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex', showHeaderOverflow: true },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      tableColumn2: [
        { type: 'index', width: 50 },
        {
          title: '基本信息',
          children: [
            { field: 'name', title: 'Name' },
            {
              title: '其他信息',
              children: [
                { field: 'rate', title: 'Rate' },
                { field: 'age', title: 'Age' }
              ]
            },
            { field: 'sex', title: 'Sex' }
          ]
        },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      tableData: [],
      demoCodes: [
        `
        <s-grid
          border
          resizable
          height="300"
          :columns="tableColumn"
          :data.sync="tableData"></s-grid>
        `,
        `
        export default {
          data () {
            return {
              tableColumn: [
                { type: 'index', width: 50 },
                { field: 'name', title: 'Name' },
                { field: 'sex', title: 'Sex', showHeaderOverflow: true },
                { field: 'address', title: 'Address', showOverflow: true }
              ]
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 100)
          }
        }
        `,
        `
        <s-grid
          border
          stripe
          resizable
          show-footer
          height="500"
          :footer-method="footerMethod"
          :columns="tableColumn2"
          :data.sync="tableData"></s-grid>
        `,
        `
        export default {
          data () {
            return {
              tableColumn2: [
                { type: 'index', width: 50 },
                {
                  title: '基本信息',
                  children: [
                    { field: 'name', title: 'Name' },
                    {
                      title: '其他信息',
                      children: [
                        { field: 'rate', title: 'Rate' },
                        { field: 'age', title: 'Age' }
                      ]
                    },
                    { field: 'sex', title: 'Sex' }
                  ]
                },
                { field: 'address', title: 'Address', showOverflow: true }
              ]
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 100)
          },
          methods: {
            footerMethod ({ columns, data }) {
              return [
                columns.map((column, columnIndex) => {
                  if (columnIndex === 0) {
                    return '和值'
                  }
                  if (['age', 'rate'].includes(column.property)) {
                    return XEUtils.sum(data, column.property)
                  }
                  return '-'
                })
              ]
            }
          }
        }
        `
      ]
    }
  },
  created () {
    let list = window.MOCK_DATA_LIST.slice(0, 100)
    this.tableData = list
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }
          if (['age', 'rate'].includes(column.property)) {
            return XEUtils.sum(data, column.property)
          }
          return '-'
        })
      ]
    }
  }
}
</script>
