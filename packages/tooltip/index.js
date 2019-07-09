import STooltip from './src/tooltip'
import GlobalConfig from '../conf'

STooltip.install = function (Vue) {
  GlobalConfig._tip = 1
  Vue.component(STooltip.name, STooltip)
}

export const Tooltip = STooltip
export default STooltip
