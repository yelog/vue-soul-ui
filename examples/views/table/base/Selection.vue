<template>
  <div>
    <p>多选表格，基础方式；更多参数具体看文档 <table-api-link prop="select-config"/></p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button @click="$refs.xTable1.toggleRowSelection(tableData[1])">切换第二行选中</s-button>
        <s-button @click="$refs.xTable1.setSelection([tableData[2], tableData[3]], true)">设置第三、四行选中</s-button>
        <s-button @click="$refs.xTable1.setAllSelection(true)">设置所有行选中</s-button>
        <s-button @click="$refs.xTable1.clearSelection()">清除所有行选中</s-button>
      </template>
    </s-toolbar>

    <s-table
      ref="xTable1"
      border
      height="300"
      :data.sync="tableData">
      <s-table-column type="selection" width="60"></s-table-column>
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

    <p>还可以通过 <table-api-link prop="checkMethod"/> 方法控制是否允许点击 CheckBox 勾选，还可以配置 <table-api-link prop="labelField"/> 列显示属性</p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button @click="$refs.xTable2.toggleRowSelection(tableData[1])">切换第二行选中</s-button>
        <s-button @click="$refs.xTable2.setSelection([tableData[2], tableData[3]], true)">设置第三、四行选中</s-button>
        <s-button @click="$refs.xTable2.setAllSelection(true)">设置所有行选中</s-button>
        <s-button @click="$refs.xTable2.clearSelection()">清除所有行选中</s-button>
      </template>
    </s-toolbar>

    <s-table
      ref="xTable2"
      border
      height="300"
      :data.sync="tableData"
      :select-config="{labelField: 'name', checkMethod}">
      <s-table-column type="selection" title="All"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
    </pre>

    <p>多选表格，通过配置 <table-api-link prop="trigger"/> 设置触发源，使用渲染最快的 <table-api-link prop="checkField"/> 属性绑定方式</p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button @click="$refs.xTable3.toggleRowSelection(tableData[1])">切换第二行选中</s-button>
        <s-button @click="$refs.xTable3.setSelection([tableData[2], tableData[3]], true)">设置第三、四行选中</s-button>
        <s-button @click="$refs.xTable3.setAllSelection(true)">设置所有行选中</s-button>
        <s-button @click="$refs.xTable3.clearSelection()">清除所有行选中</s-button>
      </template>
    </s-toolbar>

    <s-table
      border
      highlight-hover-row
      ref="xTable3"
      height="300"
      :data.sync="tableData"
      :select-config="{checkField: 'checked', trigger: 'row'}">
      <s-table-column type="selection" width="60"></s-table-column>
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

    <p>多选可单选同时使用</p>

    <s-table
      border
      ref="xTable4"
      height="300"
      :data.sync="tableData"
      :select-config="{checkField: 'checked'}"
      :radio-config="{labelField: 'name'}">
      <s-table-column type="selection" width="60"></s-table-column>
      <s-table-column type="radio" width="200" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
      <s-table-column field="address" title="Address" show-overflow></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[6] }}</code>
      <code class="javascript">{{ demoCodes[7] }}</code>
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
            <s-button @click="$refs.xTable1.toggleRowSelection(tableData[1])">切换第二行选中</s-button>
            <s-button @click="$refs.xTable1.setSelection([tableData[2], tableData[3]], true)">设置第三、四行选中</s-button>
            <s-button @click="$refs.xTable1.setAllSelection(true)">设置所有行选中</s-button>
            <s-button @click="$refs.xTable1.clearSelection()">清除所有行选中</s-button>
          </template>
        </s-toolbar>

        <s-table
          ref="xTable1"
          border
          height="300"
          :data.sync="tableData">
          <s-table-column type="selection" width="60"></s-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 10)
          }
        }
        `,
        `
        <s-toolbar>
          <template v-slot:buttons>
            <s-button @click="$refs.xTable2.toggleRowSelection(tableData[1])">切换第二行选中</s-button>
            <s-button @click="$refs.xTable2.setSelection([tableData[2], tableData[3]], true)">设置第三、四行选中</s-button>
            <s-button @click="$refs.xTable2.setAllSelection(true)">设置所有行选中</s-button>
            <s-button @click="$refs.xTable2.clearSelection()">清除所有行选中</s-button>
          </template>
        </s-toolbar>

        <s-table
          ref="xTable2"
          border
          height="300"
          :data.sync="tableData"
          :select-config="{labelField: 'name', checkMethod}">
          <s-table-column type="selection" title="All"></s-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 10)
          },
          methods: {
            checkMethod ({ row }) {
              return row.age > 26
            }
          }
        }
        `,
        `
        <s-toolbar>
          <template v-slot:buttons>
            <s-button @click="$refs.xTable3.toggleRowSelection(tableData[1])">切换第二行选中</s-button>
            <s-button @click="$refs.xTable3.setSelection([tableData[2], tableData[3]], true)">设置第三、四行选中</s-button>
            <s-button @click="$refs.xTable3.setAllSelection(true)">设置所有行选中</s-button>
            <s-button @click="$refs.xTable3.clearSelection()">清除所有行选中</s-button>
          </template>
        </s-toolbar>

        <s-table
          border
          highlight-hover-row
          ref="xTable3"
          height="300"
          :data.sync="tableData"
          :select-config="{checkField: 'checked', trigger: 'row'}">
          <s-table-column type="selection" width="60"></s-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 10)
          }
        }
        `,
        `
        <s-table
          border
          ref="xTable4"
          height="300"
          :data.sync="tableData"
          :select-config="{checkField: 'checked'}"
          :radio-config="{labelField: 'name'}">
          <s-table-column type="selection" width="60"></s-table-column>
          <s-table-column type="radio" width="200" title="Name"></s-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 10)
          }
        }
        `
      ]
    }
  },
  created () {
    let list = window.MOCK_DATA_LIST.slice(0, 10)
    this.tableData = list
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    checkMethod ({ row }) {
      return row.age > 26
    }
  }
}
</script>
