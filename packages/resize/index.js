import Table from '../table'
import SoulUI from '../table-core'
import mixin from './src/mixin'

export const Resize = {
  install () {
    SoulUI.reg('resize')
    Table.mixins.push(mixin)
  }
}

export default Resize
