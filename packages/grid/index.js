import SGrid from './src/grid'

SGrid.install = function (Vue) {
  Vue.component(SGrid.name, SGrid)
}

export const Grid = SGrid
export default SGrid
