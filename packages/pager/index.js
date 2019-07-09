import SPager from './src/pager'

SPager.install = function (Vue) {
  Vue.component(SPager.name, SPager)
}

export const Pager = SPager
export default SPager
