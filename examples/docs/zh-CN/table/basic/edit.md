### 点击触发-单元格
:::demo 设置 edit-config={trigger: 'click', mode: 'cell'} 启用单元格点击编辑的功能，开启编辑功能，必须要有唯一行数据的 key，通过设置 row-id 或者 row-key 自定义字段名
```html
<template>
<s-table
  border
  resizable
  show-overflow
  height="500"
  row-id="id"
  :data.sync="tableData"
  :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
  @edit-actived="editActivedEvent"
  @edit-closed="editClosedEvent">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="date" title="Date(点击选中文字)" :edit-render="{name: 'input', autoselect: true}"></s-table-column>
</s-table>
</template>
<script>
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
    editActivedEvent ({ row, column }, event) {
      console.log(`打开 ${column.title} 列编辑`)
    },
    editClosedEvent ({ row, column }, event) {
      console.log(`关闭 ${column.title} 列编辑`)
    }
  }
}
</script>

```
:::

### 手动触发
:::demo
```html
<template>
<s-table
  ref="myTable"
  border
  resizable
  show-overflow
  height="500"
  row-id="id"
  :data.sync="tableData"
  :edit-config="{trigger: 'manual', mode: 'row'}">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="date" title="Date" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="address" title="Address" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column title="操作">
    <template v-slot="{ row }">
      <template v-if="$refs.myTable.hasActiveRow(row)">
        <s-button size="small" @click="saveRowEvent(row)">保存</s-button>
        <s-button size="small" @click="cancelRowEvent(row)">取消</s-button>
      </template>
      <template v-else>
        <s-button size="small" @click="editRowEvent(row)">编辑</s-button>
      </template>
    </template>
  </s-table-column>
</s-table>
</template>
<script>
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
    editRowEvent (row) {
      this.$refs.myTable.setActiveRow(row)
    },
    saveRowEvent (row) {
      this.$XMsg.alert('success')
      this.cancelRowEvent()
    },
    cancelRowEvent (row) {
      this.$refs.myTable.clearActived()
    }
  }
}
</script>

```
:::

### 双击触发-行
:::demo 设置 edit-config={trigger: 'dblclick', mode: 'row'} 启用行点击编辑的功能，需要注意的 mode=row 时，事件中的 column 相关参数是不确定性的（会保留 column 相关参数，但不一定是准确的）
```html
<template>
<s-table
  border
  resizable
  show-overflow
  height="500"
  row-id="id"
  :data.sync="tableData"
  :edit-config="{trigger: 'dblclick', mode: 'row'}"
  @edit-actived="editActivedEvent"
  @edit-closed="editClosedEvent">
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="date" title="Date" :edit-render="{name: 'input'}"></s-table-column>
</s-table>
</template>
<script>
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
    editActivedEvent ({ row, column }, event) {
      console.log(`打开 ${column.title} 列编辑`)
    },
    editClosedEvent ({ row, column }, event) {
      console.log(`关闭 ${column.title} 列编辑`)
    }
  }
}
</script>

```
:::

### 插入/删除数据
:::demo
```html
<template>
<s-toolbar>
  <template v-slot:buttons>
    <s-button @click="$refs.myTable.insert({name: Date.now()})">在第1行插入</s-button>
    <s-button @click="insertEvent">在第3行插入并激活 Sex 单元格</s-button>
    <s-button @click="$refs.myTable.insertAt({name: Date.now()}, -1)">在最后行插入</s-button>
    <s-button @click="getInsertEvent">获取新增</s-button>
    <hr>
    <s-button @click="$refs.myTable.remove(tableData[1])">删除第2行</s-button>
    <s-button @click="$refs.myTable.removeSelecteds()">删除选中</s-button>
    <s-button @click="getRemoveEvent">获取删除</s-button>
    <s-button @click="getSelectionEvent">获取选中</s-button>
    <s-button @click="$refs.myTable.revert()">还原全部</s-button>
  </template>
</s-toolbar>

<s-table
  border
  show-overflow
  ref="myTable"
  height="400"
  row-id="id"
  :data.sync="tableData"
  :edit-config="{trigger: 'click', mode: 'cell'}">
  <s-table-column type="selection" width="60"></s-table-column>
  <s-table-column type="index" width="60"></s-table-column>
  <s-table-column field="name" title="Name" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></s-table-column>
  <s-table-column field="age" title="Age" :edit-render="{name: 'input'}"></s-table-column>
</s-table>
</template>
<script>
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
    insertEvent () {
      let record = {
        name: Date.now()
      }
      this.$refs.myTable.insertAt(record, this.tableData[2])
        .then(({ row }) => this.$refs.myTable.setActiveCell(row, 'sex'))
    },
    getInsertEvent () {
      let insertRecords = this.$refs.myTable.getInsertRecords()
      this.$XMsg.alert(insertRecords.length)
    },
    getRemoveEvent () {
      let removeRecords = this.$refs.myTable.getRemoveRecords()
      this.$XMsg.alert(removeRecords.length)
    },
    getSelectionEvent () {
      let removeRecords = this.$refs.myTable.getSelectRecords()
      this.$XMsg.alert(removeRecords.length)
    }
  }
}
</script>
```
:::

