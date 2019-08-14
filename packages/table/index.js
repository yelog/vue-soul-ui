import STable from './src/table'
import VXETable from '../v-x-e-table'

export const Table = STable

STable.install = function (Vue) {
  VXETable.Vue = Vue
  VXETable.Table = Table
  Vue.component(STable.name, STable)
}

export default STable
