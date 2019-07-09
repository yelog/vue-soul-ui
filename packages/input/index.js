import SInput from './src/input'

SInput.install = function (Vue) {
  Vue.component(SInput.name, SInput)
}

export const Input = SInput
export default SInput
