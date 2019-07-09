import STableColumn from './src/column'

STableColumn.install = function (Vue) {
  Vue.component(STableColumn.name, STableColumn)
}

export const Column = STableColumn
export default STableColumn
