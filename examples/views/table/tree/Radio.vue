<template>
  <div>
    <p>使用 <table-api-link prop="highlight-current-row"/> 方式</p>

    <s-table
      highlight-current-row
      :tree-config="{key: 'id', children: 'children'}"
      :data.sync="tableData">
      <s-table-column field="name" title="Name" tree-node></s-table-column>
      <s-table-column field="size" title="Size"></s-table-column>
      <s-table-column field="type" title="Type"></s-table-column>
      <s-table-column field="date" title="Date"></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p>使用 radio 方式</p>

    <s-table
      :tree-config="{key: 'id', children: 'children'}"
      :radio-config="{labelField: 'name'}"
      :data.sync="tableData">
      <s-table-column type="radio" title="Name" tree-node></s-table-column>
      <s-table-column field="size" title="Size"></s-table-column>
      <s-table-column field="type" title="Type"></s-table-column>
      <s-table-column field="date" title="Date"></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
    </pre>

    <p>当然也可以两种方式同时使用</p>

    <s-table
      resizable
      highlight-current-row
      :tree-config="{key: 'id', children: 'children'}"
      :data.sync="tableData">
      <s-table-column type="radio" width="120" tree-node></s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="size" title="Size"></s-table-column>
      <s-table-column field="type" title="Type"></s-table-column>
      <s-table-column field="date" title="Date"></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[4] }}</code>
      <code class="javascript">{{ demoCodes[5] }}</code>
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
          highlight-current-row
          :tree-config="{key: 'id', children: 'children'}"
          :data.sync="tableData">
          <s-table-column field="name" title="Name" tree-node></s-table-column>
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
          }
        }
        `,
        `
        <s-table
          :tree-config="{key: 'id', children: 'children'}"
          :data.sync="tableData">
          <s-table-column type="radio" width="120" tree-node></s-table-column>
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
          }
        }
        `,
        `
        <s-table
          resizable
          highlight-current-row
          :tree-config="{key: 'id', children: 'children'}"
          :data.sync="tableData">
          <s-table-column type="radio" width="120" tree-node></s-table-column>
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
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
