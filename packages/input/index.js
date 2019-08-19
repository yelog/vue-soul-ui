import SInput from './src/input'
import STextarea from './src/textarea'

SInput.install = function (Vue) {
  Vue.component(SInput.name, SInput)
  Vue.component(STextarea.name, STextarea)
}

export const Input = SInput
export default SInput
