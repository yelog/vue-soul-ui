import Table from '../table'
import SoulUI from '../table-core'
import Methods from './src/methods'

export const Resize = {
  install () {
    SoulUI._resize = 1
    Object.assign(Table.methods, Methods)
  }
}

export default Resize
