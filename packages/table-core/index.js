import XEUtils from 'xe-utils/methods/xe-utils'
import Interceptor from './src/interceptor'
import Renderer from './src/renderer'
import Buttons from './src/buttons'
import Menus from './src/menus'
import Setup from './src/setup'
import GlobalConfig from '../conf'
import { UtilTools } from '../tools'

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

/**
 * 检测模块的安装顺序是否正确
 */
function reg (key) {
  if (SoulUI.Table) {
    UtilTools.error('s.error.useErr', [key])
  }
  SoulUI[`_${key}`] = 1
}

export const SoulUI = {
  version: '1.0.2',
  t: key => GlobalConfig.i18n(key),
  v: 'v2',
  reg,
  use,
  types: {},
  setup: Setup,
  interceptor: Interceptor,
  renderer: Renderer,
  buttons: Buttons,
  menus: Menus
}

/**
 * 获取当前的 zIndex
 */
Object.defineProperty(SoulUI, 'zIndex', { get: UtilTools.getLastZIndex })

/**
 * 获取下一个 zIndex
 */
Object.defineProperty(SoulUI, 'nextZIndex', { get: UtilTools.nextZIndex })

/**
 * 获取所有导出类型
 */
Object.defineProperty(SoulUI, 'exportTypes', {
  get () {
    return Object.keys(SoulUI.types)
  }
})

/**
 * 获取所有导入类型
 */
Object.defineProperty(SoulUI, 'importTypes', {
  get () {
    const rest = []
    XEUtils.each(SoulUI.types, (flag, type) => {
      if (flag) {
        rest.push(type)
      }
    })
    return rest
  }
})

export * from './src/interceptor'
export * from './src/renderer'
export * from './src/menus'
export * from './src/buttons'
export default SoulUI
