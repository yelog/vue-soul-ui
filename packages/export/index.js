import Table from '../table'
import SoulUI from '../table-core'
import Methods from './src/methods'

export const Export = {
  install () {
    SoulUI._export = 1
    Object.assign(Table.methods, Methods)
  }
}

export default Export
