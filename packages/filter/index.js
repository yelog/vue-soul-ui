import Table from '../table'
import SoulUI from '../table-core'
import Panel from './src/panel'
import Methods from './src/methods'

Panel.install = function (Vue) {
  SoulUI._filter = 1
  Object.assign(Table.methods, Methods)
  Vue.component(Panel.name, Panel)
}

export const Filter = Panel
export default Panel
