import SButton from './src/button'

SButton.install = function (Vue) {
  Vue.component(SButton.name, SButton)
}

export const Button = SButton
export default SButton
