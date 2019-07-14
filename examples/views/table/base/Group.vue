<template>
  <div>
    <p>当数据结构比较复杂的时候，可以使用多级表头显示更加直观</p>

    <s-table
      border
      height="400"
      :data.sync="tableData">
      <s-table-column title="基本信息">
        <s-table-column type="index" width="60"></s-table-column>
        <s-table-column field="name" title="Name"></s-table-column>
      </s-table-column>
      <s-table-column title="更多信息">
        <s-table-column field="role" title="Role"></s-table-column>
        <s-table-column title="详细信息">
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
        </s-table-column>
      </s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p>如果使用了分组表头情，则需要按组来设置固定列，且固定列必须是在左右两侧位置，不允许跨列</p>

    <s-table
      border
      height="400"
      :data.sync="tableData">
      <s-table-column title="基本信息">
        <s-table-column type="index" width="60" fixed="left"></s-table-column>
        <s-table-column field="name" title="Name" fixed="left" width="100"></s-table-column>
      </s-table-column>
      <s-table-column title="更多信息">
        <s-table-column field="role" title="Role" width="300"></s-table-column>
        <s-table-column field="sex" title="Sex" width="300"></s-table-column>
        <s-table-column title="详细信息">
          <s-table-column field="sex" title="Sex" width="300"></s-table-column>
          <s-table-column field="date" title="Date" width="300"></s-table-column>
        </s-table-column>
      </s-table-column>
      <s-table-column field="address" title="Address" width="300" fixed="right" show-overflow></s-table-column>
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
          height="400"
          :data.sync="tableData">
          <s-table-column title="基本信息">
            <s-table-column type="index" width="60"></s-table-column>
            <s-table-column field="name" title="Name"></s-table-column>
          </s-table-column>
          <s-table-column title="更多信息">
            <s-table-column field="role" title="Role"></s-table-column>
            <s-table-column title="详细信息">
              <s-table-column field="sex" title="Sex"></s-table-column>
              <s-table-column field="age" title="Age"></s-table-column>
            </s-table-column>
          </s-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
          }
        }
        `,
        `
        <s-table
          border
          height="400"
          :data.sync="tableData">
          <s-table-column title="基本信息">
            <s-table-column type="index" width="60" fixed="left"></s-table-column>
            <s-table-column field="name" title="Name" fixed="left" width="100"></s-table-column>
          </s-table-column>
          <s-table-column title="更多信息">
            <s-table-column field="role" title="Role" width="300"></s-table-column>
            <s-table-column field="sex" title="Sex" width="300"></s-table-column>
            <s-table-column title="详细信息">
              <s-table-column field="sex" title="Sex" width="300"></s-table-column>
              <s-table-column field="date" title="Date" width="300"></s-table-column>
            </s-table-column>
          </s-table-column>
          <s-table-column field="address" title="Address" width="300" fixed="right" show-overflow></s-table-column>
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
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 50)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
