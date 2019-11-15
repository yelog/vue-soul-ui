import Table from '../table'
import mixin from './src/mixin'
import SoulUI from '../table-core'

export const Validator = {
  install () {
    SoulUI.reg('valid')
    Table.mixins.push(mixin)
  }
}

export default Validator
