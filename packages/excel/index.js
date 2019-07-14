import SExcel from './src/excel'
import Cells from './src/cells'
import VXETable from '../v-x-e-table'

SExcel.install = function (Vue) {
  VXETable.renderer.mixin(Cells)
  Vue.component(SExcel.name, SExcel)
}

export const Excel = SExcel
export default SExcel
