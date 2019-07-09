<template>
  <div>
    <p>具体兼容请查看 <a class="link" href="https://www.npmjs.com/package/vxe-table-plugin-iview" target="_blank">vxe-table-plugin-iview</a> 适配插件的 API</p>

    <s-table
      border
      show-overflow
      highlight-cell
      class="s-table-iview"
      height="600"
      :loading="loading"
      :data.sync="tableData"
      :mouse-config="{selected: true}"
      :keyboard-config="{isArrow: true, isDel: true, isTab: true, isEdit: true}"
      :edit-config="{key: 'id', trigger: 'dblclick', mode: 'cell'}">
      <s-table-column type="selection" width="60"></s-table-column>
      <s-table-column type="index" title="Number" width="80"></s-table-column>
      <s-table-column field="name" title="Input" min-width="140" :edit-render="{name: 'Input'}"></s-table-column>
      <s-table-column field="role" title="AutoComplete" min-width="160" :edit-render="{name: 'AutoComplete', props: {data: restaurants, filterMethod: roleFilterMethod}}"></s-table-column>
      <s-table-column field="age" title="InputNumber" width="140" :edit-render="{name: 'InputNumber', props: {max: 35, min: 18}}"></s-table-column>
      <s-table-column field="sex" title="Select" width="140" :edit-render="{name: 'Select', options: sexList}"></s-table-column>
      <s-table-column field="sex1" title="Select" width="140" :edit-render="{name: 'Select', options: sexList, props: {multiple: true, clearable: true}}"></s-table-column>
      <s-table-column field="sex2" title="Select" width="140" :edit-render="{name: 'Select', options: sexList, optionGroups: sexGroupList, props: {clearable: true}}"></s-table-column>
      <s-table-column field="region" title="Cascader" width="200" :edit-render="{name: 'Cascader', props: {data: regionList}}"> </s-table-column>
      <s-table-column field="date" title="DatePicker" width="200" :edit-render="{name: 'DatePicker', props: {type: 'date', format: 'yyyy/MM/dd'}}"></s-table-column>
      <s-table-column field="date2" title="TimePicker" width="200" :edit-render="{name: 'TimePicker', props: {type: 'time'}}"></s-table-column>
      <s-table-column field="flag" title="iSwitch" width="100" :edit-render="{name: 'iSwitch', type: 'visible'}"></s-table-column>
      <s-table-column field="rate" title="Rate" width="200" :edit-render="{name: 'Rate', type: 'visible'}"></s-table-column>
    </s-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import XEAjax from 'xe-ajax'
import hljs from 'highlight.js'

export default {
  data () {
    return {
      loading: false,
      tableData: [],
      sexList: [],
      regionList: [],
      restaurants: ['前端', '后端', '开发', '测试'],
      sexGroupList: [
        {
          label: '分组1',
          options: [
            {
              label: '男',
              value: '1'
            }
          ]
        },
        {
          label: '分组2',
          options: [
            {
              label: '女',
              value: '0'
            }
          ]
        }
      ],
      demoCodes: [
        `
        <s-table
          border
          show-overflow
          highlight-cell
          class="s-table-iview"
          height="600"
          :loading="loading"
          :data.sync="tableData"
          :mouse-config="{selected: true}"
          :keyboard-config="{isArrow: true, isDel: true, isTab: true, isEdit: true}"
          :edit-config="{key: 'id', trigger: 'dblclick', mode: 'cell'}">
          <s-table-column type="selection" width="60"></s-table-column>
          <s-table-column type="index" title="Number" width="80"></s-table-column>
          <s-table-column field="name" title="Input" min-width="140" :edit-render="{name: 'Input'}"></s-table-column>
          <s-table-column field="role" title="AutoComplete" min-width="160" :edit-render="{name: 'AutoComplete', props: {data: restaurants, filterMethod: roleFilterMethod}}"></s-table-column>
          <s-table-column field="age" title="InputNumber" width="140" :edit-render="{name: 'InputNumber', props: {max: 35, min: 18}}"></s-table-column>
          <s-table-column field="sex" title="Select" width="140" :edit-render="{name: 'Select', options: sexList}"></s-table-column>
          <s-table-column field="sex1" title="Select" width="140" :edit-render="{name: 'Select', options: sexList, props: {multiple: true, clearable: true}}"></s-table-column>
          <s-table-column field="sex2" title="Select" width="140" :edit-render="{name: 'Select', options: sexList, optionGroups: sexGroupList, props: {clearable: true}}"></s-table-column>
          <s-table-column field="region" title="Cascader" width="200" :edit-render="{name: 'Cascader', props: {data: regionList}}"> </s-table-column>
          <s-table-column field="date" title="DatePicker" width="200" :edit-render="{name: 'DatePicker', props: {type: 'date', format: 'yyyy/MM/dd'}}"></s-table-column>
          <s-table-column field="date2" title="TimePicker" width="200" :edit-render="{name: 'TimePicker', props: {type: 'time'}}"></s-table-column>
          <s-table-column field="flag" title="iSwitch" width="100" :edit-render="{name: 'iSwitch', type: 'visible'}"></s-table-column>
          <s-table-column field="rate" title="Rate" width="200" :edit-render="{name: 'Rate', type: 'visible'}"></s-table-column>
        </s-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false,
              tableData: [],
              sexList: [],
              regionList: [],
              sexGroupList: [
                {
                  label: '分组1',
                  options: [
                    {
                      label: '男',
                      value: '1'
                    }
                  ]
                },
                {
                  label: '分组2',
                  options: [
                    {
                      label: '女',
                      value: '0'
                    }
                  ]
                }
              ]
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 100)
          },
          methods: {
            nameChangeEvent ({ row }, event) {
              console.log(event)
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      let list = window.MOCK_DATA_LIST.slice(0, 100)
      this.tableData = list
      this.loading = false
    }, 500)
    this.findSexList()
    this.findRegionList()
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    findSexList () {
      return XEAjax.doGet('/api/conf/sex/list').then(({ data }) => {
        this.sexList = data
        return data
      })
    },
    findRegionList () {
      return XEAjax.doGet('/api/conf/region/list').then(({ data }) => {
        this.regionList = data
        return data
      })
    },
    roleFilterMethod  (value, option) {
      return option.toUpperCase().indexOf((value || '').toUpperCase()) !== -1
    }
  }
}
</script>
