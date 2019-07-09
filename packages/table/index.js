import STable from './src/table'

STable.install = function (Vue) {
  Vue.component(STable.name, STable)
}

export const Table = STable
export default STable
