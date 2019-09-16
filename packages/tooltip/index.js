import STooltip from './src/tooltip'
import SoulUI from '../table-core'

STooltip.install = function (Vue) {
  SoulUI._tooltip = 1
  Vue.component(STooltip.name, STooltip)
}

export const Tooltip = STooltip
export default STooltip
