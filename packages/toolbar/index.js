import SToolbar from './src/toolbar'

SToolbar.install = function (Vue) {
  Vue.component(SToolbar.name, SToolbar)
}

export const Toolbar = SToolbar
export default SToolbar
