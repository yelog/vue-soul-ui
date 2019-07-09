import STableLoading from './src/loading'

STableLoading.install = function (Vue) {
  Vue.component(STableLoading.name, STableLoading)
}

export const Loading = STableLoading
export default STableLoading
