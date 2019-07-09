import XEUtils from 'xe-utils'

export default {
  name: 'SButton',
  props: {
    type: String,
    size: String
  },
  computed: {
    vSize () {
      return this.size || this.$parent.size || this.$parent.vSize
    }
  },
  render (h) {
    let { $listeners, type, vSize } = this
    let on = null
    if ($listeners) {
      on = XEUtils.objectMap($listeners, (cb, type) => evnt => this.$emit(type, evnt))
    }
    return h(type === 'text' ? 'a' : 'button', {
      class: ['s-button', {
        [`size--${vSize}`]: vSize,
        [`type--${type}`]: type
      }],
      on
    }, this.$slots.default)
  }
}
