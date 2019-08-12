import Vue from 'vue'
import i18n from '@/i18n'

import VXETable from '../../../packages/v-x-e-table'
import Table from '../../../packages/table'
import Column from '../../../packages/column'
import Header from '../../../packages/header'
import Body from '../../../packages/body'
import Footer from '../../../packages/footer'
import Filter from '../../../packages/filter'
import Loading from '../../../packages/loading'
import Grid from '../../../packages/grid'
import Excel from '../../../packages/excel'
import Menu from '../../../packages/menu'
import Toolbar from '../../../packages/toolbar'
import Pager from '../../../packages/pager'
import Checkbox from '../../../packages/checkbox'
import Radio from '../../../packages/radio'
import Input from '../../../packages/input'
import Button from '../../../packages/button'
import Message from '../../../packages/message'
import Tooltip from '../../../packages/tooltip'
import Export from '../../../packages/export'
import Resize from '../../../packages/resize'
import '../../../styles/index.scss'

// import VXETablePluginElement from '../../../../vxe-table-plugin-element/index.js'
// import VXETablePluginIView from '../../../../vxe-table-plugin-iview/index.js'
// import VXETablePluginAntd from '../../../../vxe-table-plugin-antd/index.js'
import VXETablePluginElement from 'vxe-table-plugin-element'
import VXETablePluginIView from 'vxe-table-plugin-iview'
import VXETablePluginAntd from 'vxe-table-plugin-antd'
import 'vxe-table-plugin-element/dist/style.css'
import 'vxe-table-plugin-iview/dist/style.css'
import 'vxe-table-plugin-antd/dist/style.css'

VXETable.setup({
  translate: key => key && key.indexOf('app.') > -1 ? i18n.t(key) : key, // 自动翻译以 app. 开头的键值
  i18n: (key, value) => i18n.t(key, value)
})

Vue.use(Table)
Vue.use(Column)
Vue.use(Header)
Vue.use(Body)
Vue.use(Footer)
Vue.use(Filter)
Vue.use(Loading)
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
Vue.use(Tooltip)
Vue.use(Export)
Vue.use(Resize)

VXETable.use(VXETablePluginElement)
VXETable.use(VXETablePluginIView)
VXETable.use(VXETablePluginAntd)
