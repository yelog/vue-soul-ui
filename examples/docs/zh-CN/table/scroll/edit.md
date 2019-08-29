## 可编辑

### 效果
:::demo
```html
<template>
    <s-toolbar :refresh="{query: findList}">
      <template v-slot:buttons>
        <s-button>
          <template>新增操作</template>
          <template v-slot:dropdowns>
            <s-button @click="insertEvent(null)">从第一行插入</s-button>
            <s-button @click="insertEvent(-1)">从最后插入</s-button>
            <s-button @click="insertEvent($refs.myTable.getData(100))">插入到 100 行</s-button>
            <s-button @click="insertEvent($refs.myTable.getData(2000))">插入到 2000 行</s-button>
          </template>
        </s-button>
        <s-button>
          <template>删除操作</template>
          <template v-slot:dropdowns>
            <s-button @click="$refs.myTable.removeSelecteds()">删除选中</s-button>
            <s-button @click="$refs.myTable.remove($refs.myTable.getData(0))">删除第一行</s-button>
            <s-button @click="$refs.myTable.remove($refs.myTable.getData($refs.myTable.getData().length - 1))">删除最后一行</s-button>
            <s-button @click="$refs.myTable.remove($refs.myTable.getData(100))">删除第 100 行</s-button>
          </template>
        </s-button>
        <s-button>
          <template>校验操作</template>
          <template v-slot:dropdowns>
            <s-button @click="validEvent">基本校验</s-button>
            <s-button @click="fullValidEvent">完整校验</s-button>
            <s-button @click="selectValidEvent">选中校验</s-button>
          </template>
        </s-button>
        <s-button @click="getInsertEvent">获取新增</s-button>
        <s-button @click="getRemoveEvent">获取删除</s-button>
        <s-button @click="getUpdateEvent">获取修改</s-button>
        <s-button>
          <template>滚动操作</template>
          <template v-slot:dropdowns>
            <s-button @click="$refs.myTable.scrollToRow($refs.myTable.getData(10))">滚动到第 10 行</s-button>
            <s-button @click="$refs.myTable.scrollToRow($refs.myTable.getData(4000))">滚动第 4000 行</s-button>
            <s-button @click="$refs.myTable.scrollToColumn($refs.myTable.getColumns(1))">滚动第 1 列</s-button>
            <s-button @click="$refs.myTable.scrollToColumn($refs.myTable.getColumns(10))">滚动第 10 列</s-button>
          </template>
        </s-button>
      </template>
    </s-toolbar>

    <s-table
      border
      resizable
      show-overflow
      ref="myTable"
      height="300"
      :loading="loading"
      :edit-rules="validRules"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
      :select-config="{checkField: 'checked'}">
      <s-table-column type="selection" width="60"></s-table-column>
      <s-table-column type="index" width="100"></s-table-column>
      <s-table-column field="name" title="Name" sortable width="200" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="age" title="Age" width="200" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="sex" title="Sex" width="200" :edit-render="{name: 'input'}"></s-table-column>
      <s-table-column field="rate" title="Rate" width="200"></s-table-column>
      <s-table-column field="region" title="Region" width="200"></s-table-column>
      <s-table-column field="time" title="Time" width="200"></s-table-column>
      <s-table-column field="address" title="Address" width="300" show-overflow></s-table-column>
      <s-table-column field="updateTime" title="UpdateTime" width="200"></s-table-column>
      <s-table-column field="createTime" title="CreateTime" width="200"></s-table-column>
      <s-table-column field="attr1" title="Attr1" width="200"></s-table-column>
      <s-table-column field="attr2" title="Attr2" width="200"></s-table-column>
      <s-table-column field="attr3" title="Attr3" width="200"></s-table-column>
      <s-table-column field="attr4" title="Attr4" width="200"></s-table-column>
      <s-table-column field="attr5" title="Attr5" width="200"></s-table-column>
      <s-table-column field="attr6" title="Attr6" width="200"></s-table-column>
      <s-table-column field="attr7" title="Attr7" width="200"></s-table-column>
      <s-table-column field="attr8" title="Attr8" width="200"></s-table-column>
      <s-table-column field="attr9" title="Attr9" width="200"></s-table-column>
      <s-table-column field="createTime" title="CreateTime" width="200"></s-table-column>
    </s-table>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      validRules: {
        name: [
          { required: true, message: '名称必须填写' },
          { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }
        ],
        sex: [
          { required: true, message: '性别必须填写' }
        ]
      }
    }
  },
  created () {
    this.findList()
  },
  methods: {
    findList () {
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          let tableData = window.MOCK_DATA_LIST.slice(0, 5000)
          // 阻断 vue 对大数组的双向绑定，避免 vue 绑定大数据造成短暂的卡顿
          if (this.$refs.myTable) {
            this.$refs.myTable.loadData(tableData)
          }
          resolve()
          this.loading = false
        }, 300)
      })
    },
    validEvent () {
      this.$refs.myTable.validate(valid => {
        if (valid) {
          this.$XMsg.message({ status: 'success', message: '校验成功！' })
        } else {
          this.$XMsg.message({ status: 'error', message: '校验不通过！' })
        }
      })
    },
    fullValidEvent () {
      this.$refs.myTable.fullValidate((valid, errMap) => {
        if (valid) {
          this.$XMsg.message({ status: 'success', message: '校验成功！' })
        } else {
          let msgList = []
          Object.values(errMap).forEach(errList => {
            errList.forEach(params => {
              let { rowIndex, column, rules } = params
              rules.forEach(rule => {
                msgList.push(`第 ${rowIndex} 行 ${column.title} 校验错误：${rule.message}`)
              })
            })
          })
          this.$XMsg.message({
            status: 'error',
            message: () => {
              return [
                <div class="red" style="max-height: 400px;overflow: auto;">
                  {
                    msgList.map(msg => {
                      return <div>{ msg }</div>
                    })
                  }
                </div>
              ]
            }
          })
        }
      })
    },
    selectValidEvent () {
      let selectRecords = this.$refs.myTable.getSelectRecords()
      if (selectRecords.length > 0) {
        this.$refs.myTable.validate(selectRecords, valid => {
          if (valid) {
            this.$XMsg.message({ status: 'success', message: '校验成功！' })
          } else {
            this.$XMsg.message({ status: 'error', message: '校验不通过！' })
          }
        })
      } else {
        this.$XMsg.message({ status: 'warning', message: '未选中数据！' })
      }
    },
    insertEvent (row) {
      let myTable = this.$refs.myTable
      let record = {}
      myTable.insertAt(record, row).then(({ row }) => {
        myTable.setActiveRow(row)
      })
    },
    getInsertEvent () {
      let insertRecords = this.$refs.myTable.getInsertRecords()
      this.$XMsg.alert(insertRecords.length)
    },
    getRemoveEvent () {
      let removeRecords = this.$refs.myTable.getRemoveRecords()
      this.$XMsg.alert(removeRecords.length)
    },
    getUpdateEvent () {
      let updateRecords = this.$refs.myTable.getUpdateRecords()
      this.$XMsg.alert(updateRecords.length)
    }
  }
}
 
</script>

```
:::
