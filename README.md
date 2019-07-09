# s-table

[![npm version](https://img.shields.io/npm/v/s-table.svg?style=flat-square)](https://www.npmjs.org/package/s-table)
[![npm build](https://travis-ci.org/yelog/vue-soul-ui.svg?branch=master)](https://travis-ci.org/yelog/vue-soul-ui)
[![npm downloads](https://img.shields.io/npm/dm/s-table.svg?style=flat-square)](http://npm-stat.com/charts.html?package=s-table)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/index.min.js?compression=gzip&label=gzip%20size:%20JS)](https://unpkg.com/vue-soul-ui/lib/index.min.js)
[![gzip size: CSS](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/index.css?compression=gzip&label=gzip%20size:%20CSS&color=green)](https://unpkg.com/vue-soul-ui/lib/index.css)  
[![issues](https://img.shields.io/github/issues/yelog/vue-soul-ui.svg)](https://github.com/yelog/vue-soul-ui/issues)
[![issues closed](https://img.shields.io/github/issues-closed/yelog/vue-soul-ui.svg)](https://github.com/yelog/vue-soul-ui/issues?q=is%3Aissue+is%3Aclosed)
[![pull requests](https://img.shields.io/github/issues-pr/yelog/vue-soul-ui.svg)](https://github.com/yelog/vue-soul-ui/pulls)
[![pull requests closed](https://img.shields.io/github/issues-pr-closed/yelog/vue-soul-ui.svg)](https://github.com/yelog/vue-soul-ui/pulls?q=is%3Apr+is%3Aclosed)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/yelog/vue-soul-ui/blob/master/LICENSE)

A fully functional Vue Table, to meet most of the Table all requirements, and perfect compatibility with any component library.  
一个全功能的 Vue 表格，满足绝大部分对 Table 的一切需求，与任意组件库完美兼容

* s-table 的设计理念
  * 精简的 API（简洁、高效、通用）
  * 模块化表格（功能模块解耦，支持按需加载）
  * 更加灵活的自定义配置项，更高的可扩展性（兼容任意组件库，不污染全局样式及变量）
  * 强大的功能的同时兼具性能（支持横向、纵向虚拟滚动）

🐬 如果有更好的建议、优化点或 Bug 都欢迎提 [Issues](https://github.com/yelog/vue-soul-ui/issues)

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
11+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 8+ ✔ |

## Features

* Basics table （基础）
* Size （尺寸）
* Striped （斑马线条纹）
* Table with border （带边框）
* Cell style （单元格样式）
* Column resizable （列宽拖动）
* Fluid-height table with fixed header （流体高度）
* Resize height and width （响应式宽高）
* Table with fixed header （固定表头）
* Table with fixed column （固定列）
* Table with fixed columns and header （固定表头和列）
* Grouping table head （表头分组）
* Table sequence （序号)
* Radio （单选)
* Checkbox （多选）
* Sorting （排序）
* Filter （筛选）
* Rowspan and colspan （合并行或列）
* Footer summary （表尾合计）
* Export CSV （导出 CSV）
* Show/hide columns （显示/隐藏列）
* Loading （加载中）
* Format content （格式化内容）
* Custom column template （自定义模板）
* Context menu（快捷菜单）
* Virtual Scroller（虚拟滚动）
* Expandable row （展开行）
* Pager（分页）
* Toolbar（工具栏）
* Tree table （树形表格)
* Editable CRUD（增删改查)
* Editable validate（数据校验）
* DataProxy（数据代理）
* Keyboard navigation（全键盘操作）

## Modules

All modules support loading on demand.（所有的模块都支持按需加载）

* ![Table](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/table/src/table.min.js?compression=gzip&label=Table)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/table/style/style.css?compression=gzip&label=style&color=green) (核心)
  * Extends （扩展模块）
    * ![Grid](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/grid/src/grid.min.js?compression=gzip&label=Grid)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/grid/style/style.css?compression=gzip&label=style&color=green) （高级表格）
  * Modules （功能模块）
    * ![Column](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/column/src/column.min.js?compression=gzip&label=Column)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/column/style/style.css?compression=gzip&label=style&color=green) （列）
    * ![Cell](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/cell/src/cell.min.js?compression=gzip&label=Cell)![style](https://img.shields.io/badge/style-none-blue.svg) （单元格）
    * ![Header](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/header/src/header.min.js?compression=gzip&label=Header)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/header/style/style.css?compression=gzip&label=style&color=green) （表头）
    * ![Body](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/body/src/body.min.js?compression=gzip&label=Body)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/body/style/style.css?compression=gzip&label=style&color=green) （表内容）
    * ![Footer](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/footer/src/footer.min.js?compression=gzip&label=Footer)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/footer/style/style.css?compression=gzip&label=style&color=green) （表尾）
    * ![Icon](https://img.shields.io/badge/Icon-none-blue.svg)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/icon/style/style.css?compression=gzip&label=style&color=green) （图标）
    * ![Filter](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/filter/src/filter.min.js?compression=gzip&label=Filter)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/filter/style/style.css?compression=gzip&label=style&color=green) （筛选）
    * ![Loading](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/loading/src/loading.min.js?compression=gzip&label=Loading)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/loading/style/style.css?compression=gzip&label=style&color=green) （加载中）
    * ![Tooltip](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/tooltip/src/tooltip.min.js?compression=gzip&label=Tooltip)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/tooltip/style/style.css?compression=gzip&label=style&color=green) （提示信息）
    * ![Menu](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/menu/src/menu.min.js?compression=gzip&label=Menu)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/menu/style/style.css?compression=gzip&label=style&color=green) （快捷菜单）
    * ![Export](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/export/src/export.min.js?compression=gzip&label=Export)![style](https://img.shields.io/badge/style-none-blue.svg) （导出）
    * ![Resize](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/resize/src/resize.min.js?compression=gzip&label=Resize)![style](https://img.shields.io/badge/style-none-blue.svg) （响应式）
    * ![Pager](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/pager/src/pager.min.js?compression=gzip&label=Pager)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/pager/style/style.css?compression=gzip&label=style&color=green) （分页 ）
    * ![Toolbar](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/toolbar/src/toolbar.min.js?compression=gzip&label=Toolbar)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/toolbar/style/style.css?compression=gzip&label=style&color=green) （工具栏）
    * ![Checkbox](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/checkbox/src/checkbox.min.js?compression=gzip&label=Checkbox)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/checkbox/style/style.css?compression=gzip&label=style&color=green) （复选框）
    * ![Radio](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/radio/src/radio.min.js?compression=gzip&label=Radio) ![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/radio/style/style.css?compression=gzip&label=style&color=green)（单选框）
    * ![Input](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/input/src/input.min.js?compression=gzip&label=Input)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/input/style/style.css?compression=gzip&label=style&color=green) （输入框）
    * ![Message](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/message/src/message.min.js?compression=gzip&label=Message)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/message/style/style.css?compression=gzip&label=style&color=green) （消息提示框）
    * ![Button](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/button/src/button.min.js?compression=gzip&label=Button)![style](http://img.badgesize.io/https://unpkg.com/vue-soul-ui/lib/button/style/style.css?compression=gzip&label=style&color=green) （按钮）
  * Plugins（插件）
    * [![vxe-table-plugin-element](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-element/dist/index.min.js?compression=gzip&label=vxe%20table%20plugin%20element)](https://www.npmjs.org/package/vxe-table-plugin-element)![style](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-element/dist/style.min.css?compression=gzip&label=style&color=green) （[element-ui](https://www.npmjs.com/package/element-ui) 适配插件）
    * [![vxe-table-plugin-iview](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-iview/dist/index.min.js?compression=gzip&label=vxe%20table%20plugin%20iview)](https://www.npmjs.org/package/vxe-table-plugin-iview)![style](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-iview/dist/style.min.css?compression=gzip&label=style&color=green) （[iview](https://www.npmjs.com/package/iview) 适配插件）
    * [![vxe-table-plugin-antd](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-antd/dist/index.min.js?compression=gzip&label=vxe%20table%20plugin%20antd)](https://www.npmjs.org/package/vxe-table-plugin-antd)![style](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-antd/dist/style.min.css?compression=gzip&label=style&color=green) （[ant-design-vue](https://www.npmjs.com/package/ant-design-vue) 适配插件）

## Docs

[To view the example](https://yelog.github.io/vue-soul-ui/) [查看演示](https://saodiyang.gitee.io/vue-soul-ui/)  
[To view the document](https://yelog.github.io/vue-soul-ui/#/table/api) [查看文档](https://saodiyang.gitee.io/vue-soul-ui/#/table/api)  

## Installing

require: Vue 2.6+

```shell
npm install xe-utils s-table
```

Get on [unpkg](https://unpkg.com/s-table/) and [cdnjs](https://cdn.jsdelivr.net/npm/s-table/)

```HTML
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vue-soul-ui/lib/index.css">
<!-- 引入脚本 -->
<script src="https://unpkg.com/xe-utils"></script>
<script src="https://unpkg.com/s-table"></script>
```

```javascript
import Vue from 'vue'
import VXETable from 's-table'
import 'vue-soul-ui/lib/index.css'

Vue.use(VXETable, {
  size: 'small',
  tooltipConfig: {
    zIndex: 3000
  }
})
```

## Import on demand

By using the [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import) , you can load modules on demand and reduce the size of files. First installation, then update .babelrc file  
借助插件 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import) 可以实现按需加载模块，减少文件体积。然后在文件 .babelrc 中配置

```shell
npm install babel-plugin-import -D
```

```javascript
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "s-table",
        "style": true
      }
    ]
  ]
}
```

Now you can import modules like  
最后这样按需引入模块，就可以减小体积了

```javascript
import {
  VXETable,
  Table,
  Column,
  Cell,
  Header,
  Body,
  Icon
} from 's-table'
import zhCNLocat from 'vue-soul-ui/lib/locale/lang/zh-CN'

Vue.use(Table)
Vue.use(Column)
Vue.use(Cell)
Vue.use(Header)
Vue.use(Body)
Vue.use(Icon)

// The on-demand mode is not internationalized by default and needs to be imported by itself
// 按需加载的方式默认是不带国际化的，需要自行导入
VXETable.setup({
  i18n: (key, value) => VXETable.t(zhCNLocat, key)
})
```

## Internationalization

```shell
npm install s-i18n
```

```javascript
import Vue from 'vue'
import VueI18n from 's-i18n'
import VXETable from 's-table'
import zhCNLocat from 'vue-soul-ui/lib/locale/lang/zh_CN'
import enLocat from 'vue-soul-ui/lib/locale/lang/en'

const messages = {
  zh_CN: {
    ...zhCNLocat
  },
  en: {
    ...enLocat
  }
}

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages,
})

Vue.use(VXETable, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({ i18n }).$mount('#app')
```

## Example

```html
<template>
  <div>
    <s-table ref="xTable" :data.sync="tableData">
      <s-table-column type="index" title="Number" width="80"></s-table-column>
      <s-table-column field="name" title="Name"></s-table-column>
      <s-table-column field="sex" title="Sex"></s-table-column>
      <s-table-column field="address" title="Address"></s-table-column>
    </s-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          id: 10001,
          name: 'test1',
          role: 'developer',
          sex: 'Man',
          address: 'address abc123'
        }
      ]
    }
  }
}
</script>
```

## Donation

If the project is very helpful to you, you can buy the author a cup of coffee.  
如果这个项目对您有帮助，请作者喝杯咖啡吧。☕

![pay](https://github.com/yelog/vue-soul-ui/blob/master/public/donation/pay.jpg?raw=true)

## License

Copyright (c) 2019-present, Xu Liangzhan
