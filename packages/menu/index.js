import Table from '../table'
import SouUI from '../table-core'
import Panel from './src/panel'
import Methods from './src/methods'

Panel.install = function (Vue) {
  SouUI._menu = 1
  Object.assign(Table.methods, Methods)
  Vue.component(Panel.name, Panel)
}

export const Menu = Panel
export default Panel