### 结合ElementUI
:::demo
```html
<template>
<s-table
  border
  show-overflow
  show-footer
  class="s-table-element"
  height="600"
  row-id="id"
  :loading="loading"
  :data.sync="tableData"
  :footer-method="footerMethod"
  :edit-config="{trigger: 'click', mode: 'row'}">
  <s-table-column type="selection" width="60"></s-table-column>
  <s-table-column type="index" width="80">
    <template v-slot:header="{ column }">
      <span>序号</span>
      <i class="el-icon-question"></i>
    </template>
  </s-table-column>
  <s-table-column field="name" title="ElInput" min-width="140" :edit-render="{type: 'default'}">
    <template v-slot:edit="{ row }">
      <el-input v-model="row.name"></el-input>
    </template>
  </s-table-column>
  <s-table-column field="role" title="ElAutocomplete" min-width="160" :edit-render="{type: 'default'}">
    <template v-slot:edit="{ row }">
      <el-autocomplete v-model="row.role" :fetch-suggestions="roleFetchSuggestions"></el-autocomplete>
    </template>
  </s-table-column>
  <s-table-column field="age" title="ElInputNumber"  width="160" :edit-render="{type: 'default'}">
    <template v-slot:header="{ column }">
      <span>{{ column.title }}</span>
      <i class="el-icon-warning"></i>
    </template>
    <template v-slot:edit="{ row }">
      <el-input-number v-model="row.age" :max="35" :min="18"></el-input-number>
    </template>
  </s-table-column>
  <s-table-column field="sex" title="ElSelect" width="140" :edit-render="{type: 'default'}">
    <template v-slot:edit="{ row }">
      <el-select v-model="row.sex">
        <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </template>
    <template v-slot="{ row }">{{ getSelectLabel(row.sex, sexList) }}</template>
  </s-table-column>
  <s-table-column field="region" title="ElCascader" width="200" :edit-render="{type: 'default'}">
    <template v-slot:edit="{ row }">
      <el-cascader v-model="row.region" :options="regionList"></el-cascader>
    </template>
    <template v-slot="{ row }">{{ getCascaderLabel(row.region, regionList) }}</template>
  </s-table-column>
  <s-table-column field="date" title="ElDatePicker" width="200" :edit-render="{type: 'default'}">
    <template v-slot:edit="{ row }">
      <el-date-picker v-model="row.date" type="date" format="yyyy/MM/dd"></el-date-picker>
    </template>
    <template v-slot="{ row }">{{ formatDate(row.date, 'yyyy/MM/dd') }}</template>
  </s-table-column>
  <s-table-column field="date1" title="ElDatePicker" width="220" :edit-render="{type: 'default'}">
    <template v-slot:edit="{ row }">
      <el-date-picker v-model="row.date1" type="datetime" format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
    </template>
    <template v-slot="{ row }">{{ formatDate(row.date1, 'yyyy-MM-dd HH:mm:ss') }}</template>
  </s-table-column>
  <s-table-column field="date2" title="ElTimePicker" width="200" :edit-render="{type: 'default'}">
    <template v-slot:edit="{ row }">
      <el-time-select v-model="row.date2" :picker-options="{start: '08:30', step: '00:15', end: '18:30'}">
    </el-time-select>
    </template>
  </s-table-column>
  <s-table-column field="rate" title="ElRate" width="200" :edit-render="{type: 'visible'}">
    <template v-slot:edit="{ row }">
      <el-rate v-model="row.rate"></el-rate>
    </template>
  </s-table-column>
  <s-table-column field="flag" title="ElSwitch" width="100" :edit-render="{type: 'visible'}">
    <template v-slot:edit="{ row }">
      <el-switch v-model="row.flag"></el-switch>
    </template>
  </s-table-column>
</s-table>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      tableData: [],
      sexList: [],
      regionList: [],
      restaurants: [
        { value: '前端', name: '前端' },
        { value: '后端', name: '后端' }
      ]
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.tableData = window.MOCK_DATA_LIST.slice(0, 100)
      this.loading = false
    }, 500)
    this.findSexList()
    this.findRegionList()
  },
  methods: {
    findSexList () {
      return this.XEAjax.doGet('/api/conf/sex/list').then(({ data }) => {
        this.sexList = data
        return data
      })
    },
    findRegionList () {
      return this.XEAjax.doGet('/api/conf/region/list').then(({ data }) => {
        this.regionList = data
        return data
      })
    },
    formatDate (value, format) {
      return this.XEUtils.toDateString(value, format)
    },
    getSelectLabel (value, list, valueProp = 'value', labelField = 'label') {
      let item = this.XEUtils.find(list, item => item[valueProp] === value)
      return item ? item[labelField] : null
    },
    getCascaderLabel (value, list) {
      let values = value || []
      let labels = []
      let matchCascaderData = function (index, list) {
        let val = values[index]
        if (list && values.length > index) {
          list.forEach(item => {
            if (item.value === val) {
              labels.push(item.label)
              matchCascaderData(++index, item.children)
            }
          })
        }
      }
      matchCascaderData(0, list)
      return labels.join(' / ')
    },
    roleFetchSuggestions (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }
          if (['age', 'rate'].includes(column.property)) {
            return this.XEUtils.mean(data, column.property)
          }
          return '-'
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '和值'
          }
          if (['age', 'rate'].includes(column.property)) {
            return this.XEUtils.sum(data, column.property)
          }
          return '-'
        })
      ]
    }
  }
}
</script>
```
:::
