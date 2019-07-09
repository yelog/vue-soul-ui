<template>
  <div>
    <p>具体兼容请查看 <a class="link" href="https://www.npmjs.com/package/vxe-table-plugin-antd" target="_blank">vxe-table-plugin-antd</a> 适配插件的 API</p>

    <s-table
      border
      show-overflow
      highlight-cell
      class="s-table-antd"
      height="460"
      :loading="loading"
      :data.sync="tableData"
      :mouse-config="{selected: true}"
      :keyboard-config="{isArrow: true, isDel: true, isTab: true, isEdit: true}"
      :edit-config="{key: 'id', trigger: 'dblclick', mode: 'cell'}">
      <s-table-column type="selection" width="60"></s-table-column>
      <s-table-column type="index" title="Number" width="80"></s-table-column>
      <s-table-column field="name" title="AInput" min-width="140" :edit-render="{name: 'AInput'}"></s-table-column>
      <s-table-column field="role" title="AAutoComplete" width="160" :edit-render="{name: 'AAutoComplete', props: ACProps, events: {search: roleSearchEvent}}"></s-table-column>
      <s-table-column field="age" title="AInputNumber" width="160" :edit-render="{name: 'AInputNumber', props: {max: 35, min: 18}}"></s-table-column>
      <s-table-column field="sex" title="ASelect" width="140" :edit-render="{name: 'ASelect', options: sexList}"></s-table-column>
      <s-table-column field="sex1" title="ASelect" width="160" :edit-render="{name: 'ASelect', options: sexList, props: {mode: 'multiple'}}"></s-table-column>
      <s-table-column field="sex2" title="ASelect" width="140" :edit-render="{name: 'ASelect', optionGroups: sexGroupList}"></s-table-column>
      <s-table-column field="region" title="ACascader" width="200" :edit-render="{name: 'ACascader', props: {options: regionList}}"></s-table-column>
      <s-table-column field="date7" title="ADatePicker" width="140" :edit-render="{name: 'ADatePicker', props: {type: 'date', format: 'YYYY/MM/DD'}}"></s-table-column>
      <s-table-column field="date8" title="AMonthPicker" width="140" :edit-render="{name: 'AMonthPicker'}"></s-table-column>
      <s-table-column field="date9" title="AWeekPicker" width="140" :edit-render="{name: 'AWeekPicker'}"></s-table-column>
      <s-table-column field="date11" title="ARangePicker" width="240" :edit-render="{name: 'ARangePicker'}"></s-table-column>
      <s-table-column field="date10" title="ATimePicker" width="140" :edit-render="{name: 'ATimePicker'}"></s-table-column>
      <s-table-column field="attr1" title="ATreeSelect" width="140" :edit-render="{name: 'ATreeSelect', props: {treeData}}"></s-table-column>
      <s-table-column field="attr2" title="ATreeSelect" width="140" :edit-render="{name: 'ATreeSelect', props: {treeData, treeCheckable: true}}"></s-table-column>
      <s-table-column field="flag" title="ASwitch" width="100" :edit-render="{name: 'ASwitch', type: 'visible'}"></s-table-column>
      <s-table-column field="rate" title="ARate" width="200" :edit-render="{name: 'ARate', type: 'visible'}"></s-table-column>
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
      restaurants: ['前端', '后端', '开发', '测试'],
      ACProps: {
        dataSource: []
      },
      sexList: [],
      regionList: [],
      treeData: [{
        title: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [{
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0'
        }]
      }, {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
        children: [{
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
          disabled: true
        }, {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1'
        }, {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2'
        }]
      }],
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
          class="s-table-antd"
          height="460"
          :loading="loading"
          :data.sync="tableData"
          :mouse-config="{selected: true}"
          :keyboard-config="{isArrow: true, isDel: true, isTab: true, isEdit: true}"
          :edit-config="{key: 'id', trigger: 'dblclick', mode: 'cell'}">
          <s-table-column type="selection" width="60"></s-table-column>
          <s-table-column type="index" title="Number" width="80"></s-table-column>
          <s-table-column field="name" title="AInput" min-width="140" :edit-render="{name: 'AInput'}"></s-table-column>
          <s-table-column field="role" title="AAutoComplete" width="160" :edit-render="{name: 'AAutoComplete', props: ACProps, events: {search: roleSearchEvent}}"></s-table-column>
          <s-table-column field="age" title="AInputNumber" width="160" :edit-render="{name: 'AInputNumber', props: {max: 35, min: 18}}"></s-table-column>
          <s-table-column field="sex" title="ASelect" width="140" :edit-render="{name: 'ASelect', options: sexList}"></s-table-column>
          <s-table-column field="sex1" title="ASelect" width="160" :edit-render="{name: 'ASelect', options: sexList, props: {mode: 'multiple'}}"></s-table-column>
          <s-table-column field="sex2" title="ASelect" width="140" :edit-render="{name: 'ASelect', optionGroups: sexGroupList}"></s-table-column>
          <s-table-column field="region" title="ACascader" width="200" :edit-render="{name: 'ACascader', props: {options: regionList}}"></s-table-column>
          <s-table-column field="date7" title="ADatePicker" width="140" :edit-render="{name: 'ADatePicker', props: {type: 'date', format: 'YYYY/MM/DD'}}"></s-table-column>
          <s-table-column field="date8" title="AMonthPicker" width="140" :edit-render="{name: 'AMonthPicker'}"></s-table-column>
          <s-table-column field="date9" title="AWeekPicker" width="140" :edit-render="{name: 'AWeekPicker'}"></s-table-column>
          <s-table-column field="date11" title="ARangePicker" width="240" :edit-render="{name: 'ARangePicker'}"></s-table-column>
          <s-table-column field="date10" title="ATimePicker" width="140" :edit-render="{name: 'ATimePicker'}"></s-table-column>
          <s-table-column field="attr1" title="ATreeSelect" width="140" :edit-render="{name: 'ATreeSelect', props: {treeData}}"></s-table-column>
          <s-table-column field="attr2" title="ATreeSelect" width="140" :edit-render="{name: 'ATreeSelect', props: {treeData, treeCheckable: true}}"></s-table-column>
          <s-table-column field="flag" title="ASwitch" width="100" :edit-render="{name: 'ASwitch', type: 'visible'}"></s-table-column>
          <s-table-column field="rate" title="ARate" width="200" :edit-render="{name: 'ARate', type: 'visible'}"></s-table-column>
        </s-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false,
              tableData: [],
              restaurants: ['前端', '后端', '开发', '测试'],
              ACProps: {
                dataSource: []
              },
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
            roleSearchEvent ({ row }, value) {
              this.ACProps.dataSource = this.restaurants.filter(option => option.toUpperCase().indexOf((value || '').toUpperCase()) !== -1)
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
      this.tableData = window.MOCK_DATA_LIST.slice(0, 100)
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
    roleSearchEvent ({ row }, value) {
      this.ACProps.dataSource = this.restaurants.filter(option => option.toUpperCase().indexOf((value || '').toUpperCase()) !== -1)
    }
  }
}
</script>
