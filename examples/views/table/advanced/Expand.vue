<template>
  <div>
    <p>通过设置 <table-api-link prop="expand-config"/> 属性和 type="<table-api-link prop="expand"/>" 与 slot 可以开启展开行功能</p>

    <s-toolbar>
      <template v-slot:buttons>
        <s-button @click="$refs.xTable.toggleRowExpansion(tableData[1])">切换第二行展开</s-button>
        <s-button @click="$refs.xTable.setRowExpansion([tableData[2], tableData[3]], true)">设置第三、四行展开</s-button>
        <s-button @click="$refs.xTable.setAllRowExpansion(true)">设置所有行展开</s-button>
        <s-button @click="$refs.xTable.clearRowExpand()">关闭所有行展开</s-button>
      </template>
    </s-toolbar>

    <s-table
      ref="xTable"
      border
      :data.sync="tableData"
      :expand-config="{key: 'id'}"
      @toggle-expand-change="toggleExpandChangeEvent">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column type="expand" width="60">
        <template v-slot="{ row, rowIndex }">
          <template v-if="rowIndex === 1">
            <s-table
              border
              :data.sync="tableData"
              :expand-config="{key: 'id'}">
              <s-table-column field="role" title="Role"></s-table-column>
              <s-table-column field="age" title="Age"></s-table-column>
            </s-table>
          </template>
          <template v-else>
            <ul>
              <li>
                <span>ID：</span>
                <span>{{ row.id }}</span>
              </li>
              <li>
                <span>Name：</span>
                <span>{{ row.name }}</span>
              </li>
              <li>
                <span>UpdateTime：</span>
                <span>{{ row.updateTime }}</span>
              </li>
              <li>
                <span>CreateTime：</span>
                <span>{{ row.createTime }}</span>
              </li>
            </ul>
          </template>
        </template>
      </s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p>默认展开所有行，通过 <table-api-link prop="expandAll"/> 参数设置默认展开行</p>

    <s-table
      border
      :data.sync="tableData"
      :expand-config="{key: 'id', expandAll: true}"
      @toggle-expand-change="toggleExpandChangeEvent">
      <s-table-column type="index" width="60"></s-table-column>
      <s-table-column type="expand" width="60">
        <template v-slot="{ row }">
          <ul>
            <li>
              <span>ID：</span>
              <span>{{ row.id }}</span>
            </li>
            <li>
              <span>Name：</span>
              <span>{{ row.name }}</span>
            </li>
            <li>
              <span>UpdateTime：</span>
              <span>{{ row.updateTime }}</span>
            </li>
            <li>
              <span>CreateTime：</span>
              <span>{{ row.createTime }}</span>
            </li>
          </ul>
        </template>
      </s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="age" title="Age"></s-table-column>
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
      tableData2: [],
      demoCodes: [
        `
        <s-toolbar>
          <template v-slot:buttons>
            <s-button @click="$refs.xTable.toggleRowExpansion(tableData[1])">切换第二行展开</s-button>
            <s-button @click="$refs.xTable.setRowExpansion([tableData[2], tableData[3]], true)">设置第三、四行展开</s-button>
            <s-button @click="$refs.xTable.setAllRowExpansion(true)">设置所有行展开</s-button>
            <s-button @click="$refs.xTable.clearRowExpand()">关闭所有行展开</s-button>
          </template>
        </s-toolbar>

        <s-table
          ref="xTable"
          border
          :data.sync="tableData"
          :expand-config="{key: 'id'}"
          @toggle-expand-change="toggleExpandChangeEvent">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column type="expand" width="60">
            <template v-slot="{ row, rowIndex }">
              <template v-if="rowIndex === 1">
                <s-table
                  border
                  :data.sync="tableData"
                  :expand-config="{key: 'id'}">
                  <s-table-column field="role" title="Role"></s-table-column>
                  <s-table-column field="age" title="Age"></s-table-column>
                </s-table>
              </template>
              <template v-else>
                <ul>
                  <li>
                    <span>ID：</span>
                    <span>{{ row.id }}</span>
                  </li>
                  <li>
                    <span>Name：</span>
                    <span>{{ row.name }}</span>
                  </li>
                  <li>
                    <span>UpdateTime：</span>
                    <span>{{ row.updateTime }}</span>
                  </li>
                  <li>
                    <span>CreateTime：</span>
                    <span>{{ row.createTime }}</span>
                  </li>
                </ul>
              </template>
            </template>
          </s-table-column>
          <s-table-column field="name" title="Name"></s-table-column>
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
            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
          },
          methods: {
            toggleExpandChangeEvent ({ row }) {
              this.$XMsg.alert('行展开、收起事件')
            }
          }
        }
        `,
        `
        <s-table
          border
          :data.sync="tableData2"
          :expand-config="{key: 'id', expandAll: true}"
          @toggle-expand-change="toggleExpandChangeEvent">
          <s-table-column type="index" width="60"></s-table-column>
          <s-table-column type="expand" width="60">
            <template v-slot="{ row }">
              <ul>
                <li>
                  <span>ID：</span>
                  <span>{{ row.id }}</span>
                </li>
                <li>
                  <span>Name：</span>
                  <span>{{ row.name }}</span>
                </li>
                <li>
                  <span>UpdateTime：</span>
                  <span>{{ row.updateTime }}</span>
                </li>
                <li>
                  <span>CreateTime：</span>
                  <span>{{ row.createTime }}</span>
                </li>
              </ul>
            </template>
          </s-table-column>
          <s-table-column field="name" title="Name"></s-table-column>
          <s-table-column field="sex" title="Sex"></s-table-column>
          <s-table-column field="age" title="Age"></s-table-column>
        </s-table>
        `,
        `
        export default {
          data () {
            return {
              tableData2: []
            }
          },
          created () {
            this.tableData2 = window.MOCK_DATA_LIST.slice(0, 3)
          },
          methods: {
            toggleExpandChangeEvent ({ row }) {
              this.$XMsg.alert('行展开、收起事件')
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
    this.tableData = window.MOCK_DATA_LIST.slice(0, 3)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    toggleExpandChangeEvent ({ row }) {
      this.$XMsg.alert('行展开、收起事件')
    }
  }
}
</script>
