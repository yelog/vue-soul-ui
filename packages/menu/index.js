import Table from '../table'
import SouUI from '../table-core'
import Panel from './src/panel'
import mixin from './src/mixin'

Panel.install = function (Vue) {
  SouUI.reg('menu')
  Table.mixins.push(mixin)
  Vue.component(Panel.name, Panel)
}

export const Menu = Panel
export default Panel
