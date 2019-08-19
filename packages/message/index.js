import XEUtils from 'xe-utils'
import SMessageBox from './src/message'
import MsgQueue from './src/msgQueue'

var AlertController = null

export function Message (options) {
  return new Promise(resolve => {
    if (options && options.id && MsgQueue.some(comp => comp.id === options.id)) {
      resolve('exist')
    } else {
      let $alert = new AlertController({
        el: document.createElement('div'),
        propsData: options
      })
      $alert._handleCustom = function (type) {
        $alert.$destroy()
        resolve(type)
      }
      setTimeout(() => $alert.open())
    }
  })
}

['alert', 'confirm', 'message'].forEach((type, index) => {
  let defOpts = index === 2 ? {
    mask: false,
    lockView: false,
    lockScroll: false
  } : {}
  defOpts.type = type
  if (index === 1) {
    defOpts.status = 'question'
  }
  Message[type] = function (message, title, options) {
    let opts
    if (XEUtils.isObject(message)) {
      opts = message
    } else {
      if (title) {
        opts = { title }
      }
    }
    return Message(Object.assign({ message: XEUtils.toString(message), type }, defOpts, opts, options))
  }
})

Message.install = function (Vue) {
  Vue.component(SMessageBox.name, SMessageBox)
  AlertController = Vue.extend(SMessageBox)
  Vue.prototype.$XMsg = Message
}

export default Message
