import SCheckbox from './src/checkbox'

SCheckbox.install = function (Vue) {
  Vue.component(SCheckbox.name, SCheckbox)
}

export const Checkbox = SCheckbox
export default SCheckbox
