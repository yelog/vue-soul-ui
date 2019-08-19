import XEUtils from 'xe-utils'
import GlobalConfig from '../../conf'
import { UtilTools, DomTools } from '../../tools'

export default {
  name: 'SButton',
  props: {
    type: String,
    size: String,
    name: [String, Number],
    disabled: Boolean
  },
  computed: {
    vSize () {
      return this.size || this.$parent.size || this.$parent.vSize
    }
  },
  render (h) {
    let { $scopedSlots, $listeners, type, vSize, name, disabled } = this
    let isText = type === 'text'
    return $scopedSlots.dropdowns ? h('div', {
      class: ['s-button--dropdown', {
        [`size--${vSize}`]: vSize
      }]
    }, [
      h('button', {
        class: ['s-button', `type--${isText ? type : 'button'}`, {
          [`size--${vSize}`]: vSize,
          [`theme--${type}`]: type && !isText
        }],
        attrs: {
          name,
          disabled
        },
        on: Object.assign({
          mouseenter: this.mouseenterEvent,
          mouseleave: this.mouseleaveEvent
        }, XEUtils.objectMap($listeners, (cb, type) => evnt => this.$emit(type, evnt)))
      }, [
        h('span', $scopedSlots.default.call(this)),
        h('i', {
          class: `s-button--dropdown-arrow ${GlobalConfig.icon.dropdownBottom}`
        })
      ]),
      h('div', {
        class: 's-button--dropdown-wrapper',
        on: {
          click: this.clickDropdownEvent,
          mouseenter: this.mouseenterEvent,
          mouseleave: this.mouseleaveEvent
        }
      }, $scopedSlots.dropdowns.call(this))
    ]) : h('button', {
      class: ['s-button', `type--${isText ? type : 'button'}`, {
        [`size--${vSize}`]: vSize,
        [`theme--${type}`]: type && !isText
      }],
      attrs: {
        name,
        disabled
      },
      on: XEUtils.objectMap($listeners, (cb, type) => evnt => this.$emit(type, evnt))
    }, $scopedSlots.default.call(this))
  },
  methods: {
    clickDropdownEvent (evnt) {
      let dropdownElem = evnt.currentTarget
      let wrapperElem = dropdownElem.parentNode
      let { flag, targetElem } = DomTools.getEventTargetNode(evnt, dropdownElem, 's-button')
      if (flag) {
        wrapperElem.dataset.active = 'N'
        DomTools.removeClass(wrapperElem, 'is--active')
        UtilTools.emitEvent(this, 'dropdown-click', [{ name: targetElem.getAttribute('name') }, evnt])
      }
    },
    mouseenterEvent (evnt) {
      let dropdownElem = evnt.currentTarget
      let wrapperElem = dropdownElem.parentNode
      wrapperElem.dataset.active = 'Y'
      DomTools.addClass(wrapperElem, 'is--active')
    },
    mouseleaveEvent (evnt) {
      let dropdownElem = evnt.currentTarget
      let wrapperElem = dropdownElem.parentNode
      wrapperElem.dataset.active = 'N'
      setTimeout(() => {
        if (wrapperElem.dataset.active !== 'Y') {
          DomTools.removeClass(wrapperElem, 'is--active')
        }
      }, 300)
    }
  }
}
