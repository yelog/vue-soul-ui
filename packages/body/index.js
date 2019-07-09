import STableBody from './src/body'

STableBody.install = function (Vue) {
  Vue.component(STableBody.name, STableBody)
}

export const Body = STableBody
export default STableBody
