import SRadio from './src/radio'

SRadio.install = function (Vue) {
  Vue.component(SRadio.name, SRadio)
}

export const Radio = SRadio
export default SRadio
