import SExcel from './src/excel'
import Cells from './src/cells'
import Renderer from '../table-core'

SExcel.install = function (Vue) {
  Renderer.renderer.mixin(Cells)
  Vue.component(SExcel.name, SExcel)
}

export const Excel = SExcel
export default SExcel
