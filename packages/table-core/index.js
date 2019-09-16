import XEUtils from 'xe-utils/methods/xe-utils'
import Interceptor from './src/interceptor'
import Renderer from './src/renderer'
import Buttons from './src/buttons'
import Menus from './src/menus'
import Setup from './src/setup'

const installedPlugins = []

function use (Plugin, options) {
  if (Plugin && Plugin.install) {
    if (installedPlugins.indexOf(Plugin) === -1) {
      Plugin.install(SoulUI, options)
      installedPlugins.push(Plugin)
    }
  }
  return SoulUI
}

export const SoulUI = {
  version: '1.0.2',
  t: XEUtils.get,
  v: 'v2',
  use,
  setup: Setup,
  interceptor: Interceptor,
  renderer: Renderer,
  buttons: Buttons,
  menus: Menus
}

export * from './src/interceptor'
export * from './src/renderer'
export * from './src/menus'
export * from './src/buttons'
export default SoulUI
