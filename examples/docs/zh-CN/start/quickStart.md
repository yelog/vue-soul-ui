## 完整引入
```js
import Vue from 'vue'
import SoulUI from 'vue-soul-ui'
import 'vue-soul-ui/lib/index.css'

Vue.use(SoulUI)
```

## 按需引入
借助插件 `babel-plugin-import` 可以实现按需加载模块，减少文件体积。然后在文件 `.babelrc` 中配置
```bash
npm install babel-plugin-import -D
```
```js
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "vue-soul-ui",
        "style": true // 样式是否也按需加载
      }
    ]
  ]
}
```

最后这样按需引入模块，就可以减小体积了
```js
import {
    SoulUI,
    Table,
    Column,
    Cell,
    Header,
    Body,
    Footer,
    Icon,
    Filter,
    Loading,
    Tooltip,
    Grid,
    Excel,
    Menu,
    Toolbar,
    Pager,
    Checkbox,
    Radio,
    Input,
    Button,
    Message,
    Export,
    Resize
} from 'vue-soul-ui'

import zhCNLocat from 'vue-soul-ui/lib/locale/lang/zh-CN'

Vue.use(Table)
Vue.use(Column)
Vue.use(Cell)
Vue.use(Header)
Vue.use(Body)
Vue.use(Footer)
Vue.use(Icon)
Vue.use(Filter)
Vue.use(Loading)
Vue.use(Tooltip)
Vue.use(Grid)
Vue.use(Excel)
Vue.use(Menu)
Vue.use(Toolbar)
Vue.use(Pager)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Button)
Vue.use(Message)
Vue.use(Export)
Vue.use(Resize)

// 按需加载的方式默认是不带国际化的，需要自行导入
SoulUI.setup({
i18n: (key, value) => SoulUI.t(zhCNLocat, key)
})

```
    
局部 size 设置

每个组件都有 size 属性，默认是继承父组件，所以只要给局部的父组件设置 size，所有后代组件一律继承，该功能对于很多场景中都非常有用
  
全局默认参数
    
```js
import Vue from 'vue'
import SoulUI from 'vue-soul-ui'
import 'vue-soul-ui/lib/index.css'

Vue.use(SoulUI, {
  size: 'small',
  version: 0,
  tooltip: {
    zIndex: 3000 // 对于在某些场景中，由于堆叠被覆盖时可能会用到
  }
})
```

通过 setup 函数设置
```js
  import Vue from 'vue'
  import SoulUI from 'vue-soul-ui'
  import 'vue-soul-ui/lib/index.css'

  SoulUI.setup({
    // 默认表格参数
    size: 'small',
    showOverflow: null,
    showHeaderOverflow: null,
    stripe: false,
    border: false,
    resizable: false,
    fit: true,
    showHeader: true,
    validConfig: {
      message: 'default'
    },
    // 版本号（对于某些带 Storage 数据储存的功能有用到，上升版本号可以用于重置 Storage 数据）
    version: 0,
    // 自定义图标配置（如果全部图标都使用自定义，就不需要引入 Icon 模块了，减少体积）
    icon: {
      sortAsc: 'vxe-icon--caret-top',
      sortDesc: 'vxe-icon--caret-bottom',
      filter: 'vxe-icon--funnel',
      edit: 'vxe-icon--edit-outline',
      tree: 'vxe-icon--caret-right',
      jumpPrev: 'vxe-icon--d-arrow-left',
      jumpNext: 'vxe-icon--d-arrow-right',
      prevPage: 'vxe-icon--arrow-left',
      nextPage: 'vxe-icon--arrow-right',
      msgClose: 'vxe-icon--close',
      msgInfo: 'vxe-icon--info',
      msgSuccess: 'vxe-icon--success',
      msgWarning: 'vxe-icon--warning',
      msgError: 'vxe-icon--error',
      msgLoading: 'vxe-icon--refresh roll'
    },
    // 高级表格默认配置
    grid: {
      proxyConfig: {
        autoLoad: true,
        message: true,
        props: {
          list: null,
          data: 'result',
          page: 'page.total'
        }
      }
    },
    // 默认快捷菜单
    menu: {},
    // 默认 tooltip 主题样式
    tooltip: {
      zIndex: 99,
      theme: 'dark'
    },
    // 默认分页参数
    pager: {
      pageSize: 10,
      pagerCount: 7,
      pageSizes: [10, 15, 20, 50, 100],
      layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total'] // 非常灵活的分页布局，支持任意位置随意换
    },
    // 默认工具栏参数
    toolbar: {
      setting: false,
      buttons: []
    },
    // 默认消息提示框参数
    message: {
      zIndex: 999,
      lockView: true,
      lockScroll: true,
      mask: true,
      duration: 3000,
      animat: true
    },
    // 默认优化配置项
    optimization : {
      animat: true,
      // 当表头大于 40 列时自动启用横向 X 滚动渲染
      scrollX: {
        gt: 40,
        oSize: 5,
        rSize: 16
      },
      // 当行数据大于 500 条时自动启用纵向 Y 滚动渲染
      scrollY: {
        gt: 500,
        oSize: 20,
        rSize: 80
      }
    }
  })
```
    

      
