import Table from '../table'
import mixin from './src/mixin'
import SoulUI from '../table-core'

export const Keyboard = {
  install () {
    SoulUI.reg('keyboard')
    Table.mixins.push(mixin)
  }
}

export default Keyboard
