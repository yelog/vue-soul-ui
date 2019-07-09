import SExcel from './src/excel'

SExcel.install = function (Vue) {
  Vue.component(SExcel.name, SExcel)
}

export const Excel = SExcel
export default SExcel
