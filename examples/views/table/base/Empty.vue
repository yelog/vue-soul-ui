<template>
  <div>
    <p>基础使用</p>

    <s-table
      :data.sync="tableData">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p>配合 loading 使用，可以通过 slot=<table-api-link prop="empty"/> 自定义提示语</p>

    <s-table
      height="300"
      :loading="loading"
      :data.sync="tableData">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
      <template v-slot:empty>
        <span style="color: red;">没有更多数据了！</span>
      </template>
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
      loading: false,
      tableData: [],
      tableData2: [],
      demoCodes: [
        `
        <s-table
          :data.sync="tableData">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name"></s-table-column>
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
        </s-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false,
              tableData: [],
              tableData2: []
            }
          },
          created () {
            setTimeout(() => {
              this.tableData = []
            }, 1000)
          }
        }
        `,
        `
        <s-table
          :loading="loading"
          :data.sync="tableData2">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column field="name" title="Name"></s-table-column>
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
          <s-table-column field="address" title="Address" show-overflow></s-table-column>
          <template v-slot:empty>
            <span style="color: red;">没有更多数据了！</span>
          </template>
        </s-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false,
              tableData: [],
              tableData2: []
            }
          },
          created () {
            this.loading = true
            setTimeout(() => {
              this.loading = false
              this.tableData2 = []
            }, 1000)
          }
        }
        `
      ]
    }
  },
  created () {
    setTimeout(() => {
      this.tableData = []
    }, 1000)
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.tableData2 = []
    }, 1000)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
