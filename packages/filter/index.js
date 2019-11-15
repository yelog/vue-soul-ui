import Table from '../table'
import SoulUI from '../table-core'
import Panel from './src/panel'
import mixin from './src/mixin'

Panel.install = function (Vue) {
  SoulUI.reg('filter')
  Table.mixins.push(mixin)
  Vue.component(Panel.name, Panel)
}

export const Filter = Panel
export default Panel
