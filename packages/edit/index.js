import Table from '../table'
import mixin from './src/mixin'
import SoulUI from '../table-core'

export const Edit = {
  install () {
    SoulUI.reg('edit')
    Table.mixins.push(mixin)
  }
}

export default Edit
