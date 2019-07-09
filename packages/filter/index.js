import STableFilter from './src/filter'

STableFilter.install = function (Vue) {
  Vue.component(STableFilter.name, STableFilter)
}

export const Filter = STableFilter
export default STableFilter
