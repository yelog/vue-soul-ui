import Table from '../table'
import Methods from './src/methods'
import SoulUI from '../table-core'

export const Keyboard = {
  install () {
    SoulUI._keyboard = 1
    Object.assign(Table.methods, Methods)
  }
}

export default Keyboard
