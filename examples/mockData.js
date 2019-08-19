import Vue from 'vue'
import XEUtils from 'xe-utils'
import XEAjax from 'xe-ajax'
import moment from 'moment'
import './mock'

Vue.prototype.XEUtils = XEUtils
Vue.prototype.XEAjax = XEAjax

// 后台异步生成10万数据，为了避免大量运算卡主页面
var columns = window.MOCK_COLUMN_LIST = []
var list = window.MOCK_DATA_LIST = []
var currTime = Date.now()
var fullIndex = 0
var size = 100000
function mockData () {
  let len = XEUtils.browse().msie ? 500 : 2000
  for (var index = 0; index < len; index++) {
    currTime += 7200000
    fullIndex++
    if (columns.length < 10000) {
      let colItem = {
        field: fullIndex % 2 === 0 ? 'age' : (fullIndex % 3 === 0 ? 'rate' : 'name'),
        title: 'cloumn_' + fullIndex,
        width: 160
      }
      if (fullIndex === 1) {
        colItem.type = 'selection'
        colItem.title = null
      } else if (fullIndex === 2) {
        colItem.type = 'index'
        colItem.title = '序号'
      }
      if (fullIndex < 4) {
        colItem.fixed = 'left'
        colItem.sortable = true
      } else if (fullIndex === 5) {
        colItem.filters = [
          { label: 'id < 100', value: 100 },
          { label: 'id < 2000', value: 2000 }
        ]
        colItem.filterMethod = ({ value, row, column }) => row.id < value
      }
      columns.push(colItem)
    }
    let date = new Date(currTime)
    let mDate = moment(currTime)
    list.push({
      id: fullIndex,
      name: 'test' + fullIndex,
      nickname: (index % 4 === 0 ? '陈' : index % 3 === 0 ? '李' : '徐') + fullIndex,
      role: index % 2 === 0 ? '前端' : '后端',
      key: 'home.label.key' + Math.max(0, index % 2 === 0 ? index - 1 : index),
      language: index % 2 === 0 ? 'zh-CN' : 'en_US',
      content: index % 2 === 0 ? '内容' + index : 'Content' + index,
      checked: false,
      flag: index % 2 === 0,
      date: date,
      date1: date,
      date2: '09:00:00',
      date3: XEUtils.toDateString(currTime, 'yyyy-MM-dd'),
      date4: date,
      date5: '09:00',
      date6: null,
      date7: mDate,
      date8: mDate,
      date9: mDate,
      date10: mDate,
      date11: [],
      list: [],
      time: currTime + 360000,
      sex: index % 3 ? '0' : '1',
      sex1: [index % 3 ? '0' : '1'],
      sex2: index % 3 ? '0' : '1',
      age: index % 2 === 0 ? 26 : 28,
      region: index % 4 === 0 ? [19, 199, 1773] : index % 3 === 0 ? [9, 73, 719] : [1, 1, 5],
      rate: index % 2 === 0 ? 2 : 0,
      address: `地址 地址地址 地址地址 址地址 址地址  址地址 址地址址地址址地址 地址${index}`,
      address2: `地址 地址地址 地址${index}`,
      updateTime: currTime,
      createTime: currTime,
      attr1: '',
      attr2: [],
      info: {
        name2: 'name2_' + fullIndex,
        more: {
          sex2: index % 3 ? '0' : '1',
          age2: index % 2 === 0 ? 26 : 30
        }
      }
    })
  }
  if (fullIndex < size) {
    setTimeout(mockData, 200)
  }
}

window.MOCK_TREE_DATA_LIST = [
  {
    id: '10000',
    name: '文件夹 10000',
    size: '53k',
    type: '',
    date: '2019-05-16',
    children: [
      {
        id: '11000',
        name: '文件 11000',
        size: '11k',
        type: 'js',
        date: '2019-05-16'
      },
      {
        id: '12000',
        name: '文件夹 12000',
        size: '22k',
        type: '',
        date: '2019-05-16',
        children: [
          {
            id: '12100',
            name: '文件夹 12100',
            size: '60k',
            type: '',
            date: '2019-05-16',
            children: [
              {
                id: '12110',
                name: '文件 12110',
                size: '100k',
                type: 'html',
                date: '2019-05-16'
              }
            ]
          },
          {
            id: '122000',
            name: '文件 122000',
            size: '80k',
            type: 'avi',
            date: '2019-05-16'
          }
        ]
      }
    ]
  },
  {
    id: '20000',
    name: '文件 20000',
    size: '66k',
    type: 'png',
    date: '2019-05-16'
  },
  {
    id: '30000',
    name: '文件夹 30000',
    size: '3k',
    type: '',
    date: '2019-05-16',
    children: [
      {
        id: '31000',
        name: '文件夹 31000',
        size: '9k',
        type: '',
        date: '2019-05-16',
        children: [
          {
            id: '31100',
            name: '文件 31100',
            size: 'mp3',
            type: 'js',
            date: '2019-05-16'
          },
          {
            id: '31200',
            name: '文件 31200',
            size: '224k',
            type: 'java',
            date: '2019-05-16'
          }
        ]
      },
      {
        id: '32000',
        name: '文件夹 32000',
        size: '33k',
        type: '',
        date: '2019-05-16',
        children: [
          {
            id: '32100',
            name: '文件 32100',
            size: '35k',
            type: 'mp4',
            date: '2019-05-16'
          }
        ]
      }
    ]
  }
]

mockData()
