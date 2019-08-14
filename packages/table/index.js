import STable from './src/table'
import SoulUI from '../table-core'

export const Table = STable

STable.install = function (Vue) {
  SoulUI.Vue = Vue
  SoulUI.Table = Table
  Vue.component(STable.name, STable)
}

export default STable
