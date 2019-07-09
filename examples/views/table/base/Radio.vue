<template>
  <div>
    <p>使用 <table-api-link prop="highlight-current-row"/> 方式；选项改变触发事件 <table-api-link prop="select-change"/></p>

    <s-table
      border
      highlight-current-row
      height="300"
      :data.sync="tableData">
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p>使用 radio 方式</p>

    <s-table
      border
      height="300"
      :radio-config="{labelField: 'name'}"
      :data.sync="tableData">
      <s-table-column type="radio" title="这样也行"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
    </pre>

    <p>当然也可以两种方式同时使用</p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button @click="$refs.xTable.setCurrentRow(tableData[1])">设置第二行选中</s-button>
      </template>
    </s-toolbar>

    <s-table
      ref="xTable"
      border
      highlight-current-row
      height="300"
      :radio-config="{labelField: 'name'}"
      :data.sync="tableData">
      <s-table-column type="radio" title="还可以这样" width="120"></s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
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
          border
          highlight-current-row
          height="300"
          :data.sync="tableData">
          <s-table-column field="name" title="Name"></s-table-column>
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
          <s-table-column field="address" title="Address" show-overflow></s-table-column>
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
        `,
        `
        <s-table
          border
          height="300"
          :radio-config="{labelField: 'name'}"
          :data.sync="tableData">
          <s-table-column type="radio" title="这样也行"></s-table-column>
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
          <s-table-column field="address" title="Address" show-overflow></s-table-column>
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
        `,
        `
        <s-toolbar>
          <template v-slot:buttons>
            <s-button @click="$refs.xTable.setCurrentRow(tableData[1])">设置第二行选中</s-button>
          </template>
        </s-toolbar>

        <s-table
          ref="xTable"
          border
          highlight-current-row
          height="300"
          :radio-config="{labelField: 'name'}"
          :data.sync="tableData">
          <s-table-column type="radio" title="还可以这样" width="120"></s-table-column>
          <s-table-column field="name" title="Name"></s-table-column>
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
          <s-table-column field="address" title="Address" show-overflow></s-table-column>
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
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  created () {
    let list = window.MOCK_DATA_LIST.slice(0, 6)
    this.tableData = list
  }
}
</script>
