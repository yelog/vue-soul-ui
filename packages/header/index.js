import STableHeader from './src/header'

STableHeader.install = function (Vue) {
  Vue.component(STableHeader.name, STableHeader)
}

export const Header = STableHeader
export default STableHeader
